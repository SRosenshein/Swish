import axios from 'axios';
const GAPIKey = "AIzaSyD6oH4QLY6CugbCXIkEW1tlcLavOaCxl9I";

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