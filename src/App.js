import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './layout/Layout';
import { pageRoutes } from './config/routes';

import './App.scss';

function App() {
	return (
		<Router>
			<Routes>
				{pageRoutes.map((route, index) => {
					const Page = route.element;
					let PageLayout = Layout;

					return (
						<Route
							key={index}
							path={route.path}
							element={
								<PageLayout>
									<Page />
								</PageLayout>
							}
						/>
					);
				})}
			</Routes>
		</Router>
	);
}

export default App;
