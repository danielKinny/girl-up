import React, { useState } from "react";
import Link from "next/link"
import Image from "next/image";

import {
  MegaphoneIcon,
  HomeIcon,
  UserGroupIcon
} from "@heroicons/react/24/outline";


export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <nav className="px-4 sm:px-8 mx-auto flex justify-between items-center py-4 relative">
        <Link href="/">
          <Image height={40} width={200} alt={"Girl Up Banner"} src="/banner.png" className="object-contain" />
        </Link>
        <ul className="hidden md:flex space-x-6 text-white text-lg">
          <li>
            <Link href="/" className="hover:text-pink-400">
              <HomeIcon className="inline-block h-6 mr-1 mb-1" />
              Home
            </Link>
          </li>
          <li>
            <Link href="/team" className="hover:text-pink-400">
              <UserGroupIcon className="inline-block h-6 mr-1 mb-1" />
              The Team
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-pink-400">
              <MegaphoneIcon className="inline-block h-6 mr-1 mb-1" />
              Contact Us
            </Link>
          </li>
        </ul>
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 text-white focus:outline-none z-30"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className={`block w-6 h-0.5 bg-white mb-1 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white mb-1 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
        <ul
          className={`md:hidden absolute top-full left-0 w-full bg-white bg-opacity-95 text-black text-lg flex flex-col items-center space-y-6 py-8 transition-all duration-300 z-20 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        >
          <li>
            <Link href="/" className="hover:text-pink-400" onClick={() => setMenuOpen(false)}>
              <HomeIcon className="inline-block h-6 mr-1 mb-1" />
              Home
            </Link>
          </li>
          <li>
            <Link href="/team" className="hover:text-pink-400" onClick={() => setMenuOpen(false)}>
              <UserGroupIcon className="inline-block h-6 mr-1 mb-1" />
              The Team
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-pink-400" onClick={() => setMenuOpen(false)}>
              <MegaphoneIcon className="inline-block h-6 mr-1 mb-1" />
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
// ...existing code...
}