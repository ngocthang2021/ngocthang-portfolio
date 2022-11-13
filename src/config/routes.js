import Home from '../components/Home/Home';
import About from '../components/About/About';
import Resume from '../components/Resume/Resume';
import Contact from '../components/Contact/Contact';

export const pageRoutes = [
	{ path: '/', element: Home },
	{ path: '/about', element: About },
	{ path: '/resume', element: Resume },
	{ path: '/contact', element: Contact },
];
