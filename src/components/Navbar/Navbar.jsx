import React, { useState, useEffect, useRef } from 'react';

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

import './Navbar.scss';

const navRoutes = [
	{ id: '#home', element: 'Home' },
	{ id: '#about', element: 'About' },
	{ id: '#resume', element: 'Resume' },
	{ id: '#contact', element: 'Contact' },
];

function Navbar() {
	const headerRef = useRef();
	const [nav, setNav] = useState(false);

	// Reveal Header onScroll
	useEffect(() => {
		const headerReavel = () => {
			const headerEl = headerRef.current;
			const headerHeight = headerEl.getBoundingClientRect().height;

			const revealPoint = headerHeight * 2;

			window.scrollY > revealPoint ? headerEl.classList.add('fixed') : headerEl.classList.remove('fixed');
		};

		window.addEventListener('scroll', headerReavel);

		return () => {
			window.removeEventListener('scroll', headerReavel);
		};
	}, []);

	return (
		<header
			ref={headerRef}
			className='header'
		>
			<nav className='nav'>
				<a
					href='/'
					className='nav-logo'
				>
					<span>nnt</span>.dev
				</a>

				{/* Nav Toggle Button */}
				<div
					className='nav-toggle'
					onClick={() => setNav(!nav)}
				>
					{nav ? <AiOutlineClose size={32} /> : <AiOutlineMenu size={32} />}
				</div>

				{/* Nav Menu */}
				<ul className={`nav-menu ${nav ? 'active' : ''}`}>
					{navRoutes.map((route, index) => (
						<li
							key={index}
							className='nav-item'
							onClick={() => setNav(false)}
						>
							<a
								href={route.id}
								className='nav-link'
							>
								{route.element}
							</a>
						</li>
					))}
					{/* <li
						className='nav-item'
						onClick={() => setNav(false)}
					>
						<a
							href='/'
							className='nav-link'
						>
							Home
						</a>
					</li>
					<li className='nav-item'>
						<a
							href='/'
							className='nav-link'
						>
							About
						</a>
					</li>
					<li className='nav-item'>
						<a
							href='/'
							className='nav-link'
						>
							Works
						</a>
					</li>
					<li className='nav-item'>
						<a
							href='/'
							className='nav-link'
						>
							Contact
						</a>
					</li> */}
				</ul>
			</nav>
		</header>
	);
}

export default Navbar;
