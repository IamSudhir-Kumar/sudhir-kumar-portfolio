import { Content } from "@prismicio/client";
import { PrismicLink, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Links`.
 */
export type LinksProps = SliceComponentProps<Content.LinksSlice>;

/**
 * Component for "Links" Slices.
 */
const Links = ({ slice }: LinksProps): JSX.Element => {
  return (
    <div className="max-w-prose">
      <PrismicLink field={slice.primary.link} className="text-2xl font-semibold tracking-tight text-slate-400" />
    </div>
    
  );
};

export default Links;
