import React, {Fragment,PureComponent} from 'react';
import TextField from 'material-ui/TextField';
import axios from 'axios';

import {SelectVisibleImage} from './SelectVisibleFoto';
import {RenderImages} from './RenderImages';

export class Search extends PureComponent {
	state = {
		search: '',
		keyAPI: '8771405-07c286bc5c0e1192d6878ae2e',
		urlAPI: 'https://pixabay.com/api/',
		images: [],
		amountImage: 15
	};

	handleChangeSearchInput = (e, value) => {
		this.setState({
			search: value
		}, () => {
			axios.get(`${this.state.urlAPI}?key=${this.state.keyAPI}&q=${this.state.search}&per_page=${this.state.amountImage}`)
				.then(res => this.setState({images: res.data.hits}))
				.catch(err => console.error(err));
		})
	};

	handleChangeVisibleImage = (e, index, value) => {
		this.setState({
			amountImage: value
		})
	};

	render() {
		return (
			<Fragment>
				<TextField
					fullWidth={true}
					floatingLabelText='Введите название'
					onChange={this.handleChangeSearchInput}
				/>
				<SelectVisibleImage
					visibleImage={this.state.amountImage}
					handleChangeSelect={this.handleChangeVisibleImage}
				/>
				<RenderImages images={this.state.images} />
			</Fragment>
		)
	}
}