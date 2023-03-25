import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  microsoft,
  ebay,
  augmentum,
  jingoal,
  extensionForIG,
  guess,
  tripguide,
  threejs,
  accor,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full stack MTS II",
    company_name: "eBay",
    icon: ebay,
    iconBg: "#383E56",
    date: "Nov 2018 - Now",
    points: [
      "Design and implement eBay Feeds Self-Service infrastucture to improve BUs' efficiency of maintaining Feeds item quality.",
      "Indentify E2E issues and gaps and provide short-term and long-term solution.",
      "As an ATL, work closely with BUs, PMs to fully understand the requirement and distribute tasks to team to ensure on-time delivery.",
      "Mentor team members to build a strong dev team. Particpating in code reviews and keep high code quality bar for the team.",
    ],
  },
  {
    title: "Senior Software Engineer",
    company_name: "Jingoal Inc. (Startup)",
    icon: jingoal,
    iconBg: "#E6DEDD",
    date: "April 2016 - Nov 2018",
    points: [
      "Designed new micro service architecture to support 300+M companies on Jingoal SAAS platform, including backend storage, RESTful gateway, service discovery, security model.",
      "Implemented Jingoal FrontEnd from scratch using ReactJS framework. Drive React common control library, CSS standard and coding style to improve coding quality and readability.",
      "Lead Jingoal FrontEnd team (team size 15) to build a high quality feature deliver team and introduce scrum based align development process.",
      "Designed and implemented customized React form components, including dynamic form builder, form input and form query. Contribute to Github.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Microsoft (Seattle)",
    icon: microsoft,
    iconBg: "#383E56",
    date: "Feb 2012 - April 2016",
    points: [
      "Worked on Azure resource management to deliver high availability and reliability resource provision features in 20+ Azure data centers. Key design is leveraging messaging queue system and atomic job operation.",
      "Designed and implemented the multi-regional data replication service based on Azure and ensures data across regions won’t be out of sync.",
      "Shipped Microsoft display Ad SDK to support MRAID Ads on Windows, WinPhone, iOS and Android for the first time.",
      "Worked on Microsoft Workflow cloud service to support multi tenant customers. ",
    ],
  },
  {
    title: "Software Develop Engineer",
    company_name: "Microsoft (China)",
    icon: microsoft,
    iconBg: "#E6DEDD",
    date: "Jan 2011 - Feb 2012",
    points: [
      "Improved the Visual Studio Workflow designer by using WPF and MVVM design patterns.",
      "Drove the stress/memory initiative to debug memory leak issues in the products.",
    ],
  },
  {
    title: "Senior Software Engineer",
    company_name: "Accor Service China",
    icon: accor,
    iconBg: "#E6DEDD",
    date: "May 2008 - Jan 2011",
    points: [
      "Worked on a CMS system including the web, WinForm, remote servicing and database.",
      "Worked closely with customers and onsite help to meet requirements by deploying system and configuration.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Augmentum Inc.",
    icon: augmentum,
    iconBg: "#E6DEDD",
    date: "Jun 2006 - May 2008",
    points: [
      "Worked on the B/S structure system of a bank loan project based on Windows Workflow Foundation.",
      "Led the automated testing and coverage initiative to deliver high quality features.",
    ],
  },
];

const projects = [
  {
    name: "Extension For Instagram",
    description:
      "A Chrome extension to enpower instagram web experience, including upload/download photos, direct messaging, picture in picture and more. By 2022, there are 200k+ users.",
    tags: [
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "Chrome extension",
        color: "green-text-gradient",
      }
    ],
    image: extensionForIG,
    source_code_link: "https://github.com/linweigao/instagram.web/",
    reference_link: "https://blog.ainfluencer.com/instagram-chrome-extensions/#2-Extension-For-Instagram",
    reference_text: "Click here to see other's comments",
  },
  {
    name: "Guess what (Game)",
    description:
      "A flutter app to test your brain with funny ICON hint, which is available on web, IOS, Android. Unforunately there are not many installs, but I loved that.",
    tags: [
      {
        name: "Dart",
        color: "blue-text-gradient",
      },
      {
        name: "Flutter",
        color: "green-text-gradient",
      },
    ],
    image: guess,
    source_code_link: "https://github.com/linweigao/guess",
    reference_text: "Click to play it now.",
    reference_link: "https://linweigao.github.io/guess/#/",
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
];

export { services, technologies, experiences, testimonials, projects };
