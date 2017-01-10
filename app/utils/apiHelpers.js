import axios from 'axios';
const GAPIKey = "AIzaSyA4sh6nrnUQGv3otRzx5DEV42ehbfGzCb8";

const base = "https://swish-api-srosenshein.c9users.io/api";

function fetchCourtInfo(courtId) {
	return axios.get(`${base}/courts/${courtId}`);
}

function fetchAllCourts() {
	return axios.get(`${base}/courts`);
}

function searchCourts(zipCode, distance) {
	return axios.get(`${base}/courts/search?zip_code=${zipCode}&distance=${distance}`);
}

const helpers = {
	//a bunch of functions to make api requests
	fetchCourtInfo,
	fetchAllCourts,
	searchCourts
};

export default helpers;