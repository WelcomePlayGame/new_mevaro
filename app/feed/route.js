import RSS from 'rss';
import { getAllFabrics } from '@/lib/fabric';
import { getAllBlogs } from '@/lib/blog';

export async function GET() {
  const fabrics = await getAllFabrics();
  const blogs = await getAllBlogs();
  const fabricsAndBlogs = [...fabrics, ...blogs];
  const feed = new RSS({
    title: `Перетяжка та Виготовлення меблів від Mevaro`,
    description: 'Широкий вибір меблевих тканин для Вашої оселі',
    site_url: process.env.BASE_URL,
    feed_url: `https://www.mevaro.kiev.ua/feed.xml`,
    copyright: `${new Date().getFullYear()} Mevaro`,
    language: 'en',
    pubDate: new Date().toUTCString(),
  });

  fabricsAndBlogs.map((element) => {
    const isFabric = fabrics.includes(element);
    const imageUrl = element.images
      ? `${process.env.URL_AWS}${element.images[0]}`
      : `${process.env.URL_AWS}${element.image}`;
    const isCategory = element.category
      ? [element.category]
      : ['Новини від Меваро в світі меблів'];
    feed.item({
      title: element.title,
      guid: `${process.env.BASE_URL}/${isFabric ? 'fabrics' : 'blogs'}/${
        element.slug
      }`,
      url: `${process.env.BASE_URL}/${isFabric ? 'fabrics' : 'blogs'}/${
        element.slug
      }`,
      date: new Date().toUTCString(),
      description: element.content,
      author: 'Mevaro',
      categories: isCategory,
      enclosure: {
        url: imageUrl,
        type: 'image/*',
        length: '51200',
      },
    });
  });

  return new Response(feed.xml({ indent: true }), {
    headers: {
      'Content-Type': 'application/atom+xml; charset=utf-8',
    },
  });
}
