import { convertRupiah } from "@/util/convert-rp";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { IoSearch } from "react-icons/io5";
import { CatalogItem } from "@/util/catalog-types";
import { Rating } from "@/components";
import Image from "next/image";
import catalogList from "@/constants/dummy-catalog";

export default function Catalog() {
  const [search, setSearch] = useState<string>("");
  const [catalogs, setCatalog] = useState<Array<CatalogItem>>([]);

  const [debouncedValue] = useDebounce(search, 3000);

  const fetchCatalog = async () => {
    try {
      const res = await axios.get(`${process.env.API_URL}/catalog`, {
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

  const dummyCatalog = async () => {
    setCatalog(catalogList);
  };

  useEffect(() => {
    dummyCatalog();
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
      <div className="grid grid-cols-1 lg:grid-cols-3 grid-flow-row gap-6 w-max mx-auto">
        {catalogs.map((catalog, index) => {
          let sum = 0;
          catalog.review.forEach((review) => {
            sum = sum + review.rating;
          });
          const totalRating = Math.floor(sum / (catalog.review.length + 1));
          return (
            <Link href={`/catalog/${catalog.id}`} key={index}>
              <div
                key={index}
                className="bg-white p-5 rounded-lg hover:scale-105 active:scale-105 focus:scale-105 transition-all active:ring-4 active:ring-blue-600 focus:ring-4 focus:ring-blue-600 hover:opacity-80"
              >
                <img
                  className="w-[300px] h-[300px] object-cover"
                  alt={catalog.display_name}
                  src={catalog.thumbUrl}
                />
                <h1 className="font-bold font-poppins text-xl my-2">
                  {catalog.display_name}
                </h1>
                <h2 className="font-semibold font-[Montserrat] text-md">
                  {convertRupiah(catalog.harga)}
                </h2>
                {}
                <Rating
                  value={totalRating}
                  review={catalog.review.length + 1}
                />
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
