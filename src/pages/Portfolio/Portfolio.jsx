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
			tagsLoaded: false,
			foundItems: 0
		}
		
		this.tagClickHandler = this.tagClickHandler.bind(this)
		this.getInitialPosts = this.getInitialPosts.bind(this)
	}

	tagClickHandler(e) {
		this.updateTags(e)
	}
	resetPortfolio = () => {
		this.setState({
			filteredTags: [],
			foundItems: 0
		})
		this.getInitialPosts();
	}

	updateTags = (e) => {
		const currentTags = this.state.filteredTags
		const found = this.state.foundItems + 1
		if(! this.state.filteredTags.includes(e.target.getAttribute('type_id'))) {
			currentTags.push(e.target.getAttribute('type_id'))
			this.setState({
				filteredTags: currentTags,
				foundItems: found
			})
		}

	}

	getAllTags = () => {
		fetch('https://api.krisalcordo.com/portfolio-types')
		.then(res => res.json())
		.then((data) =>{
				this.setState({
					initialTypes: data,
					tagsLoaded: true
				})
			}
		)
	}

	getInitialPosts() {
		 fetch('https://api.krisalcordo.com/portfolios')
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
		let foundItems = this.state.foundItems;
		
		return(
			<div className="pageWrapper">
				<div className="page pagePortfolio">
					<div className="categories">
						<div className="tags-title">
							Tags
						</div>
						<div className="tags-container">
						{
							tagsLoaded ? (
								this.state.initialTypes.map(function(job){
									return(
										<div onClick={this.tagClickHandler} className={ filteredTags.includes(`${job.id}`) ? "active category" : "category" } key={job.id} type_id={job.id} type={job.portfoliotype}>
											{job.portfoliotype}
										</div>
									)
								}, this)
							) : (
								<Loader />
							)
						}
						</div>

						<div onClick={this.resetPortfolio} className="reset" disabled={this.state.filteredTags < 1 ? true : false}  >
							Reset
						</div>
					</div>
					<div className="portfolio-items">
						{
							portfolioLoaded ? (
								foundItems == 0 ? (
									this.state.portfolio
									.map(item => {
										return(
											<Item title={item.portfolioname} key={item.id} tags={item.portfolio_types} images={item.images} filteredTags={filteredTags} id={item.id}/>
										)
									})
								) : (
									this.state.portfolio
									.filter(item => { return item.portfolio_types.map(tag => { return tag.id.toString() }).some(tagID => filteredTags.includes(tagID)) })
									.map(item => {
										return(
											<Item title={item.portfolioname} key={item.id} tags={item.portfolio_types} images={item.images} filteredTags={filteredTags} id={item.id}/>
										)
									})
								)
							) : (
								<Loader />
							)
						}
					</div>
				</div>
			</div>
		)
	}
}

export default Portfolio;