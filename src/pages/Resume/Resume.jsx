import React from 'react';

import SkillsList from '../../components/Skills/Skills';
import Project from '../../components/Project/Project';

import { TfiArrowDown } from 'react-icons/tfi';

import './Resume.scss';

function Resume() {
	return (
		<section className='resume'>
			<div className='resume__header'>
				<h2 className='resume__title mb-2'>Portfolio</h2>
				<p className='resume__text'>Here is what I've archived in my learning process.</p>
				<div className='resume__arrow mt-4'>
					<TfiArrowDown size={36} />
				</div>
			</div>

			<SkillsList />
			<Project />
		</section>
	);
}

export default Resume;
