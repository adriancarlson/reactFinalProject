import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import Home from './components/Home';
import NotFound from './components/NotFound';
import '../node_modules/xwing-miniatures-font/dist/xwing-miniatures.css';
import './index.css';
import ShipList from './components/ShipList';

function App() {
	return (
		<React.Fragment>
			<Navbar bg='dark' variant='dark' sticky='top' expand='true' className='flex-md-nowrap'>
				<Navbar.Brand as={NavLink} to='/' className='ms-3'>
					<i className='xwing-miniatures-font xwing-miniatures-font-helmet-rebel'></i>
					Star Wars Squad Builder
				</Navbar.Brand>
				<Nav></Nav>
			</Navbar>
			<div className='bg-light sidebar'>
				<div className='position-sticky pt-3'>
					<Nav className='flex-column'>
						<Nav.Item>
							<Nav.Link as={NavLink} to='/all'>
								<span className='icon-size'>
									<i className='xwing-miniatures-font xwing-miniatures-font-first-player-1-outline'></i>
									<strong> All Factions</strong>
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
						<ShipList />
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
