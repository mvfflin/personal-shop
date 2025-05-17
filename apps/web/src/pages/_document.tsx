import { Navbar } from "@/components/layout/Navbar";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <head>
        <title>Tokoku</title>
      </head>
      <body className="bg-zinc-900">
        <Navbar />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
