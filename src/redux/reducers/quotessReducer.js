const initialQuote = [
	{
		Author: "Napoleon Hill",
		Quote: "When you are able to maintain your own highest standards of integrity – regardless of what others may do – you are destined for gre"
	}
]

const quotesReducer = ( state = initialQuote, action) => {
	switch(action.type){
		case 'GETQUOTES':
			return action.payload
		default:
			return state
	}
}

export default quotesReducer
