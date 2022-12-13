import Link from "next/link";
import { IoLogoGithub, IoSunny, IoMoon } from "react-icons/io5/index";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import DropdownMenu from "./dropdownMenu";

export default function Header() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const ThemeChanger = () => {
    if (!mounted) return null;

    const t = theme === "system" ? systemTheme : theme;

    if (t === "dark") {
      return (
        <button
          className="inline-flex items-center p-3 rounded-lg bg-purple-500 dark:bg-orange-300"
          onClick={() => setTheme("light")}
        >
          <IoSunny className="text-zinc-900" />
        </button>
      );
    } else {
      return (
        <button
          className="inline-flex items-center p-3 rounded-lg bg-purple-500 dark:bg-orange-300"
          onClick={() => setTheme("dark")}
        >
          <IoMoon className="text-zinc-100" />
        </button>
      );
    }
  };

  return (
    <header className="fixed w-full p-2 z-20 backdrop-blur-md">
      <div className="mx-auto max-w-3xl">
        <nav className="flex items-center gap-3 text-base">
          <h2 className="font-semibold tracking-tighter p-2 font-heebo text-lg">
            <Link href="/">Aranchai Moonkum</Link>
          </h2>
          <div className="items-center gap-6 hidden md:flex">
            <Link
              href="/works"
              className="inline-flex no-underline items-center gap-1 p-2 underline-offset-[3px] hover:underline"
            >
              Works
            </Link>
            <Link
              href="#"
              className="inline-flex no-underline items-center gap-1 p-2 underline-offset-[3px] hover:underline"
              target="_blank"
            >
              <IoLogoGithub />
              Source
            </Link>
          </div>
          <div className="flex-1"></div>
          {ThemeChanger()}
          <DropdownMenu />
        </nav>
      </div>
    </header>
  );
}
