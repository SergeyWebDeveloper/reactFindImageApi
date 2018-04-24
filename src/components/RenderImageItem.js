import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Zoom from 'material-ui/svg-icons/action/zoom-in';

export const RenderImageItem = ({info, handleOpenModalWindow}) => {
	return (
		<Fragment>
			<GridTile
				key={info.user_id}
				title={`Тэги: ${info.tags}`}
				subtitle={<span>Автор: <b>{info.user}</b></span>}
				actionIcon={
					<IconButton onClick={handleOpenModalWindow.bind(null, info.largeImageURL, info.tags)}>
						<Zoom color="white"/>
					</IconButton>
				}
			>
				<img src={info.largeImageURL} alt={info.tags}/>
			</GridTile>
		</Fragment>
	)
};

RenderImageItem.propTypes = {
	info: PropTypes.object.isRequired,
	handleOpenModalWindow: PropTypes.func
};