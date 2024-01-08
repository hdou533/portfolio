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
    address: "/pdfs/cv_sallydou.pdf",
    icon: "/file-invoice.png",
  },
  {
    id: "contact",
    title: "Contact",
    address: "/#contact",
    icon: "/comment-dots.png",
  },
];

export const experience = [
  {
    title: "Software Developer",
    organisation: "SmartLeader",
    year: "2022.06 - 2023.04",
    desc: "At Smartleader, my role encompasses maintaining and enhancing the Personal Leader Dashboard and MyTeamPulse app. I am responsible for tasks such as app maintenance, feature development, debugging, upgrades including PHP version updates, and unit testing.",
    tech: [
      "PHP",
      "JavaScript",
      "JQuery",
      "BootSstrap",
      "Unit Testing",
      "Git",
      "GitKraken",
      "MySQL",
      "MAMP",
      "Jira",
      "Scrum",
    ],
  },
  {
    title: "Web Developer",
    organisation: "New Zealand Business Association",
    year: "2022.03 - 2022.06",
    desc: "My responsibilities encompass crafting and building WordPress websites that align with these needs, ensuring a tailored online solution. ",
    tech: ["WordPress", "JavaScript", "CSS", "HTML", "Divi Theme"],
  },
  {
    title: "Digital Marketing Specialist (Volunteer Role)",
    organisation: "New Zealand Business Association",
    year: "2021.10 - 2022.03",
    desc: "I collaborate seamlessly with colleagues to orchestrate comprehensive digital marketing campaigns, bolstering our clients' digital presence and driving their business growth.",
    tech: [
      "Digital Marketing",
      "Google SEO",
      "Business Promotion",
      "Data Management",
    ],
  },
  {
    title: "IT Support",
    organisation: "Siaola - Lifewise NZ",
    year: "2021.03 - 2021.05",
    desc: "In my role, I provide technical support and training to SIAOLA, a Charitable Trust supporting education, health, and socio-development for Togan communities in New Zealand. I assist them in effectively using their Client Management System application. This involves guiding them in creating, editing, and managing data, handling media, and ensuring security measures. Through training sessions and ongoing support, I empower SIAOLA's team to confidently manage their system and make the most of their online presence.",
    tech: ["CMS", "Noted CMS", "Power BI", "Training"],
  },
  {
    title: "Master of Information Technology",
    organisation: "University of Auckland",
    year: "2019.07 - 2021.06",
    desc: "During my Master's degree in IT, I refined my skills, focusing on key areas such as data analysis, data modeling, and security. These specialized proficiencies have equipped me with a comprehensive understanding of crucial aspects within the IT landscape.",
    tech: ["Python", "scikit-learn", "Data Modeling"],
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
    title: "Donuts shop(underdeveloped)",
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
