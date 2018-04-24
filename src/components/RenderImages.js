import React, {PureComponent, Fragment} from 'react';
import {GridList} from 'material-ui/GridList';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import _ from 'lodash';


import {RenderImageItem} from './RenderImageItem';

export class RenderImages extends PureComponent {
	state = {
		open: false,
		imagePopup: null,
		tagImage: null
	};
	handleOpen = (pathImg, tag) => {
		this.setState({
			open: true,
			imagePopup: pathImg,
			tagImage: tag
		});
	};
	handleClose = () => {
		this.setState({open: false});
	};

	render() {
		const {images} = this.props;
		const actions = [
			<FlatButton label="Закрыть" primary={true} onClick={this.handleClose}/>
		];
		return (
			<Fragment>
				<GridList cols={3}>
					{_.map(images, (item) => {
						return <RenderImageItem handleOpenModalWindow={this.handleOpen} key={item.id} info={item}/>
					})
					}
				</GridList>
				<Dialog
					actions={actions}
					modal={false}
					open={this.state.open}
					onRequestClose={this.handleClose}
				>
					<img
						src={this.state.imagePopup}
						alt={this.state.tagImage}
						style={{width: '100%'}}
					/>
				</Dialog>
			</Fragment>
		)
	}
};