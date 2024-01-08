import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="w-full h-[calc(100vh-4rem)] flex flex-col items-center justify-center p-8 md:flex-row md:h-[calc(100vh-3rem)] mb-20"
    >
      <div className="flex flex-col flex-wrap items-center justify-center gap-8 md:w-2/3 xl:w-1/2">
        <h1 className="text-4xl leading-normal lg:text-5xl lg:leading-relaxed">
          I&apos;m <span className="text-secondary font-semibold">Sally</span>,
          a web developer passionate about building beautiful interface &
          experience.
        </h1>
      </div>
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      {/* <div className='absolute right-10 bottom-20 translate-x-0 translate-y-2'>
        <Image src="/arrow-down.png" width={64} height={64} alt='' className='objetct-contain'/>
      </div> */}
    </section>
  );
};

export default Hero;
