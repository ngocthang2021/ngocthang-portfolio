import React, { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../components/Button/Button';

import './About.scss';

function About() {
	const navigate = useNavigate();

	return (
		<Fragment>
			<section className='section about'>
				<div className='section__header'>
					<h2 className='section__heading'>About Me</h2>
					<h2 className='section__heading--bg'>About</h2>
				</div>
				<div className='section__container about__content'>
					<p>
						I am <span className='highlight--pink'>Nguyễn Ngọc Thắng</span>, a newbie Front-end Developer, based in Thu
						Duc City, Ho Chi Minh City.
					</p>
					<p>
						I usually looking for inspirations from Dribbble, Pinterest or learning new things, new skills and
						techniques from Youtube or reading blogs.
					</p>
				</div>
			</section>
			<section className='section object'>
				<div className='section__header'>
					<h2 className='section__heading'>Objectives</h2>
					<h2 className='section__heading--bg'>Objectives</h2>
				</div>
				<div className='section__container'>
					<p className='highlight--small object__quote mb-4'>
						<span>&ldquo;</span>Great things starts from small beginnings<span>&rdquo;</span>
					</p>

					<p>I am aiming to become a proficient Front-end Developer in the future.</p>

					<p>
						But at the current, I am looking for an <span className='highlight--pink'>Intern FE</span> position with the
						aim of enhancing and improving my <span className='highlight--blue'>coding</span> as well as{' '}
						<span className='highlight--blue'>logical thinking</span> skills.
					</p>
					<p>
						I enjoy learning new things, I want to apply my knowledges that I've gained to make special things that can
						impress the users and customers.
					</p>
					<div className='object__buttons mt-4'>
						<Button className={'outline'}>
							<a
								href='../../assets/avatar-img.jpg'
								download='Nguyen_Ngoc_Thang_CV'
								target='_blank'
							>
								Download CV
							</a>
						</Button>
						<Button
							className='bg'
							onClick={() => navigate('/resume')}
						>
							<span>Explore More</span>
						</Button>
					</div>
				</div>
			</section>
		</Fragment>
	);
}

export default About;
