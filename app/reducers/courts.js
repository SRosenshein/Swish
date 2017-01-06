import initialState from './initialState';

function courts(state = initialState.courts, action) {
	console.log(action.type);
	switch (action.type) {
		case "FETCH_ALL_COURTS_SUCCESS":
			console.log(state, action)
			return [
				...state, action.courts
			]
		case "COURT_SUCCESS": //by court_id
			// should only return individual court data?
			console.log(state, action)
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
		case "SEARCH_COURTS_SUCCESS": //by zip + distance
			console.log(state, action)
			return [

			];
		default:
			return state;
	}
}

export default courts;