function courts(state = [], action) {
	switch (action.type) {
		case "COURT_SUCCESS":
			return [...state, {
				court: action.court
			}];
		case "COURT_FAILURE":
			return state;
		default:
			return state;
	}
	return state;
}

export default courts;