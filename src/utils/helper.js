import {
  FaDiagramProject,
  FaEnvelope,
  FaFacebookF,
  FaGithub,
  FaHouse,
  FaLinkedinIn,
  FaRenren,
  FaUser,
  FaInstagram,
} from "react-icons/fa6";
import {
  ChatApp,
  CodePenClone,
  FreshJuiceUI,
  ImageSharing,
  OpenAI,
  PixabayClone,
  PortfolioFirebase,
  RestaurantClone,
  SocialMedia,
} from "../assets";

export const Socials = [
  {
    id: `facebook-${Date.now()}`,
    Icon: FaFacebookF,
    uri: "https://www.facebook.com/profile.php?id=100070398460161",
    color: "#1877F2",
  },
  {
    id: `linkedin-${Date.now()}`,
    Icon: FaLinkedinIn,
    uri: "https://www.linkedin.com/in/sai-kumar-101764252/",
    color: "#0072b1",
  },
  {
    id: `github-${Date.now()}`,
    Icon: FaGithub,
    uri: "https://github.com/SAIKUMAR039",
    color: "#fff",
  },
  {
    id: `instagram-${Date.now()}`,
    Icon: FaInstagram,
    uri: "https://www.instagram.com/saikumar_034/",
    color: "#ff0000",
  },
];

export const Menus = [
  {
    id: `home-${Date.now()}`,
    Icon: FaHouse,
    uri: "#home",
    name: "Home",
  },
  {
    id: `about-${Date.now()}`,
    Icon: FaUser,
    uri: "#about",
    name: "About",
  },
  {
    id: `skills-${Date.now()}`,
    Icon: FaRenren,
    uri: "#skills",
    name: "Skills",
  },
  {
    id: `projects-${Date.now()}`,
    Icon: FaDiagramProject,
    uri: "#projects",
    name: "Projects",
  },
  {
    id: `contact-${Date.now()}`,
    Icon: FaEnvelope,
    uri: "#contact",
    name: "Contact",
  },
];

export const ProjectsData = [
  {
    id: `food-${Date.now()}`,
    name: "Student-Utils",
    imgSrc: RestaurantClone,
    gitURL: "https://student-utils.vercel.app/",
  },
  {
    id: `codepen-${Date.now()}`,
    name: "Weather Dashboard",
    imgSrc: CodePenClone,
    gitURL: "https://weather-dashboard-opal.vercel.app/",
  },
  {
    id: `openai-${Date.now()}`,
    name: "Bitcoin-price-prediction",
    imgSrc: OpenAI,
    gitURL: "https://github.com/SAIKUMAR039/Bitcoin-price-prediction",
  },
  {
    id: `chatapp-${Date.now()}`,
    name: "File Sharing",
    imgSrc: ChatApp,
    gitURL: "https://file-share-seven.vercel.app/",
  },
  {
    id: `imageSharing-${Date.now()}`,
    name: "Stop Watch",
    imgSrc: ImageSharing,
    gitURL: "https://stop-watch-tan-psi.vercel.app/",
  },
  {
    id: `pixabayclone-${Date.now()}`,
    name: "Shopie",
    imgSrc: PixabayClone,
    gitURL: "https://shopi-e.000webhostapp.com/",
  },
  {
    id: `freshjuiceui-${Date.now()}`,
    name: "c_movie_tickets",
    imgSrc: FreshJuiceUI,
    gitURL: "https://github.com/SAIKUMAR039/c_movie_tickets",
  },
  {
    id: `socialmedia-${Date.now()}`,
    name: "Portfolio UI",
    imgSrc: SocialMedia,
    gitURL: "https://portfolio-sai-kumar.vercel.app/",
  },
  {
    id: `portfoliofirebase-${Date.now()}`,
    name: "Resume Builder",
    imgSrc: PortfolioFirebase,
    gitURL: "https://resume-buolder.vercel.app/",
  },
];
