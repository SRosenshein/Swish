import React from 'react';
import { Link } from 'react-router';
// Import components

const Search = React.createClass({
	handleSubmitSearch(e) {
		e.preventDefault();
		const zipCode = this.refs.zipCode.value;
		const distance = this.refs.distance.value;
		this.props.searchCourtsRequest(zipCode, distance);
	},
	render() {
		return (
			<div>
				<form ref="searchForm" onSubmit={this.handleSubmitSearch}>
					<div className="form-group">
						Zip:
						<input type="text" className="form-control" ref="zipCode" />
						Distance: 
						<input type="text" className="form-control" ref="distance" />
						<input type="submit" hidden />
					</div>
				</form>
			</div>
		);
	}
});

export default Search;