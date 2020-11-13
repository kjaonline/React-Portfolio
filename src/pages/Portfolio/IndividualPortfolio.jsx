import React from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import Loader from './components/loader'
import ReactMarkdown from 'react-markdown';
class IndividualPortfolio extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			data: {},
			loaded: false
		}
		this.getPortfolioData = this.getPortfolioData.bind(this)
	}
	componentDidMount(){
		this.getPortfolioData()
		console.log(this.props)
	}
	async getPortfolioData(){
		await axios.get(`http://157.245.241.73/portfolios/${this.props.match.params.id}`)
		.then((data)=>{
			this.setState({
				loaded: true,
				data: data.data
			})	
		})
	}
	render(){
		let loaded = this.state.loaded
		let data = this.state.data
		return(
			<div className="individualPortfolio">
				{
					loaded ? (
						<div className="info">
							<div className="individualPortfolio-head">
								<img src={'http://157.245.241.73' + data.images[0].url} alt=""/>
								<div className="individualPortfolio-head-info">
									<h1>{data.portfolioname}</h1>
									<div className="tags">
										{data.portfolio_types.map(tag =>{
											return <span key={ tag.id }>{tag.portfoliotype}</span>
										})}
									</div>
								</div>
							</div>
							<div className="individualPortfolio-body">
								<ReactMarkdown source={data.portfolio_description} />
							</div>
						</div>
					) : (
						<Loader />
					)
				}
			</div>
		)
	}
}

export default withRouter(IndividualPortfolio)