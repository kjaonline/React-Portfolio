import React from 'react'
import Item from './components/portfolioItem'
import axios from 'axios'

class Portfolio extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			initialTypes: [],
			portfolio: [],
			filteredTags: [],
			disabled: true,
			loaded: false
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
		if(! this.state.filteredTags.includes(e.target.getAttribute('type_id'))) {
			this.setState({
				filteredTags: [...this.state.filteredTags,  e.target.getAttribute('type_id')]
			})
		}
		this.getFilteredPortfolio()
	}

	getAllTags = () => {
		fetch('http://157.245.241.73/portfolio-types')
		.then(res => res.json())
		.then((data) =>{
				this.setState({
					initialTypes: data
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
				
				loaded: false
			})
		)
		.then((res) => {
			this.setState({
				portfolio: res.data,
				loaded: true
			})

			console.log(res)
		})
		
	}

	 getInitialPosts() {
		 fetch('http://157.245.241.73/portfolios')
		.then(res => res.json())
		.then((data) =>{
				this.setState({
					portfolio: data,
					loaded: true
				})
			}
		)
	}

	componentDidMount(){
		this.getAllTags();
		this.getInitialPosts();
	}
	render() {
		if ( this.state.loaded === false ){
			return <div>Loading...</div>
		}
		return(
			<div className="page-portfolio">
				<div className="categories">
					{this.state.initialTypes.map(function(job){
						return(
							<div onClick={this.tagClickHandler} className="category" key={job.id} type_id={job.id} type={job.portfoliotype}>
								{job.portfoliotype}
							</div>
						)
					}, this)}
					<div onClick={this.resetPortfolio} className="reset" disabled={this.state.filteredTags < 1 ? true : false}  >
						Reset
					</div>
				</div>
				<div className="portfolio-items">
					{
						this.state.portfolio.map(function(item) {
							return(
								<Item title={item.portfolioname} key={item.id} tags={item.portfolio_types} images={item.images}/>
							)
						})
					}
				</div>
			</div>
		)
	}
}

export default Portfolio;