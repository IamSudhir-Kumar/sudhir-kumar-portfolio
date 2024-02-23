import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
/**
 * Props for `LinkBlock`.
 */
export type LinkBlockProps = SliceComponentProps<Content.LinkBlockSlice>;

/**
 * Component for "LinkBlock" Slices.
 */
const LinkBlock = ({ slice }: LinkBlockProps): JSX.Element => {
  return (
    <>
    <div className="text-black font-extrabold text-lg">
      <PrismicRichText field={slice.primary.title}/>
      <PrismicNextLink
        field={slice.primary.project_link}
        className="absolute  w-full h-full z-10 visible"
      />
      </div>
    </>
  );
};

export default LinkBlock;
