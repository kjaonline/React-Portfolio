function Hero(props){
	return(
		<div className={`hero hero-${ props.heroClass }`}>
			<div>
				<h2>{ props.text }</h2>
				<p>{ props.description } </p>
			</div>
		</div>
	)
}

export default Hero;