import { Content } from "@prismicio/client";
import {
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import Links from "../Links";

/**
 * Props for `TextBlock`.
 */
export type TextBlockProps = SliceComponentProps<Content.TextBlockSlice>;

/**
 * Component for "TextBlock" Slices.
 */
const TextBlock = ({ slice }: TextBlockProps): JSX.Element => {
  return (
    <div className="max-w-prose">
      <PrismicRichText field={slice.primary.text} />
      <Links slices={[slice]} /> // Fix: Pass the slice as an array
    </div>
  );
};

export default TextBlock;
