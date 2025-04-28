export async function fetchReviewsData() {
  try {
    const response = await fetch(`${process.env.BASE_URL}/api/reviews`, {
      next: { revalidate: 60 }, // или не ставь, если не надо кэш
    });

    if (!response.ok) {
      throw new Error('Ошибка при загрузке отзывов');
    }

    const data = await response.json();
    return {
      reviews: data.reviews || [],
      averageRating: data.averageRating || null,
      totalReviewCount: data.totalReviewCount || null,
    };
  } catch (error) {
    return {
      reviews: [],
      averageRating: null,
      totalReviewCount: null,
      error: 'Не удалось получить отзывы',
    };
  }
}
