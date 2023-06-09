import { GwDomNode, GwDomNodeList, GwEventType, GwMap } from "../../types/gwTypes";
import { GwInitializableSystem } from "../../core/util/GwInitializableSystem";
/**
 * DatePicker (DateValue)
 *
 * # OVERVIEW #
 * The DatePicker a client only widget, (the server knows nothing about it, and it knows nothing of the server), largely cribbed from the jQuery.datePicker.widget
 * We've cleaned out all unneeded code, added some features, and put in custom styling and layout. There is a lot of code
 * in this widget that doesn't conform to how we (gw) have been standardizing our js, but I've left it as a cleanup task.
 *
 *
 * # ENTRY POINT #
 * The entry point, currently, for the datePicker functionality finds any inputs marked with gw-DateValueWidget--input
 * and attaches listeners to those inputs, and any default properties. On focus, the datePicker becomes a child of the input's parent, and positions
 * itself absolutely below the input.
 *
 * The date picker then takes over various key events fired on the input, and manipulates its own UI accordingly.
 *
 *
 * # DEFAULTS & OVERRIDING PER INSTANCE #
 * It has dozens of defaults listed in gwDate._defaults. THESE ARE NEW AND OLD AND CHANGED from jquery, do NOT rely on their
 * documentation. Any input can override any of these defaults by passing an object to the .datePicker init method.
 * ie: $(".myInput").datePicker({hidePickerOnSelect: false});
 *
 * Every input has a property instance (referred to as inst in code), that holds that input's information, and custom properties.
 * Therefore, anywhere the code needs to get a property, it needs to use gwDate._get(inst, "property name") to be able to use the default
 * values if the property is not defined on the input itself.
 *
 *
 * # CLICK & KEY EVENTS #
 * Click-events are now handled by gw global events, and constantly punt focus back to the input element. See  _keyDown method.
 */
export declare class GwDateValue extends GwInitializableSystem {
    private twoDigitYearInfo;
    private _amPmStringCache;
    getSystemName(): string;
    /**
     * Needs to be fired on page loads.
     * @param isFullPageReload
     */
    init(isFullPageReload: boolean): void;
    getTwoDigitYearThreshold(): number;
    getTwoDigitYearLate(): number;
    getTwoDigitYearEarly(): number;
    shouldCapDateTimeUserInput(): boolean;
    getAmString(): string;
    getPmString(): string;
    private getAmPmStrings();
    /**
     * @public
     */
    hideDatePicker(): void;
    /**
     * @public
     * @param el
     * @param args
     * @param event
     */
    showDatePickerOnEvent(el: HTMLInputElement): void;
    /**
     * Clicking the icon will punt focus into the date input.
     * It will also act as a toggle for the date picker showing.
     * @param el
     * @param args
     * @param event
     */
    dateIconClicked(el: GwDomNode, args: GwMap, event: GwEventType): void;
    clickedOnAmPmInput(el: HTMLInputElement, args: GwMap): void;
    /**
     * @public
     * @param el
     * @param args
     * @param event
     */
    notifyPickerOfInputChange(el: HTMLInputElement): void;
    getValue(dateWidgetNode: GwDomNode): string;
    setValue(dateWidgetNode: GwDomNode, dateValue: string): void;
    isDateValueWidget(el: GwDomNode): boolean;
    getConfirmTargets(dateValueNode: GwDomNode): GwDomNodeList;
    deferredChangeOnFocusInMethod(): void;
    enable(dateWidgetNode: GwDomNode, enabled?: boolean): void;
}
export declare const gwDateValue: GwDateValue;
