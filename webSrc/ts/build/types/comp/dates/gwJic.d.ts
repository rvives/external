import { GwDomNode, GwEventType, GwInputElement, GwMap } from "../../types/gwTypes";
import { GwDateInfo } from "./GwDateInfo";
import { GwInitializableSystem } from "../../core/util/GwInitializableSystem";
export declare class GwJic extends GwInitializableSystem {
    private monthOptions;
    private readonly eraRegex;
    getSystemName(): string;
    init(isFullPageReload: boolean): void;
    isJIC(inputEl: GwInputElement): boolean;
    onEraChange(el: GwDomNode): void;
    onEraYearChange(el: GwDomNode): void;
    /**
     * Returns the value with the era stripped out.
     * calls setEraValueFromPaste if a possible era is found
     * @param val
     * @param dateInput
     * @returns {*}
     */
    possiblyHandleEraValue(val: string, dateInput: HTMLInputElement): string;
    datePickerCalledShow(el: GwDomNode): void;
    datePickerCalledHide(el: GwDomNode | null): void;
    datePickerCalledUpdate(inst: GwDateInfo): void;
    getDefaultDate(): Date;
    datePickerCalledParseDate(eraYear: number): number;
    datePickerCalledFormatDate(gregDateObj: GwMap): number;
    datePickerCalledSelectDate(): void;
    getEraYearPickerHtml(eraYearStr: string): string;
    getEraPickerHtml(): string;
    getMonthOptionNames(): string[];
    showDatePicker(el: GwDomNode, args: GwMap, e: GwEventType): void;
    eraMonthOrYearChangedPossiblyRestrictDates(): void;
}
export declare const gwJic: GwJic;
