function courts(state = [], action) {
	console.log(action.type);
	switch (action.type) {
		case "FETCH_ALL_COURTS_SUCCESS":
			return [
				...state, action.courts
			]
		case "COURT_SUCCESS":
			return [
				...state,
				action.court.data
			];
		case "COURT_FAILURE":
			return [
				...state, action.error
			];
		// case "ADD_COURT":
		// 	return [
		// 		...state,
		// 		action.court.data
		// 	]
		case "SEARCH_COURTS_SUCCESS":
			return [

			];
		default:
			return state;
	}
}

export default courts;