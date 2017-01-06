import React from 'react';
// Import components

const SearchContainer = React.createClass({
	handleSubmitSearch(e) {
		e.preventDefault();
		const zipCode = this.refs.zipCode.value;
		const distance = this.refs.distance.value;
		this.props.searchCourtsRequest(zipCode, distance);
	},
	render() {
		return (
			<div>
				<form ref="searchForm" className="search-form" onSubmit={this.handleSubmitSearch}>
					Zip:
					<input type="text" ref="zipCode" />
					Distance: 
					<input type="text" ref="distance" />
					<input type="submit" hidden />
				</form>
			</div>
		)
	}
});

export default SearchContainer;