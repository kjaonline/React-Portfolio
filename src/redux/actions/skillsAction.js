const getSkills = () => {
	return (dispatch, getState) => {
		fetch('https://api.krisalcordo.com/skills')
		.then(response => response.json())
		.then(
            (payload) => dispatch({ type: "GETSKILLS", payload })
        );
    };
}

export default getSkills