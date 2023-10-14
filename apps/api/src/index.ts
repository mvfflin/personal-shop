import express from "express";
import cors from "cors";
import { CatalogItem } from "./types/catalog-types";

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  return res.send("serverna on laaa");
});

app.get("/catalog", (req, res) => {
  const { search } = req.query;
  const catalogList: Array<CatalogItem> = [
    {
      id: 1234,
      display_name: "Baju kotak-kotak",
      harga: 400000,
      stock: 5,
      rating: 5,
      imageUrl:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbobo.grid.id%2Fread%2F082857797%2Fmana-yang-cocok-untuk-cuaca-panas-pakai-baju-hitam-atau-putih%3Fpage%3Dall&psig=AOvVaw1G801l9giZVe4Ca3u3YaFW&ust=1697378650413000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKCw-q3a9YEDFQAAAAAdAAAAABAE",
      ulasan: ["Bahan bagus", "Adem"],
    },
    {
      id: 1235,
      display_name: "Baju bulat-bulat",
      harga: 500000,
      stock: 5,
      rating: 4,
      imageUrl: "",
      ulasan: ["Bahan oke", "Bagus"],
    },
    {
      id: 1239,
      display_name: "Topi",
      harga: 500000,
      stock: 5,
      rating: 1,
      imageUrl: "",
      ulasan: ["Bahan oke", "Bagus"],
    },
  ];

  if (search) {
    const filterSearch = catalogList.filter((catalog) =>
      catalog.display_name
        .toLowerCase()
        .includes(search?.toString().toLowerCase())
    );
    return res.status(200).json(filterSearch);
  }

  return res.status(200).json(catalogList);
});

app.listen(PORT, () => {
  console.log(`dah on ni http://localhost:${PORT}`);
});
