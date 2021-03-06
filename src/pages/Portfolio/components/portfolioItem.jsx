import { Link } from "react-router-dom";

function Item (props){
	return(
		<Link to={`portfolio/${props.id}`} className="portfolio-item">
			
			<div className="portfolio-header">
				<div className="image">
					<img src={'http://api.krisalcordo.com' + props.images[0].url} alt=""/>
				</div>
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