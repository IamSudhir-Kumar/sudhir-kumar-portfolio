import { Content , isFilled } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import ContentList from "./ContentList";
import { createClient } from "@/prismicio";

/**
 * Props for `ContentIndex`.
 */
export type BlogPostIndexProps =
  SliceComponentProps<Content.BlogPostIndexSlice>;

/**
 * Component for "ContentIndex" Slices.
 */
const BlogPostIndex = async ({
  slice,
}: BlogPostIndexProps): Promise<JSX.Element> => {
  const client = createClient();
  const projects = await client.getAllByType("project");

  const items = slice.primary.content_type === "Projects" ? projects : undefined;

 
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Heading size="xl" className="mb-8">
        {slice.primary.heading}
      </Heading>
      {isFilled.richText(slice.primary.description) && (
        <div className="prose prose-xl prose-invert mb-10">
          <PrismicRichText field={slice.primary.description} />
        </div>
      )}
       <ContentList
        items={items}
        contentType={slice.primary.content_type}
        viewMoreText={slice.primary.view_more_text}
        fallbackItemImage={slice.primary.fallback_item_image}
      />
    </Bounded>
  );
};

export default BlogPostIndex;
