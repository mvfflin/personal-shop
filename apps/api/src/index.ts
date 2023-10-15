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
  const { search, id } = req.query;
  const catalogList: Array<CatalogItem> = [
    {
      id: 1234,
      display_name: "Baju kotak-kotak",
      harga: 400000,
      stock: 5,
      rating: [1, 3, 4],
      images: [],
      thumbUrl:
        "https://cdn.discordapp.com/attachments/866552863264997376/1162753141016637470/fotojet-7-minjpg-20210826124642.png?ex=653d153f&is=652aa03f&hm=54b1203335e1c3441d2756ffcb5de397e178b8618793c14c6ee87c4942961fda&",
      ulasan: ["Bahan bagus", "Adem"],
    },
    {
      id: 1235,
      display_name: "Baju bulat-bulat",
      harga: 500000,
      stock: 5,
      rating: [2, 3, 4],
      images: [],
      thumbUrl:
        "https://cdn.discordapp.com/attachments/866552863264997376/1162753141016637470/fotojet-7-minjpg-20210826124642.png?ex=653d153f&is=652aa03f&hm=54b1203335e1c3441d2756ffcb5de397e178b8618793c14c6ee87c4942961fda&",
      ulasan: ["Bahan oke", "Bagus"],
    },
    {
      id: 1239,
      display_name: "Topi",
      harga: 500000,
      stock: 5,
      rating: [2, 3, 2],
      images: [],
      thumbUrl:
        "https://cdn.discordapp.com/attachments/866552863264997376/1163100221396488212/topi_baseball_topi_snapback_unisex_topi_NY.png?ex=653e587e&is=652be37e&hm=f477bb665d4cb1bdc616e86979fc1d3d6b870eb1bfdbc6329299a07d37488352&",
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
  } else if (id) {
    const searchId = catalogList.filter(
      (catalog) => catalog.id == parseInt(id.toString())
    );
    if (searchId) return res.status(200).json(searchId);
    else
      return res.status(201).send({ err: "Catalog with that id not found!" });
  }

  return res.status(200).json(catalogList);
});

app.listen(PORT, () => {
  console.log(`dah on ni http://localhost:${PORT}`);
});
