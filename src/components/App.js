import React,{PureComponent} from 'react';

import {Header} from './Header';
import {Search} from './Search';

export class App extends PureComponent {
	render(){
		return(
			<div>
				<Header/>
				<Search/>
			</div>
		)
	}
}

