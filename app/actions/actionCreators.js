export function courtRequest(courtId) {
	return {
		type: 'COURT_REQUEST',
		courtId
	}
}

export function courtSuccess(court) {
	return {
		type: 'COURT_SUCCESS',
		court
	}
}

export function courtFailure(error) {
	return {
		type: 'COURT_FAILURE',
		error
	}
}

// ADD_COURT

// EDIT_COURT

// SEARCH_COURT

// FAVORITE_COURT

// CHECK_IN

// CHECK_OUT

// ADD_USER

// REMOVE_USER

// EDIT_USER