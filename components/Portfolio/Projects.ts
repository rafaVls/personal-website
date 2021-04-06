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
		link: "",
		repo: "https://github.com/rafaVls/personal-website"
	}
];

export default Projects;
