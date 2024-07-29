import Image from 'next/image';
import classes from './page-fabrics.module.css';
import Link from 'next/link';
const Item = ({
  title,
  images,
  slug,
  category,
}: {
  title: string;
  images: any[];
  slug: string;
  category: string;
}) => {
  return (
    <main className={`${classes.container_item}`}>
      <div className={`${classes.container_div}`}>
        <Image
          src={`${process.env.URL_AWS}${images[0]}`}
          fill
          alt={title}
          className={`${classes.image_style}`}
        />
      </div>
      <hr className={`${classes.hr_style}`} />
      <h3 className={`${classes.h3_style}`}>{category}</h3>
      <h2 className={`${classes.h2_style}`}>{title}</h2>
      <Link href={`/fabrics/${slug}`} className={`${classes.container_dtn}`}>
        Детальніше
      </Link>
    </main>
  );
};
export default Item;
