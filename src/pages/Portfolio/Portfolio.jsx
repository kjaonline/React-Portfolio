import React from 'react'
import Item from './components/portfolioItem'
import axios from 'axios'

import Loader from './components/loader'

class Portfolio extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			initialTypes: [],
			portfolio: [],
			filteredTags: [],
			disabled: true,
			portfolioLoaded: false,
			tagsLoaded: false
		}
		
		this.tagClickHandler = this.tagClickHandler.bind(this)
		this.getInitialPosts = this.getInitialPosts.bind(this)
	}

	tagClickHandler(e) {
		this.updateTags(e)
		this.getFilteredPortfolio()
	}
	resetPortfolio = () => {
		this.setState({
			filteredTags: []
		})
		this.getInitialPosts();
	}

	updateTags = (e) => {
		const currentTags = this.state.filteredTags
		if(! this.state.filteredTags.includes(e.target.getAttribute('type_id'))) {
			currentTags.push(e.target.getAttribute('type_id'))
			this.setState({
				filteredTags: currentTags
			})
		}

	}

	getAllTags = () => {
		fetch('http://157.245.241.73/portfolio-types')
		.then(res => res.json())
		.then((data) =>{
				this.setState({
					initialTypes: data,
					tagsLoaded: true
				})
			}
		)
	}
	
	async getFilteredPortfolio() {
		  await axios.get('http://157.245.241.73/portfolios', {
				params: {
					portfolio_types: this.state.filteredTags
				}
			}
		)
		.then(
			this.setState({
				portfolioLoaded: false
			})
		)
		.then((res) => {
			this.setState({
				portfolio: res.data,
				portfolioLoaded: true
			})
		})
	}

	getInitialPosts() {
		 fetch('http://157.245.241.73/portfolios')
		.then(res => res.json())
		.then((data) =>{
				this.setState({
					portfolio: data,
					portfolioLoaded: true
				})
			}
		)
	}


	componentDidMount(){
		this.getAllTags();
		this.getInitialPosts();
	}

	
	render() {
		const portfolioLoaded = this.state.portfolioLoaded
		const tagsLoaded = this.state.tagsLoaded
		let filteredTags = this.state.filteredTags
		return(
			<div className="pagePortfolio">
				<div className="categories">
					{
						tagsLoaded ? (
							this.state.initialTypes.map(function(job){
								return(
									<div  onClick={this.tagClickHandler} className={ filteredTags.includes(`${job.id}`) ? "active category" : "category" } key={job.id} type_id={job.id} type={job.portfoliotype}>
										{job.portfoliotype}
									</div>
								)
							}, this)
						) : (
							<Loader />
						)
					}

					<div onClick={this.resetPortfolio} className="reset" disabled={this.state.filteredTags < 1 ? true : false}  >
						Reset
					</div>
				</div>
				<div className="portfolio-items">
					{
						portfolioLoaded ? (
							this.state.portfolio.map(function(item) {
								return(
									<Item title={item.portfolioname} key={item.id} tags={item.portfolio_types} images={item.images}/>
								)
							})
						) : (
							<Loader />
						)
					}
				</div>
			</div>
		)
	}
}

export default Portfolio;