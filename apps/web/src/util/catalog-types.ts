export type CatalogItem = {
  id: number;
  display_name: string;
  harga: number;
  stock: number;
  images?: Array<string>;
  rating: Array<number>;
  ulasan: Array<string>;
  thumbUrl: string;
};
