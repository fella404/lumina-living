import { properties } from "./properties";

const baseRegions = [
  {
    id: "region-001",
    slug: "jakarta",
    name: "Jakarta",
    image: "https://images.unsplash.com/photo-1555899434-94d1368aa7af?w=800&q=80",
  },
  {
    id: "region-002",
    slug: "bali",
    name: "Bali",
    image: "https://images.unsplash.com/photo-1711609110590-5ad5c4599e56?w=800&q=80",
  },
  {
    id: "region-003",
    slug: "bandung",
    name: "Bandung",
    image: "https://images.unsplash.com/photo-1744343933092-28004db989ee?w=800&q=80",
  },
  {
    id: "region-004",
    slug: "surabaya",
    name: "Surabaya",
    image: "https://images.unsplash.com/photo-1566176553949-872b2a73e04e?w=800&q=80",
  },
  {
    id: "region-005",
    slug: "yogyakarta",
    name: "Yogyakarta",
    image: "https://images.unsplash.com/photo-1610010850404-c892d328cf86?w=800&q=80",
  },
  {
    id: "region-006",
    slug: "tangerang",
    name: "Tangerang",
    image: "https://picsum.photos/seed/region-tangerang/800/600",
  },
];

export const regions = baseRegions.map((region) => ({
  ...region,
  propertyCount: properties.filter((p) => p.region === region.name).length,
}));
