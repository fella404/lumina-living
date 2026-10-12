import { properties } from "./properties";

const baseRegions = [
  {
    id: "region-001",
    slug: "jakarta",
    name: "Jakarta",
    image:
      "https://images.unsplash.com/photo-1555899434-94d1368aa7af?w=800&q=80",
  },
  {
    id: "region-002",
    slug: "bali",
    name: "Bali",
    image:
      "https://images.unsplash.com/photo-1711609110590-5ad5c4599e56?w=800&q=80",
  },
  {
    id: "region-003",
    slug: "bandung",
    name: "Bandung",
    image:
      "https://images.unsplash.com/photo-1744343933092-28004db989ee?w=800&q=80",
  },
  {
    id: "region-004",
    slug: "surabaya",
    name: "Surabaya",
    image:
      "https://images.unsplash.com/photo-1566176553949-872b2a73e04e?w=800&q=80",
  },
  {
    id: "region-005",
    slug: "yogyakarta",
    name: "Yogyakarta",
    image:
      "https://images.unsplash.com/photo-1610010850404-c892d328cf86?w=800&q=80",
  },
  {
    id: "region-006",
    slug: "tangerang",
    name: "Tangerang",
    image:
      "https://images.unsplash.com/photo-1617281330839-ea00ddb47edd?w=800&q=80",
  },
  {
    id: "region-007",
    slug: "medan",
    name: "Medan",
    image:
      "https://images.unsplash.com/photo-1673877547012-577aec9ed2d7?w=800&q=80",
  },
  {
    id: "region-008",
    slug: "palembang",
    name: "Palembang",
    image:
      "https://images.unsplash.com/photo-1598675551183-1b091d43f99f?w=800&q=80",
  },
  {
    id: "region-009",
    slug: "balikpapan",
    name: "Balikpapan",
    image:
      "https://images.unsplash.com/photo-1702927144331-6baa4087b81e?w=800&q=80",
  },
  {
    id: "region-010",
    slug: "pontianak",
    name: "Pontianak",
    image:
      "https://images.unsplash.com/photo-1633582248105-1eb7933509a9?w=800&q=80",
  },
  {
    id: "region-011",
    slug: "makassar",
    name: "Makassar",
    image:
      "https://images.unsplash.com/photo-1563244495-1de93ffe7c23?w=800&q=80",
  },
  {
    id: "region-012",
    slug: "lombok",
    name: "Lombok",
    image:
      "https://images.unsplash.com/photo-1605752660759-2db7b7de8fa9?w=800&q=80",
  },
];

export const regions = baseRegions.map((region) => ({
  ...region,
  propertyCount: properties.filter((p) => p.region === region.name).length,
}));
