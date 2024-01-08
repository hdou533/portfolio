import React from "react";
import { navLinks } from "@/libs/data";
import SingleNav from "./Single_Nav";

const Navbar = () => {
  return (
    <div className="w-full h-12 left-0 bottom-0 bg-btn-blue text-white flex text-[0.6rem] fixed lg:justify-center lg:text-sm lg:static xl:text-base z-10 lg:z-0">
      <nav className="w-full flex justify-around items-center bg-color-btn-blue lg:w-3/4 ">
        {navLinks.map((navLink) => (
          <SingleNav
            key={navLink.id}
            pageTitle={navLink.title}
            pageLink={navLink.address}
            pageIcon={navLink.icon}
          />
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
