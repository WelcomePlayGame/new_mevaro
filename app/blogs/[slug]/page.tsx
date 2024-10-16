import { getBlogBySlug as get } from '@/lib/blog';
import Head from '@/component/head/page-head';
import classes from '@/component/head/page-head.module.css';
import SubHead from '@/component/head/page-sub-header-tkani';
import Footer from '@/component/footer/page-footer';
import Image from 'next/image';
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
    <main>
      <div className={`${classes.container_head_block}`}>
        <Head />
        <SubHead />
      </div>
      <div className="flex flex-col pt-[180px]">
        <div className="flex flex-col items-center pt-[50px]">
          <div className={`${classes.container_div}`}>
            <Image
              src={`${process.env.URL_AWS}${blog.image}`}
              width={400}
              height={200}
              alt={blog.title}
              className={`${classes.image_style} rounded`}
            />
          </div>
        </div>
        <div className="pt-[30px]">
          <h1 className="text-center text-[2.1rem]">{blog.title}</h1>
        </div>
        <div
          dangerouslySetInnerHTML={createMarkup(blog.content)}
          className={`${classes.content_blog} pt-[30px] pl-[100px] pr-[100px] pb-[70px] text-[16px] w-[70%] mx-auto`}
        />
      </div>
      <Footer />
    </main>
  );
};
export default Blog;
