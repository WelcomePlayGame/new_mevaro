import { getBlogBySlug as get } from '@/lib/blog';

import classes from '@/component/blogs/page-blogs.module.css';
import HeadUpdate from '@/component/head/header_update _blog';
import Footer from '@/component/footer/page-footer';
import Image from 'next/image';
import SubHead from '@/component/head/page-sub-head';
export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const blog = await get(params?.slug);
  return {
    title: blog?.seo_title,
    description: blog?.seo_description,
  };
};
const Blog = async ({ params }: { params: { slug: string } }) => {
  const blog = await get(params.slug);
  const createMarkup = (html: any) => ({ __html: html });
  return (
    <section>
      <div className={`${classes.container_head_block}`}>
        <HeadUpdate />
        <SubHead />
      </div>
      <div className="flex flex-col pt-[150px]">
        <div className="flex flex-col items-center">
          <div className={`${classes.container_div_blog_img}`}>
            <Image
              src={`${process.env.URL_AWS}${blog.image}`}
              fill
              alt={blog.title}
              className={`${classes.image_style} rounded`}
            />
          </div>
        </div>
        <div className="pt-[30px]">
          <h1 className={`${classes.h1_blog}`}>{blog.title}</h1>
        </div>
        <div
          dangerouslySetInnerHTML={createMarkup(blog.content)}
          className={`${classes.content_blog}`}
        />
      </div>
      <Footer />
    </section>
  );
};
export default Blog;
