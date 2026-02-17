import {
  teach,
  lecture,
  innovate,
  bassIcon,
  teachingTechStack1,
  teachingTechStack2,
  teachingTechStack3,
  teachingTechStack4,
  teachingTechStack5,
  lecturingTechStack1,
  lecturingTechStack2,
  lecturingTechStack3,
  lecturingTechStack4,
  lecturingTechStack5,
  playingBassTechStack1,
  playingBassTechStack2,
  playingBassTechStack3,
  playingBassTechStack4,
  playingBassTechStack5,
  MoreTechStack1,
  MoreTechStack2,
  MoreTechStack3,
  MoreTechStack4,
  MoreTechStack5,
  mech,
  mba,
  entrepeneur,
  bass,
  teaching,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Expercience",
  },
  {
    id: "teaching",
    title: "Teaching",
  },
  {
    id: "lecturing",
    title: "Lecturing",
  },
  {
    id: "playing-bass",
    title: "Playing Bass",
  },
  {
    id: "more",
    title: "More",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "Science And Math Teacher", icon: teach },
  { title: "Tech & Safety Lecturer", icon: lecture },
  { title: "Entrepreneur", icon: innovate },
  { title: "Bass Player", icon: bassIcon },
];

export const teachingServices = [
  { title: "Teaching 1", icon: teachingTechStack1 },
  { title: "Teaching 2", icon: teachingTechStack2 },
  { title: "Teaching 3", icon: teachingTechStack3 },
  { title: "Teaching 4", icon: teachingTechStack4 },
  { title: "Teaching 5", icon: teachingTechStack5 },
];

export const lecturingServices = [
  { title: "Lecturing 1", icon: lecturingTechStack1 },
  { title: "Lecturing 2", icon: lecturingTechStack2 },
  { title: "Lecturing 3", icon: lecturingTechStack3 },
  { title: "Lecturing 4", icon: lecturingTechStack4 },
  { title: "Lecturing 5", icon: lecturingTechStack5 },
];

export const playingBassServices = [
  { title: "Playing Bass 1", icon: playingBassTechStack1 },
  { title: "Playing Bass 2", icon: playingBassTechStack2 },
  { title: "Playing Bass 3", icon: playingBassTechStack3 },
  { title: "Playing Bass 4", icon: playingBassTechStack4 },
  { title: "Playing Bass 5", icon: playingBassTechStack5 },
];

export const moreServices = [
  { title: "More 1", icon: MoreTechStack1 },
  { title: "More 2", icon: MoreTechStack2 },
  { title: "More 3", icon: MoreTechStack3 },
  { title: "More 4", icon: MoreTechStack4 },
  { title: "More 5", icon: MoreTechStack5 },
];

export const experiences = [
  {
    title: "Mechanical Engineering",
    company_name: "BSc. from The Technion",
    icon: mech,
    iconBg: "#161329",
    date: "",
    points: [
      "Experienced mechanical engineer and project manager, with over 20 years of experience managing technological sections & branches.",
      "Specializing in project management, engineering development, testing, quality assurance and industrial manufacturing."
    ],
  },
  {
    title: "Business Administration",
    company_name: "Masters from The Technion",
    icon: mba,
    iconBg: "#161329",
    date: "",
    points: [
      "An experienced executive leader, managed large scale operations, driving results.",
      "Positively impacting the organization's delivarables, while susutaining a culture of excellence."
    ],
  },
  {
    title: "Entrepreneurship & Creativity",
    company_name: "Masters from Colman University",
    icon: entrepeneur,
    iconBg: "#161329",
    date: "",
    points: [
      "Innovative Engineer, specializing in Finding Creative Solutions for Complex problems.",
    ],
  },
  {
    title: "Bass Playing",
    company_name: "Playing with bands",
    icon: bass,
    iconBg: "#161329",
    date: "",
    points: [
      "Playing the bass guitar for more than 5 years.",
      "Played with various bands (covers & original materials).",
    ],
  },
  {
    title: "Teaching Science & Math",
    company_name: "Teaching at elementary school",
    icon: teaching,
    iconBg: "#161329",
    date: "",
    points: [
      "A Science and Math school teacher, who knows how to blend frontals with laboratories & various exercises.",
      "Administering students for different science competitions and more.",
    ],
  },
];
