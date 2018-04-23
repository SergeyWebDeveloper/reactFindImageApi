import React from 'react';

import AppBar from 'material-ui/AppBar';
import {Search} from './Search';

export const Header = (props) =>{
	return(
		<header>
			<AppBar
				title={props.title}
			/>
			<Search/>
		</header>
	)
};

Header.defaultProps = {
	title: 'Поиск фото'
};