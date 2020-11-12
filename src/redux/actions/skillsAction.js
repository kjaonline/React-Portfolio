const getSkills = () => {
	return (dispatch, getState) => {
		fetch('http://157.245.241.73/skills')
		.then(response => response.json())
		.then(
            (payload) => dispatch({ type: "GETSKILLS", payload })
        );
    };
}

export default getSkills