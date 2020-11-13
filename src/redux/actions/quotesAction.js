const getQuotes = () => {
	return (dispatch, getState) => {
		fetch('https://api.krisalcordo.com/quotes')
		.then(response => response.json())
		.then(
            (payload) => dispatch({ type: "GETQUOTES", payload })
        );
    };
}

export default getQuotes