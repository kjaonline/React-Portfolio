export const getPosts = () => {
	return (dispatch, getState) => {
		fetch('https://api.krisalcordo.com/blogs')
		.then(response => response.json())
		.then(
            (payload) => dispatch({ type: "GETPOSTS", payload })
        );
    };
}

export default getPosts