export interface Project {
	img: string;
	title: string;
	description: string;
	link: string;
	repo: string;
}

const Projects: Project[] = [
	{
		img: "/",
		title: "Weatherly",
		description:
			"A fullstack weather app made with Reactjs, Expressjs and Typescript.",
		link: "",
		repo: "https://github.com/rafaVls/Fullstack-Weatherly"
	},
	{
		img: "/",
		title: "Personal Website",
		description:
			"This is a website made using Next.js, a static site generator; and Ghost, a headless cms for the blog section.",
		link: "",
		repo: "https://github.com/rafaVls/personal-website"
	}
];

export default Projects;
