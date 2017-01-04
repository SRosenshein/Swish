import React from 'react';
import { Link } from 'react-router';
// Import components

const Court = React.createClass({
	handleSubmitCourt(e){
		e.preventDefault();
		const number = this.refs.courtNumber.value;
		console.log(JSON.stringify(this.props.courtRequest(number)));
	},
	render() {
		return (
			<div className="testCourt">
				<form ref="courtForm" className="court-form" onSubmit={this.handleSubmitCourt}>
					Number:
					<input type="text" ref="courtNumber" />
					<input type="submit" hidden />
				</form>
			</div>
		)
	}
});

export default Court;