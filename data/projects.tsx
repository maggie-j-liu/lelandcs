import { ProjectProps } from "pages/projects";
import emoji from "./images/emoji.png";
import morse_code from "./images/morse_code.jpeg";
import baasil_website from "./images/baasil_website.jpg";
import clothes_color_changer from "./images/clothes_color_changer.png";
import parallax from "./images/parallax.png";
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
];
export default projectData;
