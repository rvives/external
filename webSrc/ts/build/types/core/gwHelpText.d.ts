/**
 * - Helptext can only appear on an input widget in edit mode.
 * - Helptext always appears when focusing on the input.
 * - But there is a global config option on the server that allows it to also appear as a tooltip on mouseover.
 * If this is enabled, then the helptext appears as the data-gw-tooltip attribute,
 * but the tooltip is removed temporarily when the element is focused, so that you don't have the text up in 2 places.
 */
export declare class GwHelpText {
    readonly HELP_TEXT_EL_ID: string;
    private readonly HELP_TEXT_OPEN;
    private readonly DATA_HELPTEXT;
    private readonly DATA_HIDDEN_TOOLTIP;
    focusIn(input: HTMLInputElement): void;
    focusOut(): void;
    closeHelpText(): void;
    private enableHelptextOnInputIfAvailable(input);
    private addHelptextElToNode(valueWidget, input, text);
    private disableHelpText();
}
export declare const gwHelpText: GwHelpText;
