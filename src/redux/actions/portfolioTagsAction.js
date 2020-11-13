const PortfolioTags = () => {
	return (dispatch, getState) => {
		fetch('https://api.krisalcordo.com/portfolio-types')
		.then(response => response.json())
		.then(
            (payload) => dispatch({ type: "GETPORTFOLIOTAGS", payload })
        );
    };
}

export default PortfolioTags