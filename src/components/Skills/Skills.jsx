import React from 'react';

import { skillsTech, skillsAbilities } from '../../config/skills';

import './Skills.scss';

function SkillsList() {
	return (
		<div className='skills'>
			{/* Skill Tech */}
			<div className='skills__tech'>
				<h4 className='skills-title'>My Skills</h4>
				<div className='skills__tech-container'>
					{skillsTech.map((skillItem, index) => (
						<SkillsTechCard
							key={index}
							skillItem={skillItem}
						/>
					))}
				</div>
			</div>

			{/* Skill Abilities */}
			<div className='skills__ability'>
				<h4 className='skills-title'>What Can I do?</h4>
				<div className='skills__ability-container'>
					{skillsAbilities.map((skillItem, index) => (
						<SkillsAbilityCard
							key={index}
							skillItem={skillItem}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

// Skill Tech Card Component
const SkillsTechCard = ({ skillItem }) => {
	return (
		<div className='skills__tech-card'>
			<div className='skills__tech-card__icon'>
				<img
					src={skillItem.icon}
					alt='icon'
				/>
			</div>
		</div>
	);
};

// Skill Ability Card Component
const SkillsAbilityCard = ({ skillItem }) => {
	const SkillsIcon = skillItem.icon;
	return (
		<div className='skills__ability-card'>
			<h4>
				<SkillsIcon size={28} />
				<span>{skillItem.title}</span>
			</h4>
			<p>{skillItem.description}</p>
		</div>
	);
};

export default SkillsList;
