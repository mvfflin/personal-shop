import { CatalogItem } from "@/util/catalog-types";

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam felis est, imperdiet non sem ut, pharetra accumsan magna. Proin venenatis ipsum a nisl viverra ultricies. Nam vel ligula neque. In lacinia in enim non rutrum. Fusce ultricies lacus eleifend diam imperdiet, in vehicula arcu mollis. Duis suscipit massa sit amet nisl malesuada, in suscipit dolor tristique. Phasellus sed mattis tellus. Etiam neque ipsum, venenatis id dolor nec, imperdiet dignissim erat. Pellentesque mollis et odio et tristique.";

const catalogList: Array<CatalogItem> = [
  {
    id: 1234,
    display_name: "Baju kotak-kotak",
    description: lorem,
    harga: 400000,
    stock: 5,
    rating: [1, 3, 4, 5, 5],
    images: [],
    thumbUrl:
      "https://media.discordapp.net/attachments/1371884241062854726/1371884258024751104/kISLfsI.png?ex=68295f87&is=68280e07&hm=409f5671f15fab136914ee35c6f5fc7eb5311cd8a063fa334f49857ff79b08d0&=&format=webp&quality=lossless&width=945&height=945",
    ulasan: ["Bahan bagus", "Adem"],
  },
  {
    id: 3213,
    display_name: "Baju bulat-bulat",
    description: lorem,
    harga: 500000,
    stock: 5,
    rating: [2, 3, 4],
    images: [],
    thumbUrl:
      "https://media.discordapp.net/attachments/1371884241062854726/1371884258024751104/kISLfsI.png?ex=68295f87&is=68280e07&hm=409f5671f15fab136914ee35c6f5fc7eb5311cd8a063fa334f49857ff79b08d0&=&format=webp&quality=lossless&width=945&height=945",
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
      "https://media.discordapp.net/attachments/1371884241062854726/1371884258024751104/kISLfsI.png?ex=68295f87&is=68280e07&hm=409f5671f15fab136914ee35c6f5fc7eb5311cd8a063fa334f49857ff79b08d0&=&format=webp&quality=lossless&width=945&height=945",
    ulasan: ["Bahan oke", "Bagus"],
  },
];

export default catalogList;
