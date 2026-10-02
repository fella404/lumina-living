export type PropertyStatus = "sell" | "rent";

export type PropertyType =
  | "house"
  | "apartment"
  | "villa"
  | "townhouse"
  | "studio";

export interface Property {
  id: string;
  slug: string;
  name: string;
  type: PropertyType;
  status: PropertyStatus;
  price: number;
  city: string;
  region: string;
  image: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  featured: boolean;
}
