import { getAllFabrics } from '@/lib/fabric';
export default async function sitemap() {
  const fabrics = await getAllFabrics();
  const modelFabrics = fabrics.map((fabric) => ({
    url: `${process.env.BASE_URL}/fabrics/${fabric.slug}`,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 1,
  }));
  const modelVideos = fabrics
    .filter((fabric) => fabric.url_video) // Оставляем только те записи, у которых есть видео
    .map((fabric) => {
      const youtubeId =
        fabric.url_video.split('v=')[1] || fabric.url_video.split('/').pop();
      const embedUrl = fabric.url_video.replace(
        'youtube.com/shorts/',
        'youtube.com/embed/'
      );
      const thumbnailUrl = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;

      return {
        url: `${process.env.BASE_URL}/fabrics/${fabric.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.9,
        video: {
          title: fabric.title,
          description: fabric.seo_content,
          thumbnailUrl: thumbnailUrl,
          contentUrl: `https://www.youtube.com/watch?v=${youtubeId}`, // Прямая ссылка на YouTube-видео
          embedUrl: embedUrl, // Встраиваемый URL для видео
          duration: fabric.duration || 60, // Длительность видео в секундах, если доступно
          publicationDate: fabric.publicationDate || new Date().toISOString(), // Дата публикации
        },
      };
    });
  return [
    {
      url: `${process.env.BASE_URL}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${process.env.BASE_URL}/office_armchair`,
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
    ...modelFabrics,
    ...modelVideos,
  ];
}
