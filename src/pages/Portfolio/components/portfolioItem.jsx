import { Link } from "react-router-dom";

function Item (props){
	return(
		<Link to={`portfolio/${props.id}`} className="portfolio-item">
			<div className="portfolio-header">
				<img src={'http://157.245.241.73' + props.images[0].url} alt=""/>
				<div className="portfolio-title">
				{ props.title }
				</div>
			</div>
			<div className="description">
				{props.content}
				{props.tags.map(tag => {
					return <span className={ props.filteredTags.includes(`${tag.id}`) ? "active tag" : "tag" } key={tag.id}>{tag.portfoliotype}</span>
				})}
			</div>
		</Link>
	)
}

export default Item