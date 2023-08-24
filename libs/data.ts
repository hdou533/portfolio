type navLinks = {
    id: string;
    title: string;
    address: string;
}[]

export const navLinks = [
    {
        id: "home",
        title: "Home",
        address: "/"
    },
    {
        id: "about",
        title: "About",
        address: "/about"
    },
    {
        id: "resume",
        title: "Resume",
        address: "/resume"
    },
    {
        id: "contact",
        title: "Contact",
        address: "/contact"
    },
]

export const images = [
    '/hobby_2.JPG',
    '/hobby_1.JPG',
    '/hobby_3.JPG',
    '/hobby_4.JPG',
    '/hobby_5.JPG',
    '/hobby_6.JPG',
    '/hobby_7.JPG',
]


export const experience = [
    {
        title: "Software Developer",
        organisation: "SmartLeader",
        year: "2022.06 - 2023.04",
        desc: "At Smartleader, my role encompasses maintaining and enhancing the Persoanl Leader Dashboard and MyTeamPulse app. I am responsible for tasks such as app maintenance, feature development, debugging, upgrades including PHP version updates, and unit testing.",
        tech: ["PHP", "JavaScript", "JQuery","BootSstrap","Unit Testing", "Git", "GitKraken", "MySQL","MAMP","Jira","Scrum"]
    },
    {
        title: "Digital Marketing Specialist (Volunteer Role)",
        organisation: "New Zealand Business Association",
        year: "2021.10 - 2022.06",
        desc: "I play a multifaceted role that involves interacting closely with clients to grasp their unique requirements. My responsibilities encompass crafting and building WordPress websites that align with these needs, ensuring a tailored online solution. Additionally, I collaborate seamlessly with colleagues to orchestrate comprehensive digital marketing campaigns, bolstering our clients' digital presence and driving their business growth.",
        tech: ["WordPress", "JavaScript","CSS","HTML","Digital Marketing","Google SEO"],
    },
    {
        title: "IT Support",
        organisation: "Siaola - Lifewise NZ",
        year: "2021.03 - 2021.05",
        desc: "In my role, I provide technical support and training to SIAOLA, a Charitable Trust supporting education, health, and socio-development for Togan communities in New Zealand. I assist them in effectively using their Content Management System (CMS) application. This involves guiding them in creating, editing, and managing data, handling media, and ensuring security measures. Through training sessions and ongoing support, I empower SIAOLA's team to confidently manage their system and make the most of their online presence.",
        tech: ["CMS", "Noted CMS", "Power BI", "Training"]
    },
    {
        title: "Master of Information Technology",
        organisation: "University of Auckland",
        year: "2019.07 - 2021.06",
        desc: "During my Master's degree in IT, I refined my skills, focusing on key areas such as data analysis, data modeling, and security. These specialized proficiencies have equipped me with a comprehensive understanding of crucial aspects within the IT landscape.",
        tech: ["Python", "scikit-learn", "Data Modeling"]
    },
]

export const skills = [
    {
        title: 'javascript',
        img: '/skills/javascript.png',
    },
    {
        title: 'react',
        img: '/skills/reactjs.png',
    },
    {
        title: 'nextjs',
        img: '/skills/nextjs.svg',
    },
    {
        title: 'tailwind',
        img: '/skills/tailwind.png',
    },
    {
        title: 'github',
        img: '/skills/github.svg',
    },
    {
        title: 'css',
        img: '/skills/css.png',
    },
    {
        title: 'html5',
        img: '/skills/html.png',
    },
    {
        title: 'git',
        img: '/skills/git.png',
    },
    {
        title: 'nodejs',
        img: '/skills/nodejs.png',
    },
    {
        title: 'php',
        img: '/skills/php.png',
    },
    {
        title: 'postgresql',
        img: '/skills/postgresql.png',
    },
    {
        title: 'jira',
        img: '/skills/jira.png',
    },
]


export const projects = [
    {
        title: "PizzaLover",
        desc: "A e-commerce website made by Next.js and Tailwind",
        demolink: "https://pizza-shop-blue.vercel.app/",
        codelink: "https://github.com/hdou533/pizza-shop",
        thumbnail: "/projects/pizzalover.png",
        tech: ["Next.js", "Tailwind"]
    },
    {
        title: "My Portfolio",
        desc: "Welcome to my personal portfolio website, a digital canvas where I showcase my journey, projects, and skills.",
        demolink: "https://portfolio-hdou533.vercel.app/",
        codelink: "https://github.com/hdou533/portfolio",
        thumbnail: "/projects/portfolio-logo.png",
        tech: ["Next.js", "Tailwind", "EmaiJS"]
    },



]


export const hobby = [
    {
        title: "garden",
        desc: "Wandering Around in the Garden!",
        img: "/about/watering-plants.png",
        color: 'red',
    },
    {
        title: "pottery",
        desc: "See my clay work",
        img: "/about/pottery-1.png",
        color: 'blue',
    },
    {
        title: "anime",
        desc: "My Favorite Anime!",
        img: "/about/otaku.png",
        color: 'red',
    },
]
