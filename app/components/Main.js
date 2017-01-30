import React, { Component } from 'react';
import { Link } from 'react-router';
import { styles } from '../styles/homepage';

class Main extends Component {
	render() {
		return (
			<div className='main-container'>
				<div className="navbar navbar-default">
					<div className="container-fluid">
						<div className="navbar-header">
							<Link to="/"><span className="navbar-brand" style={styles.brand}><em>Swish</em></span></Link>
						</div>
						<div className="collapse navbar-collapse">
							<ul className="nav navbar-nav">
								<Link to="/about"><li style={styles.about}>About</li></Link>
							</ul>
						</div>
						<div className="collapse navbar-collapse navbar-right">
							<ul className="nav navbar-nav">
								<li>Sign Up</li>
								<li>Log In</li>
							</ul>
						</div>
					</div>
				</div>
				{React.cloneElement(this.props.children, this.props)}
			</div>
		);
	}
}

export default Main;				