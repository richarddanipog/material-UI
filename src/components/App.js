import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import theme from './ui/Theme';
import Header from './ui/Header';
import Footer from './ui/Footer';
import LandingPage from './LandingPage';
import Services from './Services';
import CustomSoftware from './CustomSoftware';
import MobileApps from './MobileApps';
import Websites from './Websites';
import Revolution from './Revolutions';
import About from './About';
import Contact from './Contact';

const App = () => {
	const [value, setValue] = useState(0);
	const [selectedIndex, setSelectedIndex] = useState(0);
	return (
		<ThemeProvider theme={theme}>
			<Router>
				<Header
					value={value}
					selectedIndex={selectedIndex}
					setValue={setValue}
					setSelectedIndex={setSelectedIndex}
				/>
				<Switch>
					<Route
						exact
						path="/"
						render={(props) => (
							<LandingPage
								{...props}
								setValue={setValue}
								setSelectedIndex={setSelectedIndex}
							/>
						)}
					/>
					<Route
						exact
						path="/services"
						render={(props) => (
							<Services
								{...props}
								setValue={setValue}
								setSelectedIndex={setSelectedIndex}
							/>
						)}
					/>
					<Route
						exact
						path="/customsoftware"
						render={(props) => (
							<CustomSoftware
								{...props}
								setValue={setValue}
								setSelectedIndex={setSelectedIndex}
							/>
						)}
					/>
					<Route
						exact
						path="/mobileapps"
						render={(props) => (
							<MobileApps
								{...props}
								setValue={setValue}
								setSelectedIndex={setSelectedIndex}
							/>
						)}
					/>
					<Route
						exact
						path="/websites"
						render={(props) => (
							<Websites
								{...props}
								setValue={setValue}
								setSelectedIndex={setSelectedIndex}
							/>
						)}
					/>
					<Route
						exact
						path="/revolution"
						render={(props) => (
							<Revolution
								{...props}
								setValue={setValue}
								setSelectedIndex={setSelectedIndex}
							/>
						)}
					/>
					<Route
						exact
						path="/about"
						render={(props) => (
							<About
								{...props}
								setValue={setValue}
								setSelectedIndex={setSelectedIndex}
							/>
						)}
					/>
					<Route
						exact
						path="/contact"
						render={(props) => (
							<Contact
								{...props}
								setValue={setValue}
								setSelectedIndex={setSelectedIndex}
							/>
						)}
					/>
					<Route
						exact
						path="/estimate"
						component={() => <div style={{ height: '2000px' }}>Estimate</div>}
					/>
				</Switch>
				<Footer setValue={setValue} setSelectedIndex={setSelectedIndex} />
			</Router>
		</ThemeProvider>
	);
};

export default App;
