import React from "react";
import { companies, navLinks, skills } from "@/libs/data";
import Image from "next/image";
import Link from "next/link";

const Experience = () => {
  return (
    <div className="snap-start w-full text-white flex flex-col justify-start items-center gap-8 mb-20">
      <div className="text-center px-8 max-w-xl flex flex-col gap-8">
        <h1 className="text-3xl font-bold underline decoration-secondary underline-offset-8 uppercase my-8 lg:text-5xl">
          Experience
        </h1>
      </div>
      <div className="skill-scrollbar pb-12 flex flex-col justify-center gap-16 md:flex-row md:gap-32 md:text-xl xl:text-2xl">
        <div className="grow flex flex-col gap-8 items-center">
          <p className="uppercase text-center">
            Some technologies I&apos;ve worked with:
          </p>
          <div className="w-full grid grid-cols-4 gap-4 place-items-center">
            {skills.map((skill) => (
              <div key={skill.title} className="">
                <Image
                  src={skill.img}
                  width={skill.size}
                  height={skill.size}
                  alt={skill.title}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-8 items-center">
          <p className="uppercase text-center">Where I&apos;ve worked:</p>
          <div className="flex flex-wrap gap-8 justify-center">
            {companies.map((company) => (
              <div key={company.title} className="py-2">
                <Image
                  src={company.img}
                  width={240}
                  height={100}
                  alt={company.title}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <a
        href={navLinks[2]["address"]}
        target="_blank"
        className="border text-xl md:text-3xl px-8 py-4 rounded-lg mb-20 transition-all duration-300 ease-in-out hover:border-secondary hover:shadow-secondary/50 shadow-lg hover:text-secondary"
      >
        CHECK OUT MY RÉSUMÉ!
      </a>
    </div>
  );
};

export default Experience;
