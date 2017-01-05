import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import Api from '../utils/apiHelpers';
import * as actions from '../actions/actionCreators';

// worker Saga: will be fired on COURT_REQUEST actions
function* requestCourt(action) {
	try {
		const court = yield call(Api.fetchCourt, action.courtId);
		yield put(actions.courtSuccess(court));
	} catch (e) {
		yield put({type: "COURT_FAILURE", message: e.message});
	}
}

function* mySaga() {
	yield takeLatest("COURT_REQUEST", requestCourt);
}

export default mySaga;