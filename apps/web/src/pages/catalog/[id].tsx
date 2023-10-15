import { CatalogItem } from "@/util/catalog-types";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function CatalogView() {
  const router = useRouter();
  const [item, setItem] = useState<CatalogItem>();

  const searchCatalog = async () => {
    const fetch = await axios.get(`http://localhost:3001/catalog`, {
      params: {
        id: router.query.id,
      },
    });
    const data = fetch.data;
    console.log(data[0]);
    return setItem(data[0]);
  };

  useEffect(() => {
    searchCatalog();
  }, [router]);

  return (
    <main>
      <div className="p-10 bg-white w-max">
        <img
          className="w-[200px]"
          alt={item?.display_name}
          src={item?.thumbUrl}
        />
        <h1 className="text-zinc-950 text-left">{item?.display_name}</h1>
      </div>
    </main>
  );
}
