import type { NodeProps } from "../../object-dom";
import { GlobalDom } from "../../object-dom";
/**
 * Defines a multiline input control (text area).
 *
 * Reference: https://www.w3schools.com/TAGS/tag_textarea.asp
 */
export declare class TextArea extends GlobalDom<HTMLTextAreaElement> {
    constructor(props?: NodeProps<HTMLTextAreaElement>);
}
