import { EducationType, ExperienceType, SkillsType } from "./types";

import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import { DiNpm } from "react-icons/di";

export const socialMediaLinks = [
  {
    id: 1,
    label: "Github",
    icon: AiOutlineGithub,
    url: "https://www.github.com/aytacmalkoc",
  },
  {
    id: 2,
    label: "Npm",
    icon: DiNpm,
    url: "https://www.npmjs.com/~aytacmalkoc",
  },
  {
    id: 3,
    label: "Twitter",
    icon: AiOutlineTwitter,
    url: "https://www.twitter.com/jrd_aytacmalkoc",
  },
  {
    id: 4,
    label: "Instagram",
    icon: AiOutlineInstagram,
    url: "https://www.instagram.com/aytac.dev",
  },
  {
    id: 5,
    label: "Email",
    icon: AiOutlineMail,
    url: "mailto:aytacmalkoc@protonmail.com",
  },
];

export const experiences: ExperienceType[] = [
  {
    id: 1,
    title: "Full Stack Developer",
    slug: "attelia-oral-and-dental-health-center",
    company: "Attelia",
    duration: "March 2023 - Present",
    description:
      "I take part in the development and maintenance of company websites and applications and the development of new projects.",
  },
  {
    id: 2,
    title: "Full Stack Developer",
    slug: "upperearth-digital-full-stack-developer",
    company: "upperearth digital",
    duration: "August 2021 - Dec 2022",
    description:
      "I have carried out many corporate works in the design agency that I am a partner of. During this time, I learned a lot about company management and customer relations.",
  },
  {
    id: 3,
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
