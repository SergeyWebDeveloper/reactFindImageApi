import React, {Component} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import RaisedButton from 'material-ui/RaisedButton';

export class Pagination extends Component {
	handlePage = (e) => {
		const number = Number(e.target.innerText);
		this.props.onHandlePage(number);
		this.setState({
			activePage: number
		});
	};
	renderBreadCrumbsPage = (pages) => {
		const countPage = _.range(1, Number(pages));
		return (
			countPage.map(page => {
				return (
					<RaisedButton
						style={{margin: '0 5px 5px 0'}}
						key={page}
						label={page}
						primary={true}
						disabled={page===this.props.activePage&&true}
						onClick={this.handlePage}
					/>
				)
			})
		)
	};

	render() {
		const pages = Math.ceil(this.props.totalHits / this.props.amountImage);
		return (
			pages>1 ?
				<div className="breadcrumbs" style={{margin: '15px 0'}}>
					{this.renderBreadCrumbsPage(pages)}
				</div>
				:
				null
		)
	}
}

Pagination.propTypes = {
	onHandlePage: PropTypes.func,
	totalHits: PropTypes.number,
	amountImage: PropTypes.number,
	activePage: PropTypes.number
};