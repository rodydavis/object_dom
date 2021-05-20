import { As, CrossOrigin, GlobalDom, NodeProps } from "../../object-dom";
interface LinkProps extends NodeProps<HTMLLinkElement> {
    as?: As;
    crossorigin?: CrossOrigin;
    disabled?: boolean;
    href?: string;
}
/**
 * Defines the relationship between a
 * document and an external resource
 * (most used to link to style sheets).
 *
 * Reference: https://www.w3schools.com/TAGS/tag_link.asp
 */
export declare class Link extends GlobalDom<HTMLLinkElement> {
    constructor(props?: LinkProps);
}
export {};
