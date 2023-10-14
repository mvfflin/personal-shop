import { convertRupiah } from "@/util/convert-rp";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { IoSearch } from "react-icons/io5";

type CatalogItem = {
  id: number;
  display_name: string;
  harga: number;
  stock: number;
  rating: number;
  imageUrl: string;
  ulasan: Array<string>;
};

export default function Catalog() {
  const [search, setSearch] = useState<string>("");
  const [catalog, setCatalog] = useState<Array<CatalogItem>>([]);

  const [debouncedValue] = useDebounce(search, 3000);

  const fetchCatalog = async () => {
    try {
      const res = await axios.get(`http://localhost:3001/catalog`, {
        params: {
          search: debouncedValue,
        },
      });
      const data = res.data;

      return setCatalog(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCatalog();
  }, [debouncedValue]);

  return (
    <main>
      <div className="mx-auto my-5 mt-20 text-center">
        <label htmlFor="search" className="text-white font-poppins ">
          Cari katalog :
        </label>
        <br />
        <input
          onChange={(e) => setSearch(e.target.value)}
          className="my-2 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-5 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 outline-none"
          type="text"
          placeholder="Cari katalog...."
          name="search"
          id="search"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 grid-flow-row gap-4 w-max mx-auto">
        {catalog.map((catalog, index) => {
          return (
            <Link href={`/catalog/${catalog.id}`}>
              <div key={index} className="bg-white p-5 rounded-lg">
                <img
                  className="w-[300px] h-auto"
                  alt={catalog.display_name}
                  src="https://cdn.discordapp.com/attachments/866552863264997376/1162753141016637470/fotojet-7-minjpg-20210826124642.png?ex=653d153f&is=652aa03f&hm=54b1203335e1c3441d2756ffcb5de397e178b8618793c14c6ee87c4942961fda&"
                />
                <h1 className="font-bold font-poppins text-xl my-2">
                  {catalog.display_name}
                </h1>
                <h2 className="font-semibold font-[Montserrat] text-md">
                  {convertRupiah(catalog.harga)}
                </h2>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
