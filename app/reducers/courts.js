import initialState from './initialState';

function courts(state = initialState, action) {
	console.log(action.type);
	switch (action.type) {
		case "FETCH_ALL_COURTS_SUCCESS":
			Object.assign(state.courts, action.courts.data);
			return state;
		case "COURT_SUCCESS": //by court_id
			state.currentCourt = action.court.data.id;
			return state;
		case "COURT_FAILURE":
			return [
				state, action.error
			];
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