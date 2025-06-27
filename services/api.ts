import { Animal, ImageResponse } from "./models";

export async function getAnimal(query: string): Promise<Animal | undefined> {
  const apiKey = process.env.EXPO_PUBLIC_API_NINJAS_KEY ?? '';
  let animal;
  try {
    await fetch('https://api.api-ninjas.com/v1/animals?name=' + query, {
      method: 'GET',
      headers: {
        'X-Api-Key': apiKey,
        'Content-Type': 'application/json'
      },
    }).then(async data => {
      const res = await data.json()
      animal = res[0] as Animal;
      if (animal?.name) animal.imageUrl = await getImage(animal.name)
    })
  } catch (e) {
    console.error('error getting animal', e)
  }
  return animal;
}

export async function getImage(query: string): Promise<string | undefined> {
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
    console.error('error getting image', e)
  }
  return image;
}