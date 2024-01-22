type navLinks = {
  id: string;
  title: string;
  address: string;
  icon: string;
}[];

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
    address: "/pdfs/v2-cv-sallydou.pdf",
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
    title: "react",
    img: "/skills/reactjs.png",
  },
  {
    title: "nextjs",
    img: "/skills/nextjs.svg",
  },
  {
    title: "tailwind",
    img: "/skills/tailwind.png",
  },
  {
    title: "mongodb",
    img: "/skills/mongodb.png",
  },
  {
    title: "javascript",
    img: "/skills/javascript.png",
  },
  {
    title: "css",
    img: "/skills/css.png",
  },
  {
    title: "html5",
    img: "/skills/html.png",
  },
  {
    title: "nodejs",
    img: "/skills/nodejs.png",
  },
  {
    title: "php",
    img: "/skills/php.png",
  },

  {
    title: "postgresql",
    img: "/skills/postgresql.png",
  },
  {
    title: "jquery",
    img: "/skills/jquery.png",
  },
  {
    title: "bootstrap",
    img: "/skills/bootstrap.png",
  },
  {
    title: "github",
    img: "/skills/github.svg",
  },
  {
    title: "git",
    img: "/skills/git.png",
  },
  {
    title: "typescript",
    img: "/skills/typescript.png",
  },
  {
    title: "python",
    img: "/skills/python.png",
  },

  {
    title: "vscode",
    img: "/skills/vscode.png",
  },
  {
    title: "jira",
    img: "/skills/jira.png",
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
