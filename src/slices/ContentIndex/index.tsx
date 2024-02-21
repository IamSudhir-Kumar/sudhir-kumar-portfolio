import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import ContentList from "./ContentList";
import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { createClient } from "@/prismicio";


export type ContentIndexProps = SliceComponentProps<Content.ContentIndexSlice>;

const ContentIndex = async ({
  slice,
}: ContentIndexProps): Promise<JSX.Element> => {
  const client = createClient();
  const blogPosts = await client.getAllByType("blog_post");
  const projects = await client.getAllByType("project");

  const contentType = slice.primary.content_type || "Blogs"
  const items = contentType === "Blogs" ? blogPosts : projects

  return (
    <Bounded
    data-slice-type={slice.slice_type}
    data-slice-variation={slice.variation}
    >
      <Heading>
        {slice.primary.heading}
      </Heading>
      {isFilled.richText(slice.primary.description)&& (
        <div className="prose prose-xl prose-invert mb-16 mt-4">
          <PrismicRichText field={slice.primary.description} />
        </div>
      )}
      <ContentList items={items} contentType={contentType} viewMoreText={slice.primary.view_more_text}
      fallbackItemImage={slice.primary.fallback_item_image}/>
    </Bounded>
  );
};
export default ContentIndex;