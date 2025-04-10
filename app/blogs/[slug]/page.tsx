import { getBlogBySlug as get } from '@/lib/blog';
import classes from '@/component/blogs/page-blogs.module.css';
import HeadUpdate from '@/component/head/header_update';
import Footer from '@/component/footer/page-footer';
import Image from 'next/image';
import SubHead from '@/component/head/page-sub-head';
import SlideForFabric from '@/component/slide_for_fabric/page-slide-for-fabric';
import SaleBox from '@/component/sale_box/page-sale-box';
import Crumbs from '@/component/breadcrumbs/page-crumbs';

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const blog = await get(params?.slug);
  return {
    title: blog?.seo_title,
    description: blog?.seo_des,
    alternates: {
      canonical: `${process.env.BASE_URL}/blogs/${blog.slug}`,
    },
  };
};

const Blog = async ({ params }: { params: { slug: string } }) => {
  const blog = await get(params.slug);

  const createMarkup = (html: any) => ({ __html: html });

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: blog.title,
    description: blog.seo_description,
    image: `${process.env.URL_AWS}${blog.image}`,
    author: {
      '@type': 'Person',
      name: 'Mevaro',
    },
    datePublished: new Date().toISOString(),
    dateModified: new Date().toISOString(),
    publisher: {
      '@type': 'Organization',
      name: 'Mevaro',
      logo: {
        '@type': 'ImageObject',
        url: `${process.env.URL_AWS}/logo/logo.png`,
      },
    },
  };

  return (
    <section>
      <div className={`${classes.container_head_block}`}>
        <HeadUpdate />
        <SubHead />
      </div>
      <div className="pt-[240px] lg:pt-[150px]  lg:pl-[50px]">
        <Crumbs
          crumbs={[
            { label: 'Перетяжка меблів', url: '/' },
            { label: 'Каталог Тканин', url: '/fabrics' },
            { label: 'Блог Mevaro', url: '/blogs' },
          ]}
        />
      </div>
      <div className="flex flex-col pt-[10px]">
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
      <SlideForFabric />
      <SaleBox />
      <Footer />
      {/* JSON-LD script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
};

export default Blog;
