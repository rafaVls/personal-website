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
		img: "/images/projects/weatherly.png",
		title: "Weatherly",
		description:
			"A fullstack weather app made with Reactjs, Expressjs and Typescript.",
		stack: ["Expressjs", "React", "Typescript"],
		link: "",
		repo: "https://github.com/rafaVls/Fullstack-Weatherly"
	},
	{
		img: "/images/projects/homepage.png",
		title: "Personal Website",
		description:
			"This is a website made using Next.js, a static site generator; and Ghost, a headless cms for the blog section.",
		stack: ["Node", "Nextjs", "Ghost CMS", "Typescript"],
		link: "/",
		repo: "https://github.com/rafaVls/personal-website"
	},
	{
		img: "/images/projects/calculator.png",
		title: "Calculator app",
		description:
			"This app is a solution to the Frontend Mentor calculator challenge. Some of the math functionailty is still a work in progress.",
		stack: ["HTML", "CSS", "Javascript"],
		link: "https://gifted-shaw-56597d.netlify.app/",
		repo: "https://github.com/rafaVls/calculator-app"
	}
];

export default Projects;
