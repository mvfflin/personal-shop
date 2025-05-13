import Link from "next/link";
import { BiMenu } from "react-icons/bi";

export const Navbar = () => {
  return (
    <>
      <div className="top-0 h-[90px] backdrop-blur-lg bg-zinc-950 w-full sticky">
        <div className="flex justify-center text-center pt-7 gap-20">
          <div id="logo-label">
            <h1 className="text-white text-4xl font-bold">Tokoku</h1>
          </div>
          <div id="menus" className="hidden lg:flex">
            <div className="grid grid-cols-3 gap-10 text-white text-2xl pt-1">
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
            <div className="grid grid-cols-1 gap-1 text-white text-2xl pt-1">
              <button className="navbarmenu">
                <BiMenu />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
