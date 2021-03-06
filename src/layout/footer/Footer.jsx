import React from 'react';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
library.add(fab)


function Footer(props) {
	let randomQuote = Math.floor(Math.random() * props.quotes.length)
	return(
		<div className="footer">
			<div className="disclaimer">
				<p>Kris Alcordo. kris@alcordo.com</p>
			</div>
			<div className="links">
				<ul>
					<li>
						<a href="https://instagram.com/krisalcordo"><FontAwesomeIcon icon={["fab", "instagram"]} /></a>
					</li>
					<li>
						<a href="https://twitter.com/krisalcordo"><FontAwesomeIcon icon={["fab", "twitter"]} /></a>
					</li>
					<li>
						<a href="https://facebook.com/krisalcordo"><FontAwesomeIcon icon={["fab", "facebook"]} /></a>
					</li>
					<li>
						<a href="https://github.com/kjaonline"><FontAwesomeIcon icon={["fab", "github"]} /></a>
					</li>
					<li>
						<a href="https://github.com/kjaonline"><FontAwesomeIcon icon={["fab", "linkedin"]} /></a>
					</li>
				</ul>
			</div>
			<p className="quote">
				<em>{ props.quotes[randomQuote].Quote }</em>
				<span>- { props.quotes[randomQuote].Author }</span>
			</p>
		</div>
	)
}



const mapStateToProps = (state) => {
	return { quotes: state.quotesReducer }
}

export default compose(
	withRouter,
	connect(mapStateToProps)
)(Footer)