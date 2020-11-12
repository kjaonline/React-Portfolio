const getExperiences = () => {
	return (dispatch, getState) => {
		fetch('http://157.245.241.73/experiences')
		.then(response => response.json())
		.then(
            (payload) => dispatch({ type: "GETEXPERIENCE", payload })
        );
    };
}

export default getExperiences