import Bounded from "@/components/Bounded";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Image`.
 */
export type ImageProps = SliceComponentProps<Content.ImageBlockSlice>;

/**
 * Component for "Image" Slices.
 */
const Image = ({ slice }: ImageProps): JSX.Element => {
  return (
    <Bounded>
    <PrismicNextImage
      field={slice.primary.image}
      className="not-prose w-full h-full rounded-md  my-10 md:my-14 lg:my-16"
    />
    </Bounded>
  );
};

export default Image;