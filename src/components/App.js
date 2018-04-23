import React,{Component} from 'react';

import {Header} from './Header';
import {Search} from './Search';

export class App extends Component {
	render(){
		return(
			<div>
				<Header/>
				<Search/>
			</div>
		)
	}
}

