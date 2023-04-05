package externalapp.startable

uses gw.api.startable.IStartablePlugin
uses gw.api.startable.StartablePluginCallbackHandler
uses gw.api.startable.StartablePluginState

/**
 * Created by jsuja on 11/29/2016.
 */
class AsyncJmsIStartablePlugin implements IStartablePlugin {

  private var _state = StartablePluginState.Stopped
  private var _listener : AsyncJmsMessageHandler

  override function start(startablePluginCallbackHandler: StartablePluginCallbackHandler, b: boolean) {
    this.stop(false)
    // only start via UI
    if (b == false) {
      _listener = new AsyncJmsMessageHandler()
      _listener.start()
      _state = StartablePluginState.Started
    }
  }

  override function stop(b: boolean) {
    if (_listener != null) {
      _listener.stop()
      _listener = null
    }
    _state = StartablePluginState.Stopped
  }

  override property get State(): StartablePluginState {
    return _state
  }
}