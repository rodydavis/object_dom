import { GlobalDom, NodeProps } from "../../object-dom";

/**
 * Defines some text that is unarticulated and 
 * styled differently from normal text.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_u.asp
 */
export class U extends GlobalDom<HTMLElement> {
  constructor(props: NodeProps<HTMLElement> = {}) {
    super({ node: document.createElement("u"), ...props });
  }
}
