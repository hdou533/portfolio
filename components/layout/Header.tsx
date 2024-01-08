import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../Navbar";

const Header = () => {
  return (
    <div id="header" className="text-white bg-background z-10 sticky">
      <div className="w-full px-8 py-4 flex  items-center gap-8 lg:py-0">
        <div className="w-24 md:flex md:justify-center">
          <Link href="/">
            <Image src="/logo-secondary.png" width={24} height={24} alt="" />
          </Link>
        </div>
        <div className="grow">
          <Navbar />
        </div>

        <div className="w-24 flex justify-end gap-4 items-center ">
          <a href="https://github.com/hdou533">
            <Image
              src="/github.png"
              width={20}
              height={20}
              alt=""
              className="hover:scale-110"
            />
          </a>
          <a href="https://www.instagram.com/sallydddous/">
            <Image
              src="/instagram.png"
              width={20}
              height={20}
              alt=""
              className="hover:scale-110"
            />
          </a>
          <a href="https://www.linkedin.com/in/hongnan-dou/">
            <Image
              src="/linkedin.png"
              width={24}
              height={24}
              alt=""
              className="hover:scale-110"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
