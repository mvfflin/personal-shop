import { CatalogItem } from "../types/catalog-types";

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam felis est, imperdiet non sem ut, pharetra accumsan magna. Proin venenatis ipsum a nisl viverra ultricies. Nam vel ligula neque. In lacinia in enim non rutrum. Fusce ultricies lacus eleifend diam imperdiet, in vehicula arcu mollis. Duis suscipit massa sit amet nisl malesuada, in suscipit dolor tristique. Phasellus sed mattis tellus. Etiam neque ipsum, venenatis id dolor nec, imperdiet dignissim erat. Pellentesque mollis et odio et tristique.";

const catalogList: Array<CatalogItem> = [
  {
    id: 1234,
    display_name: "Baju kotak-kotak",
    description: lorem,
    harga: 400000,
    stock: 5,
    rating: [1, 3, 4],
    images: [],
    thumbUrl:
      "https://media.discordapp.net/attachments/1371884241062854726/1371884258024751104/kISLfsI.png?ex=6824c247&is=682370c7&hm=3144b2cce8512520781f953a49048923a5fb7d0e43abd6355d4e5ed92cea0afb&=&format=webp&quality=lossless&width=945&height=945",
    ulasan: ["Bahan bagus", "Adem"],
  },
  {
    id: 1235,
    display_name: "Baju bulat-bulat",
    description: lorem,
    harga: 500000,
    stock: 5,
    rating: [2, 3, 4],
    images: [],
    thumbUrl:
      "https://media.discordapp.net/attachments/1371884241062854726/1371884258024751104/kISLfsI.png?ex=6824c247&is=682370c7&hm=3144b2cce8512520781f953a49048923a5fb7d0e43abd6355d4e5ed92cea0afb&=&format=webp&quality=lossless&width=945&height=945",
    ulasan: ["Bahan oke", "Bagus"],
  },
  {
    id: 1239,
    display_name: "Topi ARTENGO",
    description: lorem,
    harga: 500000,
    stock: 5,
    rating: [2, 3, 2],
    images: [],
    thumbUrl:
      "https://media.discordapp.net/attachments/1371884241062854726/1371884317046866020/reQU7R8.png?ex=6824c255&is=682370d5&hm=6cf50daad78f1f11f49b3ed8e373a6b3406b1b323e95f00869d062c829e0457b&=&format=webp&quality=lossless&width=945&height=945",
    ulasan: ["Bahan oke", "Bagus"],
  },
];

export default catalogList;
