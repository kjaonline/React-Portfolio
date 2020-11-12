export const getPosts = () => {
	return (dispatch, getState) => {
		fetch('http://157.245.241.73/blogs')
		.then(response => response.json())
		.then(
            (payload) => dispatch({ type: "GETPOSTS", payload })
        );
    };
}

export default getPosts