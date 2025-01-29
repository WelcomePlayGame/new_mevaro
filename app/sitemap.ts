import { getAllFabrics } from '@/lib/fabric';
import { getAllBlogs } from '@/lib/blog';
export default async function sitemap() {
  const fabrics = await getAllFabrics();
  const blogs = await getAllBlogs();
  const modelFabrics = fabrics.map((fabric) => ({
    url: `${process.env.BASE_URL}/fabrics/${fabric.slug}`,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 1,
  }));
  const modelBlogs = blogs.map((blog) => ({
    url: `${process.env.BASE_URL}/blogs/${blog.slug}`,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 1,
  }));

  return [
    {
      url: `${process.env.BASE_URL}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${process.env.BASE_URL}/privacy_policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },

    {
      url: `${process.env.BASE_URL}/ru`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${process.env.BASE_URL}/ru/sofa`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${process.env.BASE_URL}/ru/angular_sofa`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${process.env.BASE_URL}/ru/chair`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${process.env.BASE_URL}/angular_sofa`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${process.env.BASE_URL}/remont_mebeli`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${process.env.BASE_URL}/ru/remont_mebeli`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${process.env.BASE_URL}/office_armchair`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${process.env.BASE_URL}/ru/office_armchair`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${process.env.BASE_URL}/blogs`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${process.env.BASE_URL}/armchair`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${process.env.BASE_URL}/sofa`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${process.env.BASE_URL}/angular_sofa`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${process.env.BASE_URL}/lijko`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${process.env.BASE_URL}/chair`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${process.env.BASE_URL}/mebli_zakaz`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${process.env.BASE_URL}/feed`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${process.env.BASE_URL}/porolon`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${process.env.BASE_URL}/block`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${process.env.BASE_URL}/pillow`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${process.env.BASE_URL}/paneli`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${process.env.BASE_URL}/about_us`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${process.env.BASE_URL}/karta_map`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${process.env.BASE_URL}/video/mevaro.mp4`,
      video: [
        {
          contentLoc: 'https://mevaro.kiev.ua/video/mevaro.mp4',
          title: 'Послуги перетяжка меблів-Mevaro',
          description:
            'Послуги перетяжка меблів-Mevaro. Які переваги перетяжки меблів?',
          thumbnailLoc: 'https://mevaro.kiev.ua/image/mevaro.png',
          publicationDate: new Date('2024-11-01').toISOString(),
        },
      ],
    },
    ...modelFabrics,
    ...modelBlogs,
  ];
}
