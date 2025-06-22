
interface Image {
  id: string;
  description: string;
  updated_at: string;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  user: {
    username: string;
    name: string;
  };
  tags: string[];
}

interface ImageResponse {
  success: boolean;
  data: {
    total: number;
    total_pages: number;
    current_page: number;
    per_page: number;
    results: Image[];
  };
}

export default async function getImage(query: string): Promise<string | undefined> {
  const apiKey = process.env.EXPO_PUBLIC_RAPID_API_KEY ?? '';
  let image;
  try {
    await fetch('https://unsplash-image-search-api.p.rapidapi.com/search?page=1&query=' + query, {
      method: 'GET',
      headers: {
        'x-rapidapi-key': apiKey,
        'x-rapidapi-host': 'unsplash-image-search-api.p.rapidapi.com',
        'Content-Type': 'application/json',
      },
    }).then(async data => {
      const res = await data.json() as ImageResponse
      image = res.data.results[0].urls.regular
    })
  } catch (e) {
    console.error('error getting books', e)
  }
  return image;
}