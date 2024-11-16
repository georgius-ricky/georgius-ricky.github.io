"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import ThemeToggleButton from "./buttons/ThemeToggleButton";
import { IconMenu2, IconSquareXFilled } from "@tabler/icons-react";
import { usePathname } from 'next/navigation'

const headerList = [
  { name: "Home", url: "/" },
  { name: "About", url: "/about" },
];

export default function Header() {
    const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <header
      className={`sticky top-0 w-full z-50 transition-all px-6 duration-300 flex justify-between ${
        isScrolled
          ? "backdrop-blur backdrop-filter bg-gray-300/25 dark:bg-gray-900/70 shadow-lg"
          : "bg-gray-300 dark:bg-gray-900 shadow-md"
      }`}
    >
      <Link
        href="/"
        className="font-stitch-party text-[45px] text-gray-800 dark:text-gray-300 cursor-pointer"
      >
        Ricky
      </Link>
      <div className="flex items-center py-4">
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4 mr-12 text-[18px] font-semibold">
          {headerList.map(({ name, url }) => (
            <div key={url}>
              <Link href={url}   className={`${ pathname === url ? "text-gray-800 dark:text-white" : "text-gray-400" }`}>
                {name}
              </Link>
            </div>
          ))}
        </div>

        {/* Theme Toggle Button and Mobile Menu Icon */}
        <div className="flex items-center">
          <ThemeToggleButton />
          <button
            className="md:hidden ml-4 text-gray-800 dark:text-gray-300"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <IconSquareXFilled size={32} /> : <IconMenu2 size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="absolute top-16 right-0 w-full bg-gray-300 dark:bg-gray-900 shadow-lg md:hidden transition-all duration-300 ease-in-out"
        >
          <div className="flex flex-col space-y-4 py-4 pl-5">
            {headerList.map(({ name, url }) => (
              <div key={url}>
                <Link
                  href={url}
                  className="text-gray-800 dark:text-gray-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
