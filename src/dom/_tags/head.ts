import type { NodeProps, PossibleAttr } from "../../object-dom";
import { GlobalDom } from "../../object-dom";

export interface HeadProps extends NodeProps<HTMLElement> {
  attributes?: {
    [key: string]: PossibleAttr;
  };
}

/**
 * HTML tag: `<head>`
 *
 * Contains metadata/information for the document
 *
 * |  Chrome  | Firefox |  Safari   |  Edge  |
 * | :------: | :-----: | :-------: | :----: |
 * |  **Yes**  | **Yes**  |   **Yes**   | **Yes** |
 *
 * @see https://www.w3schools.com/TAGS/tag_head.asp
 */
export class Head extends GlobalDom<HTMLElement> {
  constructor(props: HeadProps = {}) {
    super({ node: document.createElement("head"), ...props });
  }
}
