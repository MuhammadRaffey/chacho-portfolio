"use client";
// src/components/NavBar.tsx
import React, { useState } from "react";
import Link from "next/link";
import Theme from "./Theme";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="transition-all duration-300 border-b hover:shadow-sm hover:shadow-primary hover:border-primary border-b-slate-600 text-[16pt]">
      <div className="flex items-center justify-between mx-auto p-4">
        <div className="flex items-center">
          <Link href="/" className="text-3xl font-bold whitespace-nowrap">
            Wedding Portraits
          </Link>
        </div>
        <div className="hidden md:flex md:items-center md:space-x-8">
          <ul className="flex space-x-8">
            <li>
              <Link
                href="/"
                className="flex items-center py-2 hover:underline underline-offset-4 px-3 rounded"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/photography"
                className="flex items-center hover:underline underline-offset-4 py-2 px-3 rounded linkStyle"
              >
                Photography
              </Link>
            </li>
            <li>
              <Link
                href="/cinematography"
                className="flex items-center hover:underline underline-offset-4 py-2 px-3 rounded linkStyle"
              >
                Cinemitography
              </Link>
            </li>
          </ul>
          <Theme />
        </div>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-9 h-9 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2"
          aria-controls="navbar-sticky"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 text-primary h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>

      <div
        className={`md:hidden ${isOpen ? "block" : "hidden"} w-full`}
        id="navbar-sticky"
      >
        <ul className="flex flex-col p-4 mt-2 rounded-lg space-y-4">
          <li>
            <Link
              href="/"
              className="flex items-center py-2 hover:underline underline-offset-4 px-3 rounded"
              aria-current="page"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/photography"
              className="flex items-center hover:underline underline-offset-4 py-2 px-3 rounded linkStyle"
            >
              Photography
            </Link>
          </li>
          <li>
            <Link
              href="/cinematography"
              className="flex items-center hover:underline underline-offset-4 py-2 px-3 rounded linkStyle"
            >
              Cinemitography
            </Link>
          </li>
          <li>
            <Theme />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
