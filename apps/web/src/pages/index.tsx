import Image from "next/image";
import { Inter } from "next/font/google";
import TextTransition, { presets } from "react-text-transition";
import { useState, useEffect } from "react";
import { IoCartSharp } from "react-icons/io5";
import { Inline } from "@/components";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
const teks = ["Termurah", "Terbagus", "Terlengkap"];

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <>
      <div className="text-center px-5">
        <h1 className="text-center text-white text-5xl lg:text-8xl font-extrabold mt-44">
          Tokoku
        </h1>

        <TextTransition
          className="text-center text-teal-400 text-4xl lg:text-7xl font-extrabold mt-5"
          inline
          springConfig={presets.gentle}
        >
          {teks[index % teks.length]}
        </TextTransition>
        <h1 className="text-white text-center mt-7 text-lg lg:text-2xl">
          Tempat kamu mencari barang bagus dan terjangkau harganya!
        </h1>
        <div className="mx-auto mt-10">
          <Link href={"/catalog"}>
            <button className="btn text-xl">
              <Inline>
                <IoCartSharp /> Catalog
              </Inline>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
