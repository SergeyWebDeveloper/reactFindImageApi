import React from 'react';

import AppBar from 'material-ui/AppBar';


export const Header = (props) =>{
	return(
		<header>
			<AppBar
				title={props.title}
			/>
		</header>
	)
};

Header.defaultProps = {
	title: 'Поиск фото'
};