import { AiOutlineGithub } from "react-icons/ai";
import { SiReplit } from "react-icons/si";
import { AiFillLinkedin } from "react-icons/ai";
import { FaCodepen } from "react-icons/fa";

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
    link: "https://github.com/meldy2503/",
  },
  {
    id: 2,
    title: "LINKEDIN",
    text: "Connect with me",
    icon: <AiFillLinkedin />,
    link: "https://www.linkedin.com/in/emelder-okafor-67b22122b",
  },

  {
    id: 3,
    title: "REPLIT",
    text: "Code and Build Apps",
    icon: <SiReplit />,
    link: "https://replit.com/@Meldy25",
  },
  {
    id: 4,
    title: "CODEPEN",
    text: "Reuse Code Snippets",
    icon: <FaCodepen />,
    link: "https://codepen.io/meldy25",
  },

 
];
