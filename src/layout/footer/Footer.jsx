import React from 'react';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(fab)


function Footer(){
	return(
		<div className="footer">
			<div className="disclaimer">
				Kris Alcordo. kris@alcordo.com
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
		</div>
	)
}

export default Footer;