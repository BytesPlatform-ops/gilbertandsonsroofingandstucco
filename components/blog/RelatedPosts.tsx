import SectionMarker from "@/components/shared/SectionMarker";
import FadeIn from "@/components/shared/FadeIn";
import BlogCard from "@/components/blog/BlogCard";
import { toCardData } from "@/lib/blog/utils";
import type { BlogPost } from "@/lib/blog/types";

/** Up to three related articles. Renders nothing when there are none. */
export default function RelatedPosts({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) return null;

  return (
    <section className="bg-surface-subtle border-y border-border-subtle">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8 py-16 md:py-20">
        <FadeIn>
          <SectionMarker number="—" label="Related Articles" />
        </FadeIn>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <FadeIn key={post.slug} delay={index * 80} className="h-full">
              <BlogCard post={toCardData(post)} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
