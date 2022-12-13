import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head />
      <body className="bg-orange-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-300 break-words leading-6 transition-colors duration-500">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
