import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    c,
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: c,
        name: "C",
        type: "Frontend",
    },    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "React.js Developer",
        company_name: "Starbucks",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "March 2020 - April 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Tesla",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Awezsk',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Stock Pridiction using ML',
        description: 'Designed and applied Machine learning models to predict stock market trends. Employing linear regression decision trees random forest support vector machines and LSTM networks.',
        link: 'https://github.com/Awezsk/Stock-pridiction-using-ML',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Football Analysis using ML',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/Awezsk/Football-Analysis-using-ML',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Super Mario AI Model For Self Training and clearing stages',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/Awezsk/Super-Mario-AI-Model-For-Self-Training-and-clearing-stages',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Data Analysis for Loksabha Election 2024',
        description: 'Analysed Data of winning candidate seat for Lok sabha election 2024. In this project i have used Python Libraries like Pandas matplotlib seaborn and tools like Powerbi for Data representation',
        link: 'https://github.com/Awezsk/Loksabha-Election-2024',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'FreeScribe a ML project in react',
        description: 'Developed a Translation and transcription based website using react where i showed my skill of using API and Openai.',
        link: 'https://github.com/Awezsk/Free-Scribe-a-Ml-project-in-React',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Personal Portfolio Website using Three.js',
        description: 'Developed personal portfolio website using React that features a 3D island where visitors can navigate to learn about my projects. The website leverages several React libraries for functionality, Tailwind CSS for responsive design, and Three.js for rendering the 3D island. This interactive and visually appealing approach not only showcases my skills in web development but also offers an engaging experience for users. By integrating these technologies, I demonstrated my ability to create complex, user-friendly web applications.',
        link: 'https://github.com/Awezsk/Personal-Portfolio-Website-using-Three.js',
    }
];