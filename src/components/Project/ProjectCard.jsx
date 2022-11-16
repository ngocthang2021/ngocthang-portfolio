import React from 'react';

import Button from '../Button/Button';
import { BiLoaderAlt } from 'react-icons/bi';

import './Project.scss';

function ProjectCard({ project }) {
	return (
		<div className='project__card'>
			<div className='project__card-image'>
				<img
					src={project.projectImage}
					alt={project.projectTitle}
				/>
			</div>
			<div className='project__card-info'>
				<h4 className='project__card-title'>{project.projectTitle}</h4>
				<p className='project__card-desc my-2'>{project.projectDescription}</p>

				<div className='project__card-credits'>
					{project.projectStatus === 'completed' ? (
						<>
							<Button className='outline'>
								<a
									target='_blank'
									rel='noreferrer'
									href={project.projectLink}
								>
									Visit Website
								</a>
							</Button>
							<Button className='outline'>
								<a
									target='_blank'
									rel='noreferrer'
									href={project.projectSource}
								>
									View Source
								</a>
							</Button>
						</>
					) : (
						<p className='text'>
							<BiLoaderAlt className='loading' />
							On going
						</p>
					)}
				</div>
			</div>
		</div>
	);
}

export default ProjectCard;
