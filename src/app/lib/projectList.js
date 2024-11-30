import binarImg from "@/app/assets/binar-car-screenshot.png";
import huddleImg from "@/app/assets/huddle-screenshot.png";
import notifImg from "@/app/assets/notification-screenshot.png";
import frontImg from "@/app/assets/front-mentor-3.jpg";
import irfanImg from "@/app/assets/mirfan-page.png";
import newsImg from "@/app/assets/news.png";
import loopImg from "@/app/assets/loopstudio.png";
import bentoImg from "@/app/assets/bento-grid.png";

const projectList = [
  {
    url: "https://mirfanwebdev.github.io/frontend-mentor-news/",
    image: newsImg,
    title: "News Page - Frontendmentor.io",
    details:
      "Challenge from Frontend Mentor to make news homepage, build with NextJS and TypeScript",
    stacks: ["NextJS", "TypeScript", "Tailwind"],
    gitUrl: "https://github.com/mirfanwebdev/frontend-mentor-news",
  },
  {
    url: "https://loopstudio-landing-frontendmentor.vercel.app/",
    image: loopImg,
    title: "Loopstudio Landing Page - Frontendmentor.io",
    details:
      "Challenge from Frontend Mentor to make responsive landing page, build with VueJS",
    stacks: ["VueJS"],
    gitUrl: "https://github.com/mirfanwebdev/loopstudio-landing-frontendmentor",
  },
  {
    url: "https://mirfanwebdev.github.io/frontendmentor-huddle-landingpage/",
    image: huddleImg,
    title: "Huddle Landing Page - Frontendmentor.io",
    details:
      "Challenge from Frontend Mentor to make responsive landing page, build with Tailwind",
    stacks: ["HTML", "Tailwind"],
    gitUrl: "https://github.com/mirfanwebdev/frontendmentor-huddle-landingpage",
  },
  {
    url: "https://23001028-14-kel2-car-rental-platinum-customer.vercel.app/",
    image: binarImg,
    title: "Car Rental - Customer",
    details:
      "Web app for renting cars. Login and register your account, view and search your desired car, and set your renting duration. Create order and pick your bank payment.",
    stacks: ["Vite", "React", "Redux Toolkit", "Ant Design", "Vercel"],
    gitUrl:
      "https://github.com/jogisyamantha/23001028_14_kel2_car-rental_platinum_customer",
  },
  // {
  //   title: "Restoku - Restaurant Admin",
  //   details:
  //     "Admin dashboard web application for managing restaurant menus. Login and create your account, view sales data, and manage your menu. Add, edit and delete the menu.",
  //   stacks: ["Vite", "React", "Redux Toolkit", "Tailwind", "Vercel"],
  // },
  {
    url: "",
    image: irfanImg,
    title: "M. Irfan's portofolio site",
    details: "My personal portofolio site build with NextJS and Vercel",
    stacks: ["NextJS", "CSS-modules", "Vercel"],
    gitUrl: "https://github.com/mirfanwebdev/mirfan-page",
  },
  {
    url: "https://mirfanwebdev.github.io/bento-grid/",
    image: bentoImg,
    title: "Bento Grid - Frontendmentor.io",
    details:
      "Challenge from Frontend Mentor to make responsive grid layout, build with Less CSS",
    stacks: ["HTML", "Less CSS"],
    gitUrl: "https://github.com/mirfanwebdev/bento-grid",
  },
  {
    url: "https://mirfanwebdev.github.io/frontendmentor-notification/",
    image: notifImg,
    title: "Notification Page - Frontendmentor.io",
    details:
      "Challenge from Frontend Mentor to make notification page, build with JavaScript",
    stacks: ["HTML", "JavaScript"],
    gitUrl: "https://github.com/mirfanwebdev/frontendmentor-notification",
  },
  {
    url: "https://www.frontendmentor.io/profile/mirfanwebdev",
    image: frontImg,
    title: "Frontendmentor.io - M. Irfan challenge solutions",
    details:
      "Solutions for Frontend Mentor challenges. View solutions from design challenge and implementation with determined tech stacks",
  },
];

export default projectList;
