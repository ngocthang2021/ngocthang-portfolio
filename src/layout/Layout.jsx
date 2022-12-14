import React from 'react';

import Navbar from '../components/Navbar/Navbar';
import ScrollTopButton from '../components/ScrollTopButton/ScrollTopButton';

function Layout({ children }) {
	return (
		<div className='wrapper'>
			<Navbar />
			<div>{children}</div>
			<ScrollTopButton />
		</div>
	);
}

export default Layout;
