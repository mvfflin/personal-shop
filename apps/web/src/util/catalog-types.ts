export type Review = {
  name: string;
  message: string;
  rating: number;
};

export type CatalogItem = {
  id: number;
  display_name: string;
  description: string;
  harga: number;
  stock: number;
  images?: Array<string>;
  review: Array<Review>;
  thumbUrl: string;
};
