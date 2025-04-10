import Image from 'next/image';
import classes from './page-blogs.module.css';
import Link from 'next/link';
const Item = ({
  title,
  image,
  slug,
  category,
}: {
  title: string;
  image: string;
  slug: string;
  category: string;
}) => {
  return (
    <article className={`${classes.container_item} mt-[30px]`}>
      <div className={`${classes.container_div_img}`}>
        <Image
          src={`${process.env.URL_AWS}${image}`}
          fill
          alt={title}
          className={`${classes.image_style_blogs}`}
        />
      </div>
      <hr className={`${classes.hr_style}`} />
      <div className={`${classes.title_container}`}>
        <h2 className={`${classes.h2_style}`}>{title}</h2>
      </div>

      <Link href={`/blogs/${slug}`} className={`${classes.container_dtn}`}>
        Детальніше
      </Link>
    </article>
  );
};
export default Item;
