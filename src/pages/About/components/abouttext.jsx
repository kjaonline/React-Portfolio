import React from 'react';
import ReactMarkdown from 'react-markdown';

class AboutText extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			about: ''
		}
	}

	componentDidMount(){
		fetch('http://157.245.241.73/about-page-text')
		.then(response => response.json())
		.then(data => {
				this.setState({
					about: data
				})
			}
		);
	}
	render(){
		return(
			<div className="page-about-intro">
				<h1>{ this.state.about.Title }</h1>
				<ReactMarkdown source={this.state.about.Text} />
			</div>
		)
	}
}

export default AboutText;