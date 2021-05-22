import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";
export interface ProgressProps extends NodeProps<HTMLElement> {
    attributes?: {
        /**
         * Specifies how much work the task requires in total. Default value is 1
         */
        max?: string;
        /**
         * Specifies how much of the task has been completed
         */
        value?: string;
        [key: string]: PossibleAttr;
    };
}
/**
 * HTML tag: `<progress>`
 *
 * Represents the progress of a task
 *
 * |  Chrome  | Firefox |  Safari   |  Edge  |
 * | :------: | :-----: | :-------: | :----: |
 * |  **8.0**  | **16.0**  |   **6.0**   | **10.0** |
 *
 * @see https://www.w3schools.com/TAGS/tag_progress.asp
 */
export declare class Progress extends GlobalDom<HTMLElement> {
    constructor(props?: ProgressProps);
}
