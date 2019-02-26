import React from 'react';
import {BrowserRouter as Router,Route,Swich,Link} from 'react-router-dom';
import Home from '../pages/Home';
import Page1 from '../pages/Page1';
import Counter from '../pages/counter/Counter';
import UserInfo from '../pages/UserInfo/UserInfo';
import {Provider} from 'react-redux';
import store from '../redux/store'

const getRouter = () =>(
	<Provider store={store}>
		<Router>
			<div>
				<ul>
					<li><Link to="/">首页</Link></li>
					<li><Link to="/page1">Page1</Link></li>
					<li><Link to="/counter">Counter</Link></li>
					<li><Link to="/userInfo">UserInfo</Link></li>
				</ul>
				<Route exact path="" component={Home} />
				<Route path="/page1" component={Page1} />
				<Route path="/counter" component={Counter} />
				<Route path="/userInfo" component={UserInfo} />
			</div>
		</Router>
	</Provider>
)

export default getRouter