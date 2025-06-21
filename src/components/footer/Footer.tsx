import Link from "next/link";
import React from "react";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { MdEmail } from "react-icons/md";

interface Props {}

const Footer = (props: Props) => {
  return (
    <div className=" pt-10 lg:pt-20 py-10 w-full bg-[#9CA091]">
      <div className="w-11/12 lg:w-[1280px] mx-auto">
        <div className="flex items-center justify-center space-x-5">
          <img src="/images/logococonut.png" className="w-10 lg:w-12 " />
          <p className="font-semibold text-white text-2xl lg:text-3xl">
            Batam Dwi Coconut
          </p>
        </div>
        <div className="flex items-center justify-center text-lg text-white mt-4 lg:mt-8 font-semibold space-x-5 lg:space-x-20">
          <Link href="/">About Us</Link>
          <Link href="/">Product</Link>
          <Link href="/">Article</Link>
          <Link href="/">Our Approach</Link>
        </div>

        <p className="mt-4 lg:mt-8 text-center w-full text-white text-xl ">
          JL. Gelugur, Moro, Karimun, Moro, Kec. Moro, Kabupaten Karimun,
          Kepulauan Riau 29663
        </p>

        <p className="mt-8 text-center font-bold text-xl ">Keep in Touch</p>
        <div className="flex items-center justify-center space-x-2 mt-3">
          <div className="bg-black p-2 rounded-full ">
            <IoIosMail size={35} className="text-[#9CA091]  " />
          </div>
          <div className="bg-black p-2 rounded-full ">
            <FaInstagram size={35} className="text-[#9CA091]  p-1 " />
          </div>
          <div className="bg-black p-2 rounded-full ">
            <FaLinkedinIn size={35} className="text-[#9CA091]  p-1 " />
          </div>
          <div className="bg-black p-2 rounded-full ">
            <FaWhatsapp size={35} className="text-[#9CA091] p-1 " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
