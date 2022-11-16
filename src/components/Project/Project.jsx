import React from 'react';

import { projectData } from '../../data/projectData';

import './Project.scss';
import ProjectCard from './ProjectCard';

function Project() {
	return (
		<div className='project'>
			<div className='project__header'>
				<h2>PORTFOLIO</h2>
			</div>
			<div className='project__container'>
				{projectData.map((project, index) => (
					<ProjectCard
						key={index}
						project={project}
					/>
				))}
			</div>
		</div>
	);
}

export default Project;
