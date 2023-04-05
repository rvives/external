package externalapp.startable

uses gw.api.util.*
uses gw.pl.logging.LoggerCategory
uses gw.plugin.messaging.InitializationException
uses org.slf4j.Logger

uses javax.jms.Connection
uses javax.jms.ConnectionFactory
uses javax.jms.Destination
uses javax.jms.JMSException
uses javax.jms.MessageConsumer
uses javax.jms.MessageListener
uses javax.jms.MessageProducer
uses javax.jms.Session
uses javax.jms.TextMessage
uses javax.naming.Context
uses javax.naming.InitialContext

/**
 * Created by jsuja on 11/29/2016.
 */
class AsyncJmsMessageHandler implements MessageListener {

  final public static var NAMING_FACTORY_INITIAL: String = "java.naming.factory.initial"
  final public static var NAMING_PROVIDER_URL: String = "java.naming.provider.url"
  final public static var NAMING_CONNECTION_FACTORY: String = "connectionFactoryNames"
  final public static var NAMING_QUEUE_SEND: String = "queue.outbound"
  final public static var NAMING_QUEUE_REPLY: String = "queue.inbound"
  //private variables that will be initialized with connection attributes
  private var _logger: Logger = LoggerCategory.INTEGRATION_JMS
  private var _context: InitialContext = null
  private var _contextProviderURL: String = "tcp://localhost:61616"
  private var _initialContextFactory: String = "org.apache.activemq.jndi.ActiveMQInitialContextFactory"
  private var _connectionFactory: String = "ConnectionFactory"
  private var _sendQueue: String = "outboundRequest"
  private var _replyQueue: String = "inboundReply"
  //Private variables to handle messages
  private var _connection: Connection
  private var _session: Session
  private var _producer: MessageProducer
  private var _consumer: MessageConsumer

  override function onMessage(message: javax.jms.Message) {
    if (message typeis TextMessage) {
      try {
        _logger.info("AsyncJmsMessageHandler.onMessage() - JMS Text Message (JMSCorrelationID: ${message.JMSCorrelationID}) request received: \n " + message.Text)
        var xmlPayload = externalapp.startable.xsd.asyncjmsmessage.ABPerson.parse(message.Text)
        // if no DateOfBirth provided, then return -10000 by default
        xmlPayload.Age = -10000
        if (message.JMSCorrelationID == null or message.JMSCorrelationID.Empty) {
          // if no CorrelationID (SenderRefID) provided, then return -10001
          xmlPayload.Age = -10001
        } else if (xmlPayload.DateOfBirth != null) {
          var ageInDays = DateUtil.daysBetween(DateUtil.currentDate(), xmlPayload.DateOfBirth)
          var ageInYears = Math.roundDown(ageInDays / 365)
          if (DateUtil.currentDate() < xmlPayload.DateOfBirth) {
            ageInYears = ageInYears * -1
          }
          xmlPayload.Age = ageInYears as int
        }
        var payload = xmlPayload.asUTFString()
        // send back a JMS reply message, with the Age element populated
        this.sendMessage(payload, message.JMSCorrelationID, false)
        // acknowledge the received JMS request message
        message.acknowledge()
        // use Groundhog Day for duplicate replies, use the first digit from year for number of such
        if (xmlPayload.DateOfBirth != null) {
          var yearNum = DateUtil.getYear(xmlPayload.DateOfBirth)
          var monthNum = DateUtil.getMonth(xmlPayload.DateOfBirth)
          var dayNum = DateUtil.getDayOfMonth(xmlPayload.DateOfBirth)
          if (monthNum == 2 && dayNum == 2) {
            var yearCount: int = 0
            var firstDigit = Math.roundDown(yearNum / 1000)
            while (yearCount < firstDigit) {
              // wait 5 seconds before sending a duplicate
              Thread.sleep(5000)
              this.sendMessage(payload, message.JMSCorrelationID, false)
              yearCount++
            }
          }
        }
      } catch (t: Throwable) {
        _logger.error("AsyncJmsMessageHandler.onMessage() - JMS Text Message (JMSCorrelationID: ${message.JMSCorrelationID}) processing failed:/n" + t.Message)
      }
    }
  }

  @Throws(InitializationException, "start() - if failed, throws an exception")
  public function start(): void {
    try {
      this._logger.info("AsyncJmsMessageHandler.start() - called")

      this.createConnection()
      // create a session with CLIENT ACKNOWLEDGE setting for receiving,
      // i.e. the message listener/handler must ACK the received JMS message
      _session = _connection.createSession(false, Session.CLIENT_ACKNOWLEDGE)
      // Create a MessageConsumer from the Session to the Topic or Queue
      _consumer = _session.createConsumer(_context.lookup(_sendQueue) as Destination)
      // register the message listener
      _consumer.setMessageListener(this)
      // start the connection after registering the listener
      _connection.start()
      // Create a message producer from the session
      _producer = _session.createProducer(_context.lookup(_replyQueue) as Destination)
      // catch an InitializationException throw in create connection
    } catch (eIE: InitializationException) {
      this._logger.error("AsyncJmsMessageHandler.start() - failed:\n " + eIE.Message)
      //resume failed, clean up before throwing an exception
      this.stop()
      // rethrow the original InitializationException
      throw eIE
    } catch (exc: Throwable) {
      this._logger.error("AsyncJmsMessageHandler.start() - failed:\n " + exc.Message)
      //resume failed, clean up before throwing an exception
      this.stop()
      throw exc
    }
  }

