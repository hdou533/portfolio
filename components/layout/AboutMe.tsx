import Image from "next/image";

const AboutMeSection = () => {
  return (
    <section
      id="about"
      className="snap-start w-full text-white flex flex-col justify-start items-center gap-8 mb-20"
    >
      <div className="text-center px-8 max-w-xl flex flex-col gap-8 mb-20">
        <h1 className="text-3xl font-bold underline decoration-secondary underline-offset-8 uppercase my-8 lg:text-5xl">
          about me
        </h1>
        <p className=" leading-relaxed">
          Hey! I&apos;m Sally, a web developer with a passion for front-end
          development and design. Currently, I&apos;m pursuing my second
          master&apos;s degree at Lincoln University, building upon my
          foundation in{" "}
          <span className="text-light-pink">Information Technology</span> from
          the <span className="text-light-pink">University of Auckland</span>.
        </p>

        <p className=" leading-relaxed">
          My goal is to craft applications that not only operate with optimal
          efficiency but also provide users with an enjoyable experience.
        </p>

        {/* <p>
          I&apos;ve been doing web development for about 2 years now, and
          I&apos; had the privilege of contributing to the tech realm for a
          solid year at SmartLeader - an innovative education company that
          refines my skills and understanding the dynamic intersection of
          technology and education.
        </p> */}
      </div>
    </section>
  );
};

export default AboutMeSection;
