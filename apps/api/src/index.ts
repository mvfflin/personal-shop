import express from "express";
import cors from "cors";
import catalogList from "./constants/dummy-catalog";

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
