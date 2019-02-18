import React,{Component} from 'react';
import ReactDom from 'react-dom';
import Display from './components/Display.js';
import Test from './test.js';
import getRouter from './router/router';

ReactDom.render(
	getRouter(),document.getElementById('root')
)