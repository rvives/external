/**
 * Catch-all for utility methods used by multiple systems.
 */
import { GwRegisteredSystem } from "./GwRegisteredSystem";
import { GwClassIdTagOrNode, GwContextNode, GwDomNode, GwDomNodeList, GwEventType, GwInputElement, GwIterable, GwIterationCallback, GwMap } from "../../types/gwTypes";
import { GwPoint } from "../GwPoint";
export declare class GwUtil extends GwRegisteredSystem {
    readonly whitespaceRegex: RegExp;
    readonly targetIdsToAnimate: string[];
    readonly CSRF_PARAM_NAME: string;
    private _isIE11;
    private _isEdge;
    getSystemName(): string;
    getUtilityInfo(id: string): string;
    getUtilityFlag(id: string): boolean;
    getUtilityJson(id: string): any;
    onLoginPage(): boolean;
    hasUnsavedWork(): boolean;
    /**
     * Returns a vector
     * @param el
     * @param e
     * @returns GwPoint
     */
    getMousePosition(el: GwDomNode, e: MouseEvent): GwPoint;
    convertIfString(val: any): any;
    /**
     * @public
     *
     * @param id: the event id, including the suffix, most commonly _act.
     */
    fireEvent(id: string): void;
    /**
     * Calls the server to render children that weren't initially rendered, but are rendered as the result of
     * clicking on the element with the given id. This is how subMenuOnDemand is implemented. The server is
     * notified that the children of the element with the given id are needed and it responds with just the
     * HTML for those children. The new HTML is added into the DOM (or replaces existing HTML if the children
     * were already present for some reason). In the event of an error contacting the server the onError
     * handler is called so the caller can clean up any client side state.
     */
    renderDeferredChildren(id: string, onSuccess: Function, onError: Function): void;
    showOnDemandElement(id: String, callback?: Function): void;
    hideOnDemandElement(id: String): void;
    freeze(obj: object): void;
    /**
     * If a widget has PostOnChange=true, this function will be called onChange()
     * Sends the current form to the server, with no specific action as the source.
     */
    refresh(id?: string): void;
    unsavedWork(id: string, unsavedWorkItem: string): void;
    browserAction(node: GwDomNode, id: string, event?: GwEventType): void;
    setEventParam(name: string, value: string): void;
    clearEventParam(): void;
    runAfterPageLoad(): void;
    /**
     * Work around to support Edge; during certain page transitions where a large number of DOM elements
     * get swapped quickly, the first element clicked loses it's global onClick.
     * @param classIdTagOrNode
     * @param newContent
     */
    replaceTarget(classIdTagOrNode: string | GwDomNode, newContent: string): void;
    cleanId(id: string): string;
    replaceTargets(start: number, prog: number, inc: number, targets: GwDomNode[]): void;
    private replaceDeferred(deferredTargetID, childContent?, isEmptyContent?);
    /**
     * Helper for truthy falsey evals when all you care about is not null or undefined.
     * Common JS library method.
     * @param thing
     * @returns {boolean}
     */
    hasValue(thing: any): boolean;
    convertAllWhitespaceToStandard(str: string): string;
    /**
     * Reloads the client from cache without asking the server for any files.
     */
    reloadClient(): void;
    forceFullClientRefresh(): void;
    setOptionOnSelect(classIdTagOrNode: GwClassIdTagOrNode, valStr: string, ignoreNullEl?: boolean): void;
    setOptionsOnSelect(classIdTagOrNode: string | GwDomNode, values: string[]): void;
    /**
     * Returns the element.dataset.dataSetProp if it exists, or if provided, a defaultValue, else an empty string
     * @param classIdTagOrNode
     * @param dataSetProp - camelCase property on the dataset object
     * @param defaultValue - optional return value if no matching property found
     * @returns {*}
     */
    getDatasetPropOrDefault(classIdTagOrNode: string | GwDomNode, dataSetProp: string, defaultValue?: string): string;
    private readonly UNIQUE_CHILD_CLASSES;
    /**
     * Given a dom element try to construct a selector that can be given to document.querySelector to return that
     * same element. This relies on some assumptions about our HTML. We assume any element id or name is unique.
     * Then for certain CSS classes we assume only one child with that class will appear under a parent with a
     * particular id (so we can use the parent id plus the class to uniquely identify the child).
     * @param {GwDomNode} node
     * @returns {string | null}
     */
    getUniqueSelector(node: GwDomNode): string | null;
    /**
     * @private
     * Used inside of getDomeNode and getDomNodes to select the correct method
     * @param classIdOrTag
     * @returns {}
     */
    private getElementsByString(classIdTagOrNode, contextNode?);
    /**
     * @public
     * Returns a collection. Always. Even if passing in dom node or an id or an HTMLCollection.
     * @param classIdTagOrNode: class, id, or tag string, or
     * @returns {collection of DOM Nodes}
     */
    getDomNodes(classIdTagOrNode: GwClassIdTagOrNode | GwDomNodeList, contextNode?: GwContextNode): GwDomNodeList;
    /**
     * @public
     * Returns a single Dom Node
     * @param classIdTagOrNode: class string, id string, tag string, or if it's a node, it gets passed right back.
     * @contextNode the node too search within
     * @returns {DOM Node}
     */
    getDomNode(classIdTagOrNode: GwClassIdTagOrNode, contextNode?: GwContextNode): GwDomNode | null;
    getDomNodeOrThrow(classIdTagOrNode: GwClassIdTagOrNode, contextNode?: GwContextNode): GwDomNode;
    getInputElement(classIdTagOrNode: GwClassIdTagOrNode, contextNode?: GwContextNode): GwInputElement | null;
    /**
     * @public
     * @param attr - String: html dom attribute
     * @param optValue - any, if undefined, then checks for the presence of the attribute, if defined then checks against the value
     * @param optParent - DOM Element, if undefined, then uses the document.
     * @returns {Element || null}
     */
    getDomNodeByAttr(attr: string, optValue?: string, optParent?: GwContextNode): GwDomNode | null;
    getDomNodeByName(nameValue: string, optParent?: GwContextNode): GwDomNode | null;
    /**
     * @public
     * @param attr - String: html dom attribute
     * @param optValue - any, if undefined, then checks for the presence of the attribute, if defined then checks against the value
     * @param optParent - DOM Element, if undefined, then uses the document.
     * @returns {NodeList || null}
     */
    getDomNodesByAttr(attr: string, optValue?: string, optParent?: GwContextNode): NodeListOf<HTMLElement>;
    /**
     * @public
     * Removes a dom node from the parent if one exists
     * @param classIdTagOrNode: class string, id string, tag string, or a node that identifies the node to be removed.
     * @param contextNode the node from which to remove the child
     */
    removeNodeIfExists(classIdTagOrNode: GwClassIdTagOrNode, parentNode: GwDomNode): void;
    getSelfOrFirstParentWithClass(self: GwDomNode | null, cssClass: string): GwDomNode | null;
    getSelfOrFirstParentWithClassOrThrow(self: GwDomNode | null, cssClass: string): GwDomNode;
    getSelfOrFirstParentWithAttr(self: GwDomNode, attr: string): GwDomNode | null;
    getSelfOrFirstParentWithEitherAttr(self: GwDomNode, attrOrArrOfAttributes: string[] | string): GwDomNode | null;
    /**
     * @public
     * Returns true or false based on the presence of a css class on the first result of gwUtil.getDomNodes
     * @param classIdTagOrNode: the argument to be passed to getDomNodes
     * @param classToCheck: css class
     * @returns {boolean}
     */
    hasClass(classIdTagOrNode: GwClassIdTagOrNode, classToCheck: string): boolean;
    /**
     * @public
     * Returns true or false based on the presence of at least one css class on the first result of gwUtil.getDomNodes
     * @param classIdTagOrNode: the argument to be passed to getDomNodes
     * @param classesToCheck: css classes to check
     * @returns {boolean}
     */
    hasAnyClass(classIdTagOrNode: GwClassIdTagOrNode, classesToCheck: string[]): boolean;
    /**
     * @public
     * Toggles a css class on the results of getDomNodes for classIdTagOrNode
     * @param classIdTagOrNode: the argument to be passed to getDomNodes
     * @param classToToggle: css class
     */
    toggleClass(classIdTagOrNode: GwClassIdTagOrNode, classToToggle: string): void;
    /**
     * @public
     * Ensures the presence of a the provided class based on the condition. If condition is true, adds the class,
     * if condition is false removes the class from the the target.
     * @param condition
     * @param classIdTagOrNode
     * @param classStrOrArrayOfStr
     */
    conditionalAddRemoveClass(condition: any, classIdTagOrNode: GwClassIdTagOrNode, classStrOrArrayOfStr: string | string[]): void;
    conditionalAddRemoveAttr(condition: any, classIdTagOrNode: GwClassIdTagOrNode, key: string, value: string): void;
    /**
     * @private
     * Private method called by addClass and removeClass
     */
    private abstractAddRemoveClass(addOrRemove, classIdTagOrNode, classStrOrArrayOfStr);
    /**
     * @public
     * adds a css class or array of classes onto the results of getDomNodes for classIdTagOrNode
     * @param classIdTagOrNode: the argument to be passed to getDomNodes
     * @param classStrOrArrayOfStrToAdd: css class string, or array of classes
     */
    addClass(classIdTagOrNode: GwClassIdTagOrNode | GwDomNodeList, classStrOrArrayOfStrToAdd: string | string[]): void;
    /**
     * @public
     * removes a css class or array of classes from the results of getDomNodes for classIdTagOrNode
     * @param classIdTagOrNode: the argument to be passed to getDomNodes
     * @param classStrOrArrayOfStrToRemove: css class string, or array of classes
     */
    removeClass(classIdTagOrNode: GwClassIdTagOrNode | GwDomNodeList, classStrOrArrayOfStrToRemove: string | string[]): void;
    /**
     * @public
     * Helper method for calling addClass and removeClass. Especially handy when inlining.
     * @param classIdTagOrNode: the argument to be passed to getDomNodes
     * @param classStrOrArrayOfStrToAdd: css class string, or array of classes
     * @param classStrOrArrayOfStrToRemove: css class string, or array of classes
     */
    addAndRemoveClasses(classIdTagOrNode: GwClassIdTagOrNode, classStrOrArrayOfStrToAdd: string | string[], classStrOrArrayOfStrToRemove: string | string[]): void;
    appendEl(parentClassIdTagOrNode: GwClassIdTagOrNode, childClassIdTagOrNode: GwClassIdTagOrNode): void;
    /**
     * Escape any special characters in the given string so they will not be used as special regular expression
     * characters. For example "." will become "\."
     * @param {string} s the string to be escaped
     * @returns {string} the escaped string
     */
    escapeForRegExp(s: string): string;
    /**
     * @public
     * noop
     */
    noop(): void;
    /**
     * @public
     * @debug logs the arguments if gwApp.showDevLogs is true;
     * Does not need to be localized.
     * @param str: some string
     * @param obj: optional, logged directly to the console, not string converted
     */
    devlog(str: string, obj?: any): void;
    eventLog(str: string, obj?: any): void;
    private getTrace();
    /**
     * @public
     * TODO: this could probaly get moved into a component specific file, like Row.js
     * @param targetGroupRowNode
     */
    toggleRowGroup(targetRowGroupEl: GwDomNode): void;
    convertArrayToMapSet(arr: string[]): object;
    private isIndexIterable(coll);
    /**
     * @public
     * Takes any collection, object, array, or even more useful, HTMLNodeCollections, etc.
     * @param coll: object or array, or array-like.
     * @param cb: a function with signature cb(value, indexOrKey, collection, (mockIndex). Where mockIndex is the current count of
     * values processed on a non-array. return false inside the callback explicitly to break the loop;
     */
    forEach(coll: GwIterable | undefined | null, cb: GwIterationCallback): void;
    /**
     * @public
     * same as forEach, but reversed. In the case of objects, there's an extra build from Object.keys, which is then
     * iterated over backwards.
     * @param coll: object or array, or array-like.
     * @param cb: a function with signature cb(value, indexOrKey, collection, (mockIndex). Where mockIndex is the current count of
     * values processed on a non-array. return false inside the callback explicitly to break the loop;
     */
    forEachReverse(coll: GwIterable, cb: GwIterationCallback): void;
    /**
     * Helper method to create a div via lists of classes attributes and styles.
     * This should be used sparingly, as Pebbles is a server side rendererd system, so any client side generated elements
     * will need to be regenerated and re-added to the dom after any page load, full or partial.
     * This is most commonly used by client side systems to add MenuItems to the settings dropdown.
     * @param classes - String as single class or array of strings.
     * @param attributes - Object: key value pairs for inline attributes, including 'id'. Pass empty string value if no value needed.
     * @param styles - Object: key value pairs for inline styles.
     * @param label - if provided, then div.innerHTML = label is called.
     * @returns {DOMElement: DIV}
     */
    createDiv(classes?: string | string[] | null, attributes?: GwMap, styles?: GwMap, label?: string): HTMLDivElement;
    /**
     * Detects whether we're running IE 11.
     * @returns {boolean} Returns true if IE11 else false
     */
    isIE11(): boolean;
    /**
     * Detects whether we're running Edge.
     * @returns {boolean} Returns true if Edge else false
     */
    isEdge(): boolean;
    /**
     * @private
     * Generates a span containing an accessKey for each server shortcut key to allow shortcut keys to work
     * in IE (See comment for disableIEShortcuts below).
     * @returns {string} HTML span containing an accessKey entry for each server shortcut
     */
    private generateIEShortcutWorkAround();
    /**
     * The following is horrible hackery to make keyboard shortcuts work more reliably on IE.
     *
     * The normal event.preventDefault() mechanism does not work for key down events in IE. If a key combination
     * is bound to an IE specific shortcut, like Alt-F (File menu) then the JavaScript event will fire but
     * preventDefault() will not prevent IE from also popping up the IE file menu.
     *
     * Various fixes are suggested on the internet - setting the keyCode to zero, setting returnValue to false,
     * returning false from the event handler - but none of them work reliably. The only thing guaranteed to work
     * is to set up a link with an "accesskey". For example a link with the accesskey "f" will grab Alt-F and the
     * IE file menu will not come up.
     *
     * Unfortunately the accesskey workaround leaves focus with the link, so we mark the links with a special
     * attribute, data-gw-refuse-focus, which tells the event system to bounce focus back to the last target
     * when the link gets a focus event.
     */
    disableIEMenuShortcut(): void;
    /**
     * Fire a custom event on the body of the document. The event is created with the given name and the detail
     * object can be used to pass information useful to listeners, who can access it via event.detail
     * @param eventName the name of the custom event
     * @param detail object containing further details of the event
     */
    fireCustomEvent(eventName: string, detail: GwMap): void;
    /**
     * Listen for a custom event on the body of the document. Typically the event would be fired using
     * gwUtil.fireCustomEvent
     * @param eventName the name of the event to listen for
     * @param handler function to call if the event is filed; takes one argument which will be the event that was fired
     */
    addCustomEventListener(eventName: string, handler: (this: HTMLElement, ev: Event) => boolean): void;
}
export declare const gwUtil: GwUtil;
