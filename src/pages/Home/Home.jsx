import React from 'react';

import { profileSocial } from '../../data/profileData';

import Button from '../../components/Button/Button';

import avatar from '../../assets/avatar-img.jpg';
import './Home.scss';

function Home() {
	return (
		<div className='page-full'>
			<section className='section home'>
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
							I am <span className='highlight--pink'>Thắng</span>, a self-taught
							<span className='highlight--pink'> Front-end Developer</span>.
						</p>
						<p>
							I enjoy <span className='highlight--blue'>building</span> and{' '}
							<span className='highlight--blue'>creating</span> websites with{' '}
							<span className='highlight--pink'>impressive UI</span>,{' '}
							<span className='highlight--pink'>animations</span> as well as{' '}
							<span className='highlight--blue'>delivering</span> best{' '}
							<span className='highlight--pink'>user experience</span> with clean and maintainable code.
						</p>
						{/* Home Buttons | Socials Links */}
						<div className='home-buttons mt-4'>
							{profileSocial.map((profile, index) => {
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
		</div>
	);
}

export default Home;
