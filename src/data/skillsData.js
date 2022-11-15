import htmlIcon from '../assets/svg-icons/html-5-logo.svg';
import cssIcon from '../assets/svg-icons/css-3-logo.svg';
import sassIcon from '../assets/svg-icons/sass-svg.svg';
import javascriptIcon from '../assets/svg-icons/js-svg.svg';
import reactIcon from '../assets/svg-icons/react-svg.svg';
import tailwindcssIcon from '../assets/svg-icons/tailwindcss-icon-svg.svg';
import figmaIcon from '../assets/svg-icons/figma-svg.svg';
import photoshopIcon from '../assets/svg-icons/photoshop-svg.svg';
import gitIcon from '../assets/svg-icons/git-svg.svg';
import githubIcon from '../assets/svg-icons/github-svg.svg';
import vercelIcon from '../assets/svg-icons/logo-vercel-svg.svg';
import netlifyIcon from '../assets/svg-icons/netlify-svg.svg';

import { AiOutlineDeploymentUnit, AiOutlineCode, AiOutlineLayout, AiOutlineRocket } from 'react-icons/ai';

// Skills Technology
export const skillsTech = [
	{ skill: 'HTML', icon: htmlIcon },
	{ skill: 'CSS', icon: cssIcon },
	{ skill: 'Javascript', icon: javascriptIcon },
	{ skill: 'Sass', icon: sassIcon },
	{ skill: 'Tailwindcss', icon: tailwindcssIcon },
	{ skill: 'React', icon: reactIcon },
	{ skill: 'Photoshop', icon: photoshopIcon },
	{ skill: 'Figma', icon: figmaIcon },
	{ skill: 'Github', icon: githubIcon },
	{ skill: 'Git', icon: gitIcon },
	{ skill: 'Vercel', icon: vercelIcon },
	{ skill: 'Netlify', icon: netlifyIcon },
];

// Skills Abilities
export const skillsAbilities = [
	{
		icon: AiOutlineCode,
		title: 'Web Development',
		description:
			'Developing website features with clean and maintainable code with modern Javascript(ES6) syntax as well as ReactJS.',
	},
	{
		icon: AiOutlineLayout,
		title: 'Responsive Webiste',
		description:
			'Building dynamic, repsonsive websites that are accessible on multiple devices for better user experience.',
	},
	{
		icon: AiOutlineDeploymentUnit,
		title: 'Modern Technology',
		description:
			'Applying libraries/languages such as ReactJS, TailwindCSS or SASS/SCSS to create beautiful, impressive and friendly UI.',
	},
	{
		icon: AiOutlineRocket,
		title: 'Deployment',
		description:
			'Deploying websites on multiple platforms such as Vercel, Netlify to leverage caching and firewalls at the edge',
	},
];