  @Throws(InitializationException, "stop() - if failed, throws an exception")
  public function stop(): void {
    try {
      this._logger.info("AsyncJmsMessageHandler.stop() - called")

      // Clean up
      if (_producer != null) {
        _producer.close()
        _producer = null
      }
      if (_consumer != null) {
        _consumer.close()
        _consumer = null
      }
      this.closeConnection()
      // catch an InitializationException throw in close connection
    } catch (eIE: InitializationException) {
      this._logger.error("AsyncJmsMessageHandler.stop() - failed:\n " + eIE.Message)
      // rethrow the original InitializationException
      throw eIE
    } catch (exc: Throwable) {
      this._logger.error("AsyncJmsMessageHandler.stop() - failed:\n " + exc.Message)
      throw exc
    }
  }

  /**
   * function that creates a new JMS connection
   */
  private function createConnection(): void {
    try {
      this._logger.debug("AsyncJmsMessageHandler.createConnection() - Parameters:\n "
          + NAMING_FACTORY_INITIAL + ": ${_initialContextFactory}\n "
          + NAMING_PROVIDER_URL + ": ${_contextProviderURL}\n "
          + NAMING_CONNECTION_FACTORY + ": ${_connectionFactory}\n "
          + NAMING_QUEUE_SEND + ": ${_sendQueue}\n "
          + NAMING_QUEUE_REPLY + ": ${_replyQueue}")

      if (_connection != null) {
        this.closeConnection()
      }
      // set the thread local classloader for the initial context create
      Thread.currentThread().ContextClassLoader = (AsyncJmsMessageHandler.Type as Class).ClassLoader
      // get the initial context
      var env = new Properties()
      env.put(Context.INITIAL_CONTEXT_FACTORY, _initialContextFactory)
      env.put(Context.PROVIDER_URL, _contextProviderURL)
      env.put("queue." + _sendQueue, _sendQueue)
      env.put("queue." + _replyQueue, _replyQueue)
      _context = new InitialContext(env)
      // create a connection factory for the request queue
      var connFactory = _context.lookup(_connectionFactory) as ConnectionFactory
      // create a new connection
      _connection = connFactory.createConnection()
      // catch an InitializationException throw in close connection
    } catch (eIE: InitializationException) {
      this._logger.error("AsyncJmsMessageHandler.createConnection() - failed:\n " + eIE.Message)
      // rethrow the original InitializationException
      throw eIE
    } catch (exc: Throwable) {
      this._logger.error("AsyncJmsMessageHandler.createConnection() - failed:\n " + exc.Message)
      throw exc
    }
  }

  /**
   * function that closes the JMS connection
   */
  private function closeConnection(): void {
    try {
      this._logger.debug("AsyncJmsMessageHandler.closeConnection() - called")

      if (_session != null) {
        _session.close()
        _session = null
      }
      if (_connection != null) {
        _connection.close()
        _connection = null
      }
    } catch (exc: Throwable) {
      this._logger.error("AsyncJmsMessageHandler.closeConnection() - failed:\n " + exc.Message)
      throw exc
    }
  }

  private function sendMessage(payload: String, correlationID: String, exitFlag: boolean): void {

    try {
      this._logger.debug("AsyncJmsMessageHandler.sendMessage() - JMSCorrelationID: ${correlationID}) called: '${exitFlag}'")

      var jmsMessage = _session.createTextMessage()
      jmsMessage.JMSCorrelationID = correlationID
      jmsMessage.Text = payload
      _producer.send(jmsMessage)

      this._logger.info("AsyncJmsMessageHandler.sendMessage() - JMS Text Message (JMSCorrelationID: ${jmsMessage.JMSCorrelationID}) reply sent:\n " + payload)
    } catch (eISE: javax.jms.IllegalStateException) {
      if (!exitFlag) {
        // reset the plugin connection and try one more time, e.g. a JMS connection timeout
        this.stop()
        this.start()
        this.sendMessage(payload, correlationID, true)
      } else {
        this._logger.error("AsyncJmsMessageHandler.sendMessage() - failed:\n " + eISE.Message)
        throw eISE
      }
    } catch (eJMS: JMSException) {
      this._logger.error("AsyncJmsMessageHandler.sendMessage() - failed:\n " + eJMS.Message)
      throw eJMS
    } catch (exc: Throwable) {
      this._logger.error("AsyncJmsMessageHandler.sendMessage() - failed:\n " + exc.Message)
      throw exc
    }
  }
}