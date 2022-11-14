import React from 'react';

import SkillsList from '../../components/Skills/Skills';

import './Resume.scss';

function Resume() {
	return (
		<section className='resume'>
			<div className='resume__header'>
				<h2 className='resume__title mb-2'>Portfolio</h2>
				<p className='resume__text'>Here is what I've archived in my learning process.</p>
			</div>

			<SkillsList />
		</section>
	);
}

export default Resume;
