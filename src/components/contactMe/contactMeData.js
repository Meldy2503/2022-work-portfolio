import { AiOutlineGithub } from "react-icons/ai";
import { SiReplit, SiCodewars } from "react-icons/si";
import { FiFigma } from "react-icons/fi";
import { FaCodepen, FaStackOverflow } from "react-icons/fa";

export const FormInputs = [
  {
    id: 1,
    type: "text",
    name: "name",
    idty: "name",
    placeholder: "Full name",
    value: "name",
  },
  {
    id: 2,
    type: "email",
    name: "email",
    idty: "email",
    placeholder: "Email",
    value: "email",
  },
];

export const MediaData = [
  {
    id: 1,
    title: "GITHUB",
    text: "Code Repositories",
    icon: <AiOutlineGithub />,
  },
  {
    id: 2,
    title: "STACK OVERFLOW",
    text: "Code Repositories",
    icon: <FaStackOverflow />,
  },
  {
    id: 3,
    title: "FIGMA",
    text: "Code Repositories",
    icon: <FiFigma />,
  },
  {
    id: 4,
    title: "CODEWARS",
    text: "Code Repositories",
    icon: <SiCodewars />,
  },
  {
    id: 5,
    title: "REPLIT",
    text: "Code Repositories",
    icon: <SiReplit />,
  },
  {
    id: 6,
    title: "CODEPEN",
    text: "Code Repositories",
    icon: <FaCodepen />,
  },
];
