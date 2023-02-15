import { EducationType, ExperienceType, SkillsType } from "./types";

export const socialMediaLinks = [
  {
    id: 1,
    label: "Github",
    icon: "fa-brands fa-github",
    url: "https://www.github.com/aytacmalkoc",
  },
  {
    id: 2,
    label: "Npm",
    icon: "fa-brands fa-npm",
    url: "https://www.npmjs.com/~aytacmalkoc",
  },
  {
    id: 3,
    label: "Twitter",
    icon: "fa-brands fa-twitter",
    url: "https://www.twitter.com/jrd_aytacmalkoc",
  },
  {
    id: 4,
    label: "Instagram",
    icon: "fa-brands fa-instagram",
    url: "https://www.instagram.com/aytacmalkoc35",
  },
  {
    id: 5,
    label: "Email",
    icon: "fa-solid fa-envelope",
    url: "mailto:aytacmalkoc@protonmail.com",
  },
];

export const experiences: ExperienceType[] = [
  {
    id: 1,
    title: "Full Stack Developer",
    slug: "upperearth-digital-full-stack-developer",
    company: "upperearth digital",
    duration: "August 2021 - Dec 2021",
    description:
      "I have carried out many corporate works in the design agency that I am a partner of. During this time, I learned a lot about company management and customer relations.",
  },
  {
    id: 2,
    title: "Developer Intern",
    slug: "fikir-isler-developer-intern",
    company: "Fikir İşler",
    duration: "Sep 2018 - June 2019",
    description:
      "During my internship, I took part in many projects. I provided support for frontend design and backend management. I developed myself in human relations.",
  },
];

export const educations: EducationType[] = [
  {
    id: 1,
    title: "Isparta University of Applied Sciences",
    duration: "2019 - 2021",
    description: "Computer Programming Pr. - Cumulative GPA: 2.95/4",
    type: "University",
    file: {
      title: "Download Transcript",
      url: "/files/transcript.pdf",
    },
  },
  {
    id: 2,
    title: "Mersinli Vocational and Technical Anatolian High School",
    duration: "2014 - 2019",
    description: "Information Technologies/Web Programming Pr. - GS: 69.73/100",
    type: "High School",
  },
];

export const skills: SkillsType = {
  frontend: [
    {
      id: 1,
      name: "React",
      image: "/images/skills/react-logo.png",
    },
    {
      id: 2,
      name: "Vue",
      image: "/images/skills/vue-logo.png",
    },
    {
      id: 3,
      name: "Wordpress",
      image: "/images/skills/wordpress-logo.png",
    },
  ],
  backend: [
    {
      id: 4,
      name: "Laravel",
      image: "/images/skills/laravel-logo.png",
    },
    {
      id: 5,
      name: "Express",
      image: "/images/skills/express-logo.png",
    },
    {
      id: 6,
      name: "Strapi",
      image: "/images/skills/strapi-logo.png",
    },
  ],
  database: [
    {
      id: 7,
      name: "MySQL",
      image: "/images/skills/mysql-logo.png",
    },
    {
      id: 8,
      name: "MongoDB",
      image: "/images/skills/mongodb-logo.png",
    },
  ],
};
