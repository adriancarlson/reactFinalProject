import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import Home from './components/Home';
import NotFound from './components/NotFound';
import '../node_modules/xwing-miniatures-font/dist/xwing-miniatures.css';
import './index.css';
import ShipList from './components/ShipList';
import About from './components/About';
import Contact from './components/Contact';

function App() {
	
	return (
		<React.Fragment>
			<Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
				<Navbar.Brand as={NavLink} to='/' className='ms-3'>
					<i className='xwing-miniatures-font xwing-miniatures-font-helmet-rebel'></i>
					Star Wars Squad Builder
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='me-auto'></Nav>
					<Nav>
						<Nav.Link as={NavLink} to='/about' className='me-3'>
							About
						</Nav.Link>
						<Nav.Link as={NavLink} to='/contact' className='me-3'>
							Contact
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
			<div className='bg-light sidebar'>
				<div className='position-sticky pt-3'>
					<Nav className='flex-column'>
						<Nav.Item>
							<Nav.Link as={NavLink} to='/all'>
								<span className='faction-icon-size'>
									<i className='xwing-miniatures-font xwing-miniatures-font-first-player-1-outline'></i>
									<strong> All Factions</strong>
								</span>
							</Nav.Link>
							<Nav.Link as={NavLink} to='/empire'>
								<span className='faction-icon-size'>
									<i className='xwing-miniatures-font xwing-miniatures-font-empire'></i>
									<strong> Galatic Empire</strong>
								</span>
							</Nav.Link>
						</Nav.Item>
					</Nav>
				</div>
			</div>
			<div className='main'>
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route path='/all'>
						<ShipList shipFilter='all' />
					</Route>
					<Route path='/empire'>
						<ShipList shipFilter='empire' />
					</Route>
					<Route path='/about'>
						<About />
					</Route>
					<Route path='/contact'>
						<Contact />
					</Route>
					<Route path='*'>
						<NotFound />
					</Route>
				</Switch>
			</div>
		</React.Fragment>
	);
}

export default App;
