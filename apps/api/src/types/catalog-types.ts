export type CatalogItem = {
  id: number;
  display_name: string;
  description: string;
  harga: number;
  stock: number;
  images?: Array<string>;
  rating: Array<number>;
  ulasan: Array<string>;
  thumbUrl: string;
};
