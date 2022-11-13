import React from 'react';

import Layout from './layout/Layout';

import Home from './components/Home/Home';
import About from './components/About/About';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';

import './App.scss';

function App() {
	return (
		<>
			<Layout>
				<Home />
				<About />
				<Resume />
				<Contact />
			</Layout>
		</>
	);
}

export default App;
