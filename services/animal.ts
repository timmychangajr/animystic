import getImage from "./image";

export interface Animal {
  imageUrl?: string,
  characteristics?: {
    name_of_young?: string;
    litter_size?: string;
    average_litter_size?: string,
    color?: string,
    diet?: string,
    favorite_food?: string,
    habitat?: string,
    lifespan?: string,
    lifestyle?: string,
    main_prey?: string,
    prey?: string,
    predators?: string,
    skin_type?: string,
    slogan?: string,
    top_speed?: string,
    type?: string,
    weight?: string
  },
  locations?: string[],
  name: string,
  taxonomy?: {
    class?: string,
    family?: string,
    genus?: string,
    kingdom?: string,
    order?: string,
    phylum?: string,
    scientific_name?: string
  }
}

export default async function getAnimal(query: string): Promise<Animal | undefined> {
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