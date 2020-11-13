const getQuotes = () => {
	return (dispatch, getState) => {
		fetch('https://157.245.241.73/quotes')
		.then(response => response.json())
		.then(
            (payload) => dispatch({ type: "GETQUOTES", payload })
        );
    };
}

export default getQuotes