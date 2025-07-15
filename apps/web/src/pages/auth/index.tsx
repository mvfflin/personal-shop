import Link from "next/link";

export default function AuthPage() {
  return (
    <>
      <main className="flex h-screen px-0">
        <div className="m-auto">
          <div className="w-full h-full flex">
            <div className="bg-white p-5 h-full w-full rounded-md">
              <h1 className="text-3xl font-bold font-poppins mb-5">
                Hai! Mau masuk atau buat akun baru?
              </h1>
              <Link
                href={"/auth/signin"}
                className="btn flex text-center justify-center text-xl"
              >
                Masuk
              </Link>
              <Link
                href={"/auth/signup"}
                className="btn flex text-center justify-center text-xl mt-5"
              >
                Buat akun baru
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
