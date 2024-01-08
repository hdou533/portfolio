import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="w-full h-auto text-left flex flex-col justify-starts items-start gap-8 my-16 lg:w-[80%] 2xl:w-[60%] ">
      <div className="flex gap-8 items-center">
        <Image
          src={"/about/animation.png"}
          width={120}
          height={120}
          alt="profile"
        />
        <div>
          <h1 className="font-semibold text-xl mb-4">Sally Dou</h1>
          <p>(She/Her)</p>
        </div>
      </div>
    </div>
  );
};

export default About;
