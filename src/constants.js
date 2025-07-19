//  Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';




// Education Section Logo's
import Collegelogo from './assets/education_logo/College_logo.png';
import Schoollogo from './assets/education_logo/School_logo.png';

// Project Section Logo's
import Mern_app from './assets/projects_logo/Mern_app.png';
import Chatbot from './assets/projects_logo/Chatbot.png';
import Loan_calculator from './assets/projects_logo/Loan_calculator.png';
import Memory_card from './assets/projects_logo/Memory_card.png';
import Recipe_img from './assets/projects_logo/Recipe_img.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },


  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
    ],
  },
];

  
  export const education = [
    {
      id: 0,
      img: Collegelogo,
      school: "ABES Engineering college, Ghaziabad",
      date: "Nov 2022 - July 2026",
      grade: "7.5 CGPA(till 5th semester)",
      desc: "I am currently pursuing Btech in Electronics and Communication and will be graduated in July 2026.",
      degree: "Bachelor of Technology - Btech",
    },
    {
      id: 1,
      img: Schoollogo,
      school: "Green Field Public School, Govindpuram",
      date: "Apr 2021 - March 2022",
      grade: "79%",
      desc: "I completed my class 12 education from Green Field Public School, Govindpuram, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Information Practices.",
      degree: "CBSE(XII) - PCM with Information Practices",
    },
    {
      id: 2,
      img: Schoollogo,
      school: "Green Field Public School, Govindpuram",
      date: "Apr 2019 - March 2020",
      grade: "86.6%",
      desc: "I completed my class 10 education from Green Field Public School, Govindpuram, under the CBSE board, where I studied Science with Computer.",
      degree: "CBSE(X), Science with Computer Application",
    },
  ];
  
  export const projects = [
  {
    id: 0,
    title: "MERN App",
    description: "Developed a full-stack web app handling 100+ user inputs daily, securely storing data in MongoDB.",
    image: Mern_app,
    tags: ["HTML", "CSS", "JavaScript", "React JS","MongoDb"],
    github: "https://github.com/shruti-mohanty/mern-app",
    webapp: "",
  },
  {
    id: 1,
    title: "Chatbot",
    description: "Developed an interactive AI-powered chatbot using React and integrated Gemini API to generate intelligent real-time responses.",
    image: Chatbot,
    tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/shruti-mohanty/Ai-chatbot.git",
    webapp: "https://shruti-ai-chatbot.netlify.app/",
  },
  {
    id: 2,
    title: "Loan Calculator",
    description: "Built a dynamic loan calculator that computes monthly EMIs, interest, and total repayment for 50+ test cases.",
    image: Loan_calculator,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/shruti-mohanty/Loan-Calculator.git",
    webapp: "https://shruti-loan-calculator.netlify.app",
  },
  {
    id: 3,
    title: "Memory Card Game",
    description: "A fun memory card game where players flip cards to find matching pairs, built using HTML, CSS, and JavaScript.",
    image: Memory_card,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/shruti-mohanty/myprojects.git",
    webapp: "https://shruti-memory-card-game.netlify.app",
  },
  {
    id: 4,
    title: "Recipe App",
    description: "A simple recipe app that shows ingredients and instructions by fetching data from an API when you search for a food name.",
    image: Recipe_img,
    tags: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/shruti-mohanty/Recipe_App.git",
    webapp: "https://shruti-recipe-website.netlify.app/",
  }
];
