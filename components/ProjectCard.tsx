import Image from "next/image";

interface CardProps {
  title: string;
  desc: string;
  demolink: string;
  codelink: string;
  coverUrl: string;
  tags: string[];
}

const ProjectCard: React.FC<CardProps> = ({
  title,
  desc,
  demolink,
  codelink,
  coverUrl,
  tags,
}) => {
  return (
    <div className="w-full h-[520px] flex flex-col justify-center items-center rounded-lg sm:flex-row sm:w-[520px] sm:h-[320px]  bg-btn-blue drop-shadow-md gap-4 sm:px-8 sm:gap-8 transition-all duration-300 ease-in-out hover:-translate-y-2">
      <div className="relative w-[80%] h-[200px] sm:flex-1 ">
        <Image
          src={coverUrl}
          fill
          alt=""
          className="object-cover opacity-82 rounded-lg"
        />
      </div>
      <div className="flex flex-col max-w-[80%] justify-between sm:flex-1 sm:h-[80%]">
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-lg text-secondary xl:text-2xl">
            {title}
          </h2>
          <p className="text-sm text-gray-300 h-16 overflow-y-auto scrollbar-hide">
            {desc}
          </p>

          <div className="text-sm text-white/75 ">
            {demolink ? (
              <a
                href={demolink}
                target="_blank"
                className=" hover:text-light-pink mr-4 md:text-lg underline underline-offset-4"
              >
                <span>demo</span>
              </a>
            ) : (
              <span className="text-gray-500 mr-4 md:text-lg">demo</span>
            )}
            {codelink ? (
              <a
                href={codelink}
                target="_blank"
                className=" hover:text-light-pink mr-4 md:text-lg underline underline-offset-4"
              >
                <span>code</span>
              </a>
            ) : (
              <span className="text-gray-500 mr-4 md:text-lg">code</span>
            )}
          </div>
        </div>

        <div className="text-xs flex gap-2 flex-wrap mt-4">
          {tags &&
            tags.map((item) => (
              <span className="p-1 bg-light-pink/60 rounded-lg px-2" key={item}>
                {item}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
