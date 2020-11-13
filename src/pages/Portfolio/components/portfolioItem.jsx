function Item (props){
	return(
		<div className="portfolio-item">
			<div className="title">
				<img src={'http://157.245.241.73' + props.images[0].url} alt=""/>
				<div className="title">
				{ props.title }
				</div>
			</div>
			<div className="description">
				{props.content}
			</div>
		</div>
	)
}

export default Item