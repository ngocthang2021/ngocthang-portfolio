import React, { useEffect, useRef } from 'react';

import { BsArrowUpShort } from 'react-icons/bs';
import { useLocation } from 'react-router-dom';

import './ScrollTopButton.scss';

function ScrollTopButton() {
	const buttonRef = useRef();
	const { pathname } = useLocation();

	const scrollTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};
	useEffect(() => {
		const buttonVisible = () => {
			const buttonEl = buttonRef.current;
			window.scrollY > 100 ? buttonEl.classList.add('visible') : buttonEl.classList.remove('visible');
		};
		window.addEventListener('scroll', buttonVisible);
		scrollTop();
		return () => {
			window.removeEventListener('scroll', buttonVisible);
		};
	}, [pathname]);

	return (
		<div
			ref={buttonRef}
			className='scroll-btn'
			onClick={scrollTop}
		>
			<BsArrowUpShort />
		</div>
	);
}

export default ScrollTopButton;
