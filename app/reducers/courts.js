import initialState from './initialState';

function courts(state = initialState.courts, action) {
	console.log(action.type);
	switch (action.type) {
		case "FETCH_ALL_COURTS_SUCCESS":
			Object.assign(state.courtsList, action.courts.data);
			return state;
		case "COURT_REQUEST": //by court_id
			return Object.assign({}, state, {currentCourt: action.courtId});
		// case "COURT_FAILURE":
		// 	return [
		// 		state, action.error
		// 	];
		// case "ADD_COURT":
		// 	return [
		// 		...state,
		// 		action.court.data
		// 	]
		case "SEARCH_COURTS_SUCCESS": //by zip + distance
			state.results = action.courts.data;
			return state;
		default:
			return state;
	}
}

export default courts;