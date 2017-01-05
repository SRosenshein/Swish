import axios from 'axios';

const base = "https://swish-api-srosenshein.c9users.io/api";

function fetchCourtInfo(courtId) {
	return axios.get(`${base}/courts/${courtId}`);
}

function fetchAllCourts() {
	return axios.get(`${base}/courts`);
}

const helpers = {
	//a bunch of functions to make api requests
	fetchCourt: fetchCourtInfo,
	fetchAllCourts
};

export default helpers;