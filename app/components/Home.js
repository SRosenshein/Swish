import React from 'react';
import { Link } from 'react-router';
import { styles } from '../styles/homepage';

const Home = React.createClass ({
	render() {
		return (
			<div className="jumbotron col-sm-12 text-center" style={styles.welcome}>
				<h1>Swish</h1>
				<p>The real-time city pickup basketball court finder!</p>
				<Link to="/app"><button className="btn btn-lg btn-success">Find A Court</button></Link>
			</div>
		)
	}
});

export default Home;