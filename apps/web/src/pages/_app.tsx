import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
