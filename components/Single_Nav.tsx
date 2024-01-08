import Link from "next/link";
import Image from "next/image";

const SingleNav = ({
  pageTitle,
  pageLink,
  pageIcon,
}: {
  pageTitle: string;
  pageLink: string;
  pageIcon: string;
}) => {
  return (
    <Link
      href={pageLink}
      className="flex-1 w-full h-full flex flex-col items-center justify-center gap-1 "
    >
      <div className="lg:hidden">
        <Image
          src={pageIcon}
          width={16}
          height={16}
          alt=""
          className="object-contain"
        />
      </div>
      <span className="hover:underline hover:decoration-secondary hover:underline-offset-8 hover:decoration-2">
        {pageTitle}
      </span>
    </Link>
  );
};

export default SingleNav;
