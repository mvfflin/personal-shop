import Image from "next/image";
import { Inter } from "next/font/google";
import TextTransition, { presets } from "react-text-transition";
import { useState, useEffect } from "react";
import { IoCartSharp } from "react-icons/io5";
import { Inline } from "@/components";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
const teks = ["Termurah", "Terjangkau"];

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
      <div className="text-center">
        <h1 className="text-center text-white text-3xl lg:text-6xl font-extrabold mt-44">
          Toko Baju
        </h1>
        <TextTransition
          className="text-center text-teal-400 text-4xl lg:text-7xl font-extrabold mt-5"
          inline
          springConfig={presets.gentle}
        >
          {teks[index % teks.length]}
        </TextTransition>
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
