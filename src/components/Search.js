import React, {Fragment, PureComponent} from 'react';
import TextField from 'material-ui/TextField';

import {SelectVisibleImage} from './SelectVisibleFoto';
import {RenderImages} from './RenderImages';
import {Pagination} from './Pagination';
import {callAPI} from '../api';

export class Search extends PureComponent {
	state = {
		search: '',
		images: [],
		amountImage: 15,
		totalHits: null,
		page: 1
	};

	requestCallApi = (search,amountImage,page) => {
		callAPI(search, amountImage,page)
			.then(res => this.setState({
				images: res.data.hits,
				totalHits: res.data.totalHits
			}))
			.catch(err => console.error(err));
	};



	handleChangeSearchInput = (e, value) => {
		this.setState({
			search: value
		}, () => {
			if (value.trim() === '') {
				return this.setState({images: []});
			}
			this.requestCallApi(this.state.search, this.state.amountImage,this.state.page);
		})
	};

	handleChangeVisibleImage = (e, index, value) => {
		this.setState({
			amountImage: value
		})
	};

	handlePagination = page => {
		if(this.state.page!==page){
			this.setState({page});
			this.requestCallApi(this.state.search, this.state.amountImage,page);
		}
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
				<RenderImages
					images={this.state.images}
				/>
				{
					this.state.images.length ?
						<Pagination
						totalHits={this.state.totalHits}
						amountImage={this.state.amountImage}
						onHandlePage={this.handlePagination}
					/>
						: null
				}
			</Fragment>
		)
	}
}