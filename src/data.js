import { v4 as uuidv4 } from "uuid";
import ecommerce from "./assets/portfolio-images/e-commerce.png";
import coffeeshop from "./assets/portfolio-images/coffee-shop.png";
import manageLandingPage from "./assets/portfolio-images/manage-landing-page.png";
import travelJournal from "./assets/portfolio-images/travel-journey.png";
import bookmarkLandingPage from "./assets/portfolio-images/bookmark_landing_page.png";
import expensesChartComponent from "./assets/portfolio-images/expenses_chart_component.png";
import interactiveCommentsSection from "./assets/portfolio-images/interactive_comments_section.png";
import restCountriesApi from "./assets/portfolio-images/rest_countries_api.png";
import roomHomepageMaster from "./assets/portfolio-images/room_homepage_master.png";
import chatAppIllustration from "./assets/portfolio-images/chat_app_illustration.png";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import css3Icon from "./assets/icons/css3.svg";
import htmlIcon from "./assets/icons/html-5.svg";
import javascriptIcon from "./assets/icons/javascript.svg";
import reactIcon from "./assets/icons/react.svg";
import tailwindcssIcon from "./assets/icons/tailwindcss.svg";
import gitIcon from "./assets/icons/git.svg";

const portfolioData = {
  projects: [
    {
      projectName: "e-commerce product page",
      url: "https://wuzgood98.github.io/e-commerce-product-page/",
      repository: "https://github.com/wuzgood98/e-commerce-product-page",
      img: ecommerce,
      id: uuidv4(),
    },
    {
      projectName: "coffee shop",
      url: "https://wuzgood98.github.io/Coffee-Shop-Website/",
      repository: "https://github.com/wuzgood98/Coffee-Shop-Website",
      img: coffeeshop,
      id: uuidv4(),
    },
    {
      projectName: "manage landing page",
      url: "https://wuzgood98.github.io/manage-landing-page/",
      repository: "https://github.com/wuzgood98/manage-landing-page",
      img: manageLandingPage,
      id: uuidv4(),
    },
    {
      projectName: "travel journal",
      url: "https://travel-journal98.netlify.app/",
      repository: "https://github.com/wuzgood98/travel-journal",
      img: travelJournal,
      id: uuidv4(),
    },
    {
      projectName: "room homepage master",
      url: "https://room-homepage-master98.netlify.app/",
      repository: "https://github.com/wuzgood98/room-homepage-master",
      img: roomHomepageMaster,
      id: uuidv4(),
    },
    {
      projectName: "rest countries api",
      url: "https://rest-countries-api98.netlify.app/",
      repository: "https://github.com/wuzgood98/rest-countries-api",
      img: restCountriesApi,
      id: uuidv4(),
    },
    {
      projectName: "interactive comments section",
      url: "https://interactive-comments-section98.netlify.app/",
      repository: "https://github.com/wuzgood98/interactive-comments-section",
      img: interactiveCommentsSection,
      id: uuidv4(),
    },
    {
      projectName: "expenses chart component",
      url: "https://expenses-chart-component98.netlify.app/",
      repository: "https://github.com/wuzgood98/expenses-chart-component",
      img: expensesChartComponent,
      id: uuidv4(),
    },
    {
      projectName: "bookmark landing page",
      url: "https://bookmark-landing-page98.netlify.app/",
      repository: "https://github.com/wuzgood98/bookmark-landing-page",
      img: bookmarkLandingPage,
      id: uuidv4(),
    },
    {
      projectName: "chat app css illustration master",
      url: "https://wuzgood98.github.io/chat-app-css-illustration-master/",
      repository:
        "https://github.com/wuzgood98/chat-app-css-illustration-master",
      img: chatAppIllustration,
      id: uuidv4(),
    },
  ],
  techStack: [
    {
      id: uuidv4(),
      iconName: "HTML5",
      iconType: htmlIcon,
    },
    {
      id: uuidv4(),
      iconName: "CSS3",
      iconType: css3Icon,
    },
    {
      id: uuidv4(),
      iconName: "JavaScript",
      iconType: javascriptIcon,
    },
    {
      id: uuidv4(),
      iconName: "Git",
      iconType: gitIcon,
    },
    {
      id: uuidv4(),
      iconName: "React",
      iconType: reactIcon,
    },
    {
      id: uuidv4(),
      iconName: "Tailwindcss",
      iconType: tailwindcssIcon,
    },
  ],
  socials: [
    {
      id: uuidv4(),
      iconName: faLinkedin,
      url: "https://www.linkedin.com/in/gideon-addo-355779224/",
    },
    {
      id: uuidv4(),
      iconName: faGithub,
      url: "https://github.com/wuzgood98",
    },
    {
      id: uuidv4(),
      iconName: faTwitter,
      url: "https://www.twitter.com/wuz_goood",
    },
  ],
  nav: [
    {
      route: "home",
      path: "/",
      id: uuidv4(),
    },
    {
      route: "about",
      path: "/about",
      id: uuidv4(),
    },
    {
      route: "portfolio",
      path: "/portfolio",
      id: uuidv4(),
    },
    {
      route: "contact",
      path: "/contact",
      id: uuidv4(),
    },
  ],
};

export default portfolioData;
