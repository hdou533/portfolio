import React from "react";
import { navLinks } from "../../libs/data";
import Link from "next/link";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <footer className="w-full text-white bg-background flex flex-col text-sm xl:text-base px-8">
      <div className="flex justify-center items-center gap-8">
        {navLinks.map((navLink) => (
          <Link key={navLink.id} href={navLink.address}>
            <span>{navLink.title}</span>
          </Link>
        ))}
      </div>

      <hr className="border-t border-light-pink my-4 mx-auto w-[90%]" />

      <div className=" text-xs text-center">
        <div>
          Follow me on
          <a
            href="https://github.com/hdou533"
            target="_blank"
            className="hover:text-secondary mx-1"
          >
            @github
          </a>
          |
          <a
            href="https://www.linkedin.com/in/hongnan-dou/"
            target="_blank"
            className="hover:text-secondary mx-1"
          >
            @linkedin
          </a>
          |
          <a
            href="https://www.instagram.com/sallydddous/"
            target="_blank"
            className="hover:text-secondary mx-1"
          >
            @instagram
          </a>
        </div>
        <p className="pt-2 pb-16 lg:py-2">A project by Sally &copy; {year}.</p>
      </div>
    </footer>
  );
};

export default Footer;
