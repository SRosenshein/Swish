import { call, put, takeEvery, takeLatest, fork } from 'redux-saga/effects';
import Api from '../utils/apiHelpers';
import * as actions from '../actions/actionCreators';

//
// Worker Sagas
//
export function* fetchAllCourts(action) {
	try {
		const courts = yield call(Api.fetchAllCourts);
		yield put(actions.fetchAllCourtsSuccess(courts));
	} catch (e) {
		yield put({type: 'FETCH_ALL_COURTS_FAILURE', message: e.message});
	}
}
// export function* requestCourt(action) {
// 	try {
// 		const court = yield call(Api.fetchCourtInfo, action.courtId);
// 		yield put(actions.courtSuccess(court));
// 	} catch (e) {
// 		yield put(actions.courtFailure(e.message));
// 	}
// }
export function* searchCourts(action) {
	try {
		const courts = yield call(Api.searchCourts, action.zipCode, action.distance);
		yield put(actions.searchCourtsSuccess(courts));
	} catch (e) {
		yield put(actions.searchCourtsFailure(e.message));
	}
}
//
// Watcher Sagas
//
export function* watchFetchCourts() {
	yield takeLatest("FETCH_ALL_COURTS_REQUEST", fetchAllCourts)
}
// export function* watchCourtRequest() {
// 	yield takeEvery("COURT_REQUEST", requestCourt);
// }
export function* watchSearchRequest() {
	yield takeEvery("SEARCH_COURTS_REQUEST", searchCourts);
}

function* rootSaga() {
	yield [
		fork(watchFetchCourts),
		// fork(watchCourtRequest),
		fork(watchSearchRequest)
	]
}

export default rootSaga;
