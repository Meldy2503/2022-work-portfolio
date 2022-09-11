export const ProjectData = [
  {
    id: 1,
    img: require("../../assests/foodie-img.PNG"),
    web: "https://online-foodie.netlify.app/",
    onClick: function alertPop() {
      alert(
        "Foodie is a private repository, you can contact me personally for details of the source code"
      );
    },
    name: "Foodie",
    about:
      "This project is still ongoing and it's a website that will allow entrepreneurs into food sales to create and customize an online store for their business.",
    features:
      "This fully responsive website will contain features that will allow registered clients to effectively manage their online store, customize their online store, create food menus, take orders from customers online, accept online payments and monitor deliveries of their products(food). ",
    tech: ["React", "HTML", "JavaScript", "Styled-Comp.", "MUI"],
  },
  {
    id: 2,
    img: require("../../assests/nail-B.png"),
    web: "https://nail-boutique.netlify.app/",
    git: "https://github.com/Meldy2503/nail-boutique",
    name: "The Nail Boutique",
    about:
      "Nail Boutique is a beauty brand which offers nail, hair and skin care services to the public.",
    features:
      " This website was built to bridge booking challenges and increase productivity. I utilised React/Context API to pass data to children components and it includes features like location selection, service types, appointment scheduling and reservations.",
    tech: ["React", "HTML", "JavaScript", "Styled-Comp.", "MUI"],
  },
  {
    id: 3,
    img: require("../../assests/windec.png"),
    web: "https://meldy2503.github.io/Windec/",
    git: "https://github.com/Meldy2503/Windec",
    name: "Windec",
    about:
      "Windec is a front for an advertising and web development company which renders digital services to small and large scale businesses. ",
    features:
      "This is a multipage and responsive website interconnected using react-router and built with frontend libraries for an improved and user friendly interface",
    tech: ["HTML", "JavaScript", "React", "Styled - Comp.", "MUI"],
  },
  {
    id: 4,
    img: require("../../assests/oceanica1.png"),
    web: "https://oceanica-employees.netlify.app/",
    git: "https://github.com/Meldy2503/crud-app",
    name: "Oceanica",
    about:
      " An open source CRUD app designed to store, edit and delete employee's details for improved accessibility.",
    features:
      " I utilised JS DOM manipulation to come up with this application and a user can comfortably save, edit and retrieve data even after the browser window is closed because data entered is stored in the local storage.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
  },
  {
    id: 5,
    img: require("../../assests/crypto.png"),
    web: "https://coinic-crypto.netlify.app/",
    git: "https://github.com/Meldy2503/crypto-app",
    name: "Coinic",
    about:
      "An open source crypto website that displays updated information about crypto currencies",
    features:
      "I utilized API integration in this project to fetch data and update the crypto information. I also incoporated Context API, dark and light modes and some React librarires for an improved user experience ",
    tech: ["HTML", "JavaScript", "React", "CSS"],
  },
];
