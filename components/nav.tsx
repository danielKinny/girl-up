import React from "react";

export default function Nav() {
    return (
        <nav className="px-8 mx-auto flex justify-between items-center py-4">
          <img src="/banner.png" className="h-20 object-contain" />
          <ul className="flex space-x-6 text-white text-lg">
            <li>
              <a href="#" className="hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="/team" className="hover:text-gray-400">
                The Team
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>)
}