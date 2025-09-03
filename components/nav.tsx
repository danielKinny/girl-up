import React from "react";
import Link from "next/link"
import Image from "next/image";

import {
  MegaphoneIcon,
  HomeIcon,
  UserGroupIcon
} from "@heroicons/react/24/outline";


export default function Nav() {
    return (
      <div>
        <nav className="px-8 mx-auto flex justify-between items-center py-4">
          <Link href="/">
            <Image height={40} width={200} alt={"Girl Up Banner"} src="/banner.png" className="object-contain" />
          </Link>
          <ul className="flex space-x-6 text-white text-lg">
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
        </nav>
      </div>)
}