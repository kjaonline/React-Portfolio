const PortfolioTags = () => {
	return (dispatch, getState) => {
		fetch('https://157.245.241.73/portfolio-types')
		.then(response => response.json())
		.then(
            (payload) => dispatch({ type: "GETPORTFOLIOTAGS", payload })
        );
    };
}

export default PortfolioTags