export interface Project {
  img: string;
  title: string;
  description: string;
  stack: string[];
  link: string;
  repo: string;
}

const Projects: Project[] = [
  {
    img : "/images/projects/typefight.png",
    title : "Typefight",
    description :
        "Typefight is a typing game where you get a random sentence, type it in, and compare your time with a global highscore",
    stack : [
      "Python", "Flask", "Docker", "PostgreSQL", "HTML", "CSS", "JavaScript"
    ],
    link : "https://typefight.herokuapp.com/",
    repo : "https://gitlab.com/rafaVls/typefight"
  },
  {
    img : "/images/projects/weatherly.png",
    title : "Weatherly",
    description :
        "A fullstack weather app made with Reactjs, Flask and TypeScript.",
    stack : [ "React", "TypeScript", "Python", "Flask", "CSS" ],
    link : "https://weatherly-sand.vercel.app",
    repo : "https://github.com/rafaVls/Weatherly"
  },
  {
    img : "/images/projects/homepage.png",
    title : "Personal Website",
    description :
        "This is a website made using Next.js, a static site generator; and Ghost, a headless cms for the blog section.",
    stack : [ "Node", "Nextjs", "Ghost CMS", "TypeScript" ],
    link : "/",
    repo : "https://github.com/rafaVls/personal-website"
  },
  {
    img : "/images/projects/calculator.png",
    title : "Calculator app",
    description :
        "This app is a solution to the Frontend Mentor calculator challenge. Some of the math functionailty is still a work in progress.",
    stack : [ "HTML", "CSS", "Typescript" ],
    link : "https://calculator-site.vercel.app/",
    repo : "https://github.com/rafaVls/calculator_site"
  }
];

export default Projects;
