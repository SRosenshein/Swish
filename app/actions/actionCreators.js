export function fetchAllCourts() {
	type: 'FETCH_ALL_COURTS_REQUEST'
}

export function fetchAllCourtsSuccess(courts) {
	type: 'FETCH_ALL_COURTS_SUCCESS',
	courts
}

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

export function searchCourtsRequest(zipCode,  distance){
	return {
		type: 'SEARCH_COURTS_REQUEST',
		zipCode,
		distance
	}
}

export function searchCourtsSuccess(courts) {
	return {
		type: 'SEARCH_COURTS_SUCCESS',
		courts
	}
}

export function searchCourtsFailure(error) {
	return {
		type: 'SEARCH_COURTS_FAILURE',
		error
	}
}

export function addCourt(name, desc, status, address) {
	return {
		type: 'ADD_COURT',
		name,
		desc,
		status,
		address
	}
}

// ADD_COURT

// EDIT_COURT

// FAVORITE_COURT

// CHECK_IN

// CHECK_OUT

// ADD_USER

// REMOVE_USER

// EDIT_USER