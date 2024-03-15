type navLinks = {
  id: string;
  title: string;
  address: string;
  icon: string;
}[];

const SIZE = {
  small: 48,
  large: 60,
};

export const navLinks = [
  {
    id: "home",
    title: "Home",
    address: "/",
    icon: "/house-chimney-blank.png",
  },
  {
    id: "about",
    title: "About",
    address: "/#about",
    icon: "/user-robot.png",
  },
  {
    id: "resume",
    title: "Resume",
    address: "/pdfs/cv-sally-202403.pdf",
    icon: "/file-invoice.png",
  },
  {
    id: "contact",
    title: "Contact",
    address: "/#contact",
    icon: "/comment-dots.png",
  },
];

export const skills = [
  {
    title: "nextjs",
    img: "/skills/nextjs.svg",
    size: SIZE.large,
  },
  {
    title: "tailwind",
    img: "/skills/tailwind.png",
    size: SIZE.large,
  },
  {
    title: "nodejs",
    img: "/skills/nodejs.png",
    size: SIZE.large,
  },
  {
    title: "mongodb",
    img: "/skills/mongodb.png",
    size: SIZE.large,
  },
  {
    title: "react",
    img: "/skills/reactjs.png",
    size: SIZE.small,
  },
  {
    title: "javascript",
    img: "/skills/javascript.png",
    size: SIZE.large,
  },
  {
    title: "css",
    img: "/skills/css.png",
    size: SIZE.large,
  },
  {
    title: "html5",
    img: "/skills/html.png",
    size: SIZE.large,
  },

  {
    title: "php",
    img: "/skills/php.png",
    size: SIZE.large,
  },

  {
    title: "postgresql",
    img: "/skills/postgresql.png",
    size: SIZE.large,
  },
  {
    title: "jquery",
    img: "/skills/jquery.png",
    size: SIZE.small,
  },
  {
    title: "bootstrap",
    img: "/skills/bootstrap.png",
    size: SIZE.large,
  },
  {
    title: "github",
    img: "/skills/github.svg",
    size: SIZE.small,
  },
  {
    title: "git",
    img: "/skills/git.png",
    size: SIZE.large,
  },
  {
    title: "typescript",
    img: "/skills/typescript.png",
    size: SIZE.large,
  },
  {
    title: "python",
    img: "/skills/python.png",
    size: SIZE.large,
  },

  {
    title: "vscode",
    img: "/skills/vscode.png",
    size: SIZE.large,
  },
  {
    title: "jira",
    img: "/skills/jira.png",
    size: SIZE.small,
  },
];

export const companies = [
  {
    title: "smartleader",
    img: "/Smartleader-team-development-academy-logo.jpg",
  },
  // {
  //   title: "nzba",
  //   img: "/nzba.png",
  // },
];

export const projects = [
  {
    title: "Donuts shop",
    desc: "A fullstack project developed with Next.js, mongodb, nextuth and Tailwind",
    demolink: "https://donut-shop-eight.vercel.app/",
    codelink: "https://github.com/hdou533/donut-shop",
    thumbnail: "/projects/donuts-shop.png",
    tech: ["Next.js", "MongoDB", "NextAuth", "Tailwind"],
  },
  {
    title: "My Portfolio",
    desc: "Welcome to my personal portfolio website, a static website where I showcase my journey, projects, and skills.",
    demolink: "https://portfolio-hdou533.vercel.app/",
    codelink: "https://github.com/hdou533/portfolio",
    thumbnail: "/projects/portfolio-logo.png",
    tech: ["Next.js", "Tailwind", "React", "EmaiJS"],
  },
];
