import React from 'react';

import Navbar from '../components/Navbar/Navbar';

function Layout({ children }) {
	return (
		<div className='wrapper'>
			<Navbar />
			<div className='page-full'>{children}</div>
		</div>
	);
}

export default Layout;
