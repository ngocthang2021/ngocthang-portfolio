import React from 'react';

import { profile } from '../../config/Profile';

import Button from '../Button/Button';

import avatar from '../../assets/avatar-img.jpg';
import './Home.scss';

function Home() {
	return (
		<section
			className='page-full section home'
			id='#home'
		>
			<div className='home-container'>
				{/* Home Image */}
				<div className='home-img mb-4'>
					<img
						src={avatar}
						alt='Ngoc Thang'
					/>
				</div>

				{/* Home Intro */}
				<div className='home-content'>
					<h4>Hi there!</h4>
					<p>
						I am <span>Thắng</span>, a self-taught
						<span> Front-end Developer</span>.
					</p>
					<p>
						I enjoy building and creating websites with <span>impressive UI</span>, <span>animations</span> as well as{' '}
						delivering best <span>user experience</span> with clean and maintainable code.
					</p>

					{/* Home Buttons | Socials Links */}
					<div className='home-buttons mt-4'>
						{profile.map((profile, index) => {
							const Icon = profile.icon;

							return (
								<Button key={index}>
									<a
										href={profile.path}
										target='_blank'
										rel='noopener noreferrer'
									>
										<Icon size={28} />
									</a>
								</Button>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Home;
