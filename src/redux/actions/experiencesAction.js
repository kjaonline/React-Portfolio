const getExperiences = () => {
	return (dispatch, getState) => {
		fetch('https://api.krisalcordo.com/experiences')
		.then(response => response.json())
		.then(
            (payload) => dispatch({ type: "GETEXPERIENCE", payload })
        );
    };
}

export default getExperiences