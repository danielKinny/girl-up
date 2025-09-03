import React from "react";
import Link from "next/link"
export default function Nav() {
    return (
      <div>
        <nav className="px-8 mx-auto flex justify-between items-center py-4">
          <Link href="/">
            <img src="/banner.png" className="h-20 object-contain" />
          </Link>
          <ul className="flex space-x-6 text-white text-lg">
            <li>
              <Link href="/" className="hover:text-gray-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="/team" className="hover:text-gray-400">
                The Team
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-gray-400">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>)
}