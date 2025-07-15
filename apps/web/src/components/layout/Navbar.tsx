import Link from "next/link";
import { BiMenu } from "react-icons/bi";
import { IoPerson } from "react-icons/io5";

export const Navbar = () => {
  return (
    <>
      <div className="top-0 h-[90px] backdrop-blur-lg bg-zinc-950 w-full sticky z-50 content-center">
        <div className="flex justify-between flex-row text-center px-20 my-auto">
          <div id="logo-label">
            <h1 className="text-white text-4xl font-bold">Tokoku</h1>
          </div>
          <div id="menus" className="hidden lg:flex">
            <div className="grid grid-cols-3 gap-10 text-white text-2xl pt-1 justify-between">
              <Link href="/" className="navbarmenu">
                <h1>Home</h1>
              </Link>
              <Link href="/catalog" className="navbarmenu">
                <h1>Catalog</h1>
              </Link>
              <Link href="/" className="navbarmenu">
                <h1>Contact</h1>
              </Link>
            </div>
          </div>

          <div className="flex lg:hidden" id="phone-menu">
            <div className="text-white text-2xl">
              <button className="navbarmenu">
                <BiMenu />
              </button>
            </div>
          </div>
          <div id="user" className="flex my-auto">
            <div className="text-white text-2xl">
              <button className="inline-flex my-auto justify-between gap-4">
                <IoPerson className="my-auto" />
                <h1>User</h1>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
