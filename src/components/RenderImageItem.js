import React from 'react';
import PropTypes from 'prop-types';

export const RenderImageItem = ({info}) => {
	return(
		<div>
			<img src={info.largeImageURL} alt=""/>
		</div>
	)
};

RenderImageItem.propTypes = {
	info: PropTypes.object.isRequired
};