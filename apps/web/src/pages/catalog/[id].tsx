import { Rating } from "@/components";
import catalogList from "@/constants/dummy-catalog";
import { CatalogItem } from "@/util/catalog-types";
import { convertRupiah } from "@/util/convert-rp";
import axios from "axios";
// import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IoLocation } from "react-icons/io5";
import Swal from "sweetalert2";

export default function CatalogView() {
  const router = useRouter();
  const [item, setItem] = useState<CatalogItem>();
  const [rating, setRating] = useState<any>();
  const [qty, setQty] = useState<number>(1);
  const [address, setAddress] = useState<string>(
    "Jl. Gamprit, Jatiwaringin Asri, Pondokgede, Kota Bekasi, Jawa Barat, 17411"
  );

  const changeAddress = async () => {
    Swal.fire({
      customClass: {
        confirmButton: "btn",
        cancelButton: "btn",
      },
      titleText: "Ubah Alamat Penerima",
      text: "Pastikan alamatmu benar agar pengiriman berjalan lancar!",
      input: "textarea",
      showCancelButton: true,
      cancelButtonColor: "#ff271c",
      confirmButtonText: "Ubah Alamat",
      showLoaderOnConfirm: true,
      preConfirm: async (address) => {
        try {
          if (!address) return false;
          setAddress(address);
          return true;
        } catch (error) {
          Swal.showValidationMessage(
            "Gagal mengubah alamat, cek koneksi atau hubungi contact person"
          );
        }
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          customClass: {
            cancelButton: "btn",
            confirmButton: "btn",
          },
          showConfirmButton: true,
          titleText: "Berhasil Mengubah alamat!",
          icon: "success",
        });
      }
    });
  };

  const searchCatalog = async () => {
    const fetch = await axios.get(`http://localhost:3001/catalog`, {
      params: {
        id: router.query.id,
      },
    });
    const data = fetch.data;
    console.log(data[0]);
    updateRating(data[0]);
    return setItem(data[0]);
  };

  const searchDummyCatalog = async () => {
    catalogList.find((val, i) => {
      if (val.id == Number(router.query.id)) {
        updateRating(val);
        return setItem(val);
      }
    });
  };

  const updateRating = async (data: CatalogItem) => {
    if (data) {
      let sum = 0;
      for (let i = 0; i < data.rating.length; i++) {
        sum = sum + data.rating[i];
      }
      const totalRating = Math.floor(sum / (data.rating.length + 1));
      setRating(totalRating);
    }
  };

  useEffect(() => {
    // searchCatalog();
    searchDummyCatalog();
  }, [router]);

  return (
    <main>
      <div className="flex h-screen px-0 lg:px-20">
        {item ? (
          <div className="p-10 bg-white w-full m-auto lg:flex justify-between lg:gap-20">
            <div className="h-full">
              <img
                className="w-full h-[500px] object-cover"
                alt={item.display_name}
                src={item.thumbUrl}
              />
              <h1 className="text-zinc-950 mt-5 text-left text-2xl font-bold font-poppins">
                {item.display_name}
              </h1>
              <h2 className="text-zinc-700 text-lg mt-2">Rating</h2>
              <Rating value={rating} review={item.rating.length + 1} />
              <hr className="border-zinc-300 my-5" />
              <h1 className="text-blue-600 text-lg mt-3 font-bold font-poppins">
                Deskripsi barang :
              </h1>
              <h2 className="text-zinc-800 text-lg font-poppins">
                {item.description}
              </h2>
              <hr className="border-zinc-300 my-5" />
              <h1 className="text-blue-600 text-lg mt-3 font-bold font-poppins">
                Ulasan pembeli :
              </h1>
            </div>
            <div className="mt-10 lg:mt-0 h-full w-full border-2 rounded-md p-10">
              <h1 className="text-blue-600 font-bold text-2xl">
                Harga<span className="text-sm text-zinc-700"> / Item</span>
              </h1>
              <h1 className="text-zinc-950 font-bold text-4xl">
                {convertRupiah(item.harga)}
              </h1>
              <h1 className="text-blue-600 font-bold text-2xl mt-10">Jumlah</h1>
              <div className="relative flex items-center max-w-[8rem] mt-2">
                <button
                  type="button"
                  id="decrement-button"
                  onClick={() => setQty((prev) => prev - 1)}
                  disabled={qty == 1 ? true : false}
                  className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none"
                >
                  <svg
                    className="w-3 h-3 text-gray-900"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 2"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 1h16"
                    />
                  </svg>
                </button>
                <input
                  type="number"
                  id="quantity-input"
                  onChange={(e) => setQty(e.target.value as unknown as number)}
                  value={qty}
                  aria-describedby="helper-text-explanation"
                  className="overflow-hidden bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5"
                  placeholder={"999"}
                  required
                />
                <button
                  type="button"
                  id="increment-button"
                  onClick={() => setQty((prev) => prev + 1)}
                  className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none"
                >
                  <svg
                    className="w-3 h-3 text-gray-900"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 1v16M1 9h16"
                    />
                  </svg>
                </button>
              </div>
              <h1 className="text-blue-600 font-bold text-2xl mt-10">
                Alamat Penerima
              </h1>
              <div className="flex gap-4 mt-2 bg-zinc-100 p-3">
                <span className="text-3xl">
                  <IoLocation />
                </span>
                <h1>{address}</h1>
              </div>
              <button
                onClick={() => changeAddress()}
                className="btn w-full mt-2"
              >
                Ubah Alamat
              </button>
              <h1 className="text-blue-600 font-bold text-2xl mt-10">
                Rincian
              </h1>
              <table className="w-full mt-5 text-sm text-left rtl:text-right text-gray-500">
                <thead className="text-xs text-gray-700 uppercase">
                  <tr>
                    <th scope="col" className="px-6 py-3 bg-gray-50">
                      Detail
                    </th>
                    <th scope="col" className="px-6 py-3 text-right">
                      Biaya
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50"
                    >
                      Harga Total
                    </th>
                    <td className="px-6 py-4 text-right">
                      {convertRupiah(item.harga * qty)}
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50"
                    >
                      Jasa Pengiriman
                    </th>
                    <td className="px-6 py-4 text-right">
                      {convertRupiah(item.harga - (item.harga * 90) / 100)}
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50"
                    >
                      Asuransi Pengiriman
                    </th>
                    <td className="px-6 py-4 text-right">
                      {convertRupiah(item.harga - (item.harga * 90) / 100)}
                    </td>
                  </tr>
                </tbody>
              </table>
              <button className="btn w-full mt-2">Bayar</button>
            </div>
          </div>
        ) : null}
      </div>
    </main>
  );
}
