import type { NodeProps } from "../../object-dom";
import { GlobalDom } from "../../object-dom";
/**
 * Defines a dialog box or window.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_dialog.asp
 */
export declare class Dialog extends GlobalDom<HTMLDialogElement> {
    constructor(props?: NodeProps<HTMLDialogElement>);
}
