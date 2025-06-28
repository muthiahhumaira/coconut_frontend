"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-white fixed  top-0 w-full z-50 shadow">
      <div className="flex mx-auto py-5 justify-between items-center w-11/12 text-black">
        {/* Logo */}
        <Link href="/">
          <Image
            alt="logo"
            width={50}
            height={50}
            src="/images/logococonut.png"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 ">
          <ul className="flex space-x-10 ">
            <li className="cursor-pointer">
              <Link href="/">About Us</Link>
            </li>
            <li className="cursor-pointer">
              <Link href="/products">Products</Link>
            </li>
            <Link href="/articles">Articles</Link>
          </ul>
        </div>

        {/* Contact Button */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="bg-[#474546] rounded-full px-4 py-2 text-white"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white text-black px-6 py-4 shadow-md">
          <ul className="space-y-4">
            <li className="cursor-pointer">
              <Link href="/">About Us</Link>
            </li>
            <li className="cursor-pointer">
              <Link href="/products">Products</Link>
            </li>
            <Link href="/articles">Articles</Link>

            <li className="cursor-pointer">Our Approach</li>
            <li>
              <Link
                href="/contact"
                className="bg-[#474546] rounded-full px-4 py-2 text-white"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
