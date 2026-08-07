export type GalleryImage = {
  src: string;
  alt: string;
  category: "roofing" | "stucco";
  propertyType: "residential" | "commercial";
};

export const galleryImages: GalleryImage[] = [
  {
    src: "/projects/aerial-roof-overview-01.jpg",
    alt: "Aerial view of a completed asphalt shingle roof, Las Cruces, NM",
    category: "roofing",
    propertyType: "residential",
  },
  {
    src: "/projects/stucco-house-exterior-01.webp",
    alt: "Residential stucco exterior finish, Las Cruces, NM",
    category: "stucco",
    propertyType: "residential",
  },
  {
    src: "/projects/aerial-shingle-roof-02.jpg",
    alt: "Aerial view of asphalt shingle roofing installation",
    category: "roofing",
    propertyType: "residential",
  },
  {
    src: "/projects/stucco-project-construction-01.webp",
    alt: "Commercial stucco and EIFS project under construction",
    category: "stucco",
    propertyType: "commercial",
  },
  {
    src: "/projects/aerial-shingle-roof-05.jpg",
    alt: "Aerial view of completed shingle roofing",
    category: "roofing",
    propertyType: "residential",
  },
  {
    src: "/projects/roof-detail-01.jpg",
    alt: "Close-up of finished asphalt shingle roof detail",
    category: "roofing",
    propertyType: "residential",
  },
  {
    src: "/projects/stucco-house-exterior-02.webp",
    alt: "Residential stucco exterior, Las Cruces, NM",
    category: "stucco",
    propertyType: "residential",
  },
  {
    src: "/projects/aerial-shingle-roof-07.jpg",
    alt: "Aerial view of shingle roofing project",
    category: "roofing",
    propertyType: "residential",
  },
];
