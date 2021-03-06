import { ProjectProps } from "pages/projects";
import emoji from "./images/emoji.png";
import morse_code from "./images/morse_code.jpeg";
import baasil_website from "./images/baasil_website.jpg";
import clothes_color_changer from "./images/clothes_color_changer.png";
import parallax from "./images/parallax.png";
import hungergame from "./images/hungergame.png";
import tina_pokedex from "./images/tina_pokedex.jpeg";
import william_pokedex from "./images/william_pokedex.png";
const projectData: ProjectProps[] = [
  {
    title: "A reinventing of the government: The Emoji Movie",
    description:
      "Simulates the government by tweeting lines of the emoji movie one line at a time.",
    link: "https://twitter.com/sandwich1289",
    code: "https://replit.com/@JoshuaYan3/Twitter-Bot#main.py",
    imageSrc: emoji,
    creators: [
      {
        name: "Joshua",
        link: "https://twitter.com/sandwich1289",
      },
      {
        name: "Lin",
      },
      {
        name: "Anthony",
      },
    ],
  },
  {
    title: "Hackanator",
    description: "Converts English to Morse code and Morse code to English.",
    imageSrc: morse_code,
    creators: [
      {
        name: "Baasil",
      },
    ],
  },
  {
    title: "Website",
    description: "Website thing we did during 12/1/21 club.",
    imageSrc: baasil_website,
    link: "https://website-1.baasilchaudry2.repl.co",
    code: "https://replit.com/@BaasilChaudry2/Website-1",
    creators: [
      {
        name: "Baasil",
      },
    ],
  },
  {
    title: "This is not the test",
    description: "It's mostly about the stories of my own experience",
    creators: [
      {
        name: "Tina",
        link: "https://www.instagram.com/tina1383ram",
      },
    ],
    link: "https://mediumbluetriangularprogrammer.tinaramezani.repl.co",
    code: "https://replit.com/@TinaRamezani/MediumblueTriangularProgrammer",
  },
  {
    title: "Clothes Color Changer",
    description:
      "What my project does is change each pixels of a tshirt into a color that you want to have. I first started by trying to make it into a jframe. However this would not work so I had to change it into a program that can download the changed image and then show it.",
    imageSrc: clothes_color_changer,
    creators: [
      {
        name: "Jacob",
      },
    ],
  },
  {
    title: "Parallax Website",
    description: (
      <>
        My project is a parallax website, which means that there is an image in
        the background that stays fixed even if you scroll, and it cycles
        between different images after passing through a different section. It
        works using mostly <code>background-attachment:</code>; and{" "}
        <code>{"<div>"}</code>s. Took me more hours than it should've. Hmm...
        also I did it on VScode then just transferred it to replit, so it's
        kinda scuffed.
      </>
    ),
    imageSrc: parallax,
    creators: [
      {
        name: "Chelsea",
      },
    ],
    link: "https://hackathon-project.chelseazhao1.repl.co",
    code: "https://replit.com/@ChelseaZhao1/hackathon-project",
  },
  {
    title: "Hungergame.io",
    description:
      "Our project is a game where users can feed their avatars and answer trivia questions to learn more about world hunger. We made our interactive game using python.",
    imageSrc: hungergame,
    creators: [
      {
        name: "Ameya",
      },
      {
        name: "Sophia",
      },
    ],
    link: "https://replit.com/@SophiaHuang7/PapayawhipUnwrittenStructure#main.py",
    code: "https://replit.com/@SophiaHuang7/PapayawhipUnwrittenStructure#main.py",
  },
  {
    title: "Pokedex",
    description: "It tells facts and what it is about",
    imageSrc: tina_pokedex,
    creators: [
      {
        name: "Tina",
        link: "https://www.instagram.com/tina1383ram",
      },
    ],
    link: "https://pokekots.tinaramezani1.repl.co",
    code: "https://replit.com/@TinaRamezani/Pokekots",
  },
  {
    title: "Pokedex",
    description:
      "My project just shows a bunch of pokemon with their type. I made it using replit with html, css, and javascript.",
    imageSrc: william_pokedex,
    creators: [
      {
        name: "William",
      },
    ],
    link: "https://pokedex.pancakeuser.repl.co/",
    code: "https://replit.com/@pancakeuser/Pokedex#script.js",
  },
];
export default projectData;
