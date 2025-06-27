export interface Image {
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

export interface ImageResponse {
  success: boolean;
  data: {
    total: number;
    total_pages: number;
    current_page: number;
    per_page: number;
    results: Image[];
  };
}

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