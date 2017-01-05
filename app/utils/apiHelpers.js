import axios from 'axios';

const base = "https://swish-api-srosenshein.c9users.io/api";
//const headers = {headers: {"Access-Control-Allow-Origin": "*"}};

function fetchCourtInfo(courtId) {
	return axios.get(`${base}/courts/${courtId}`);
}

const helpers = {
	//a bunch of functions to make api requests
	fetchCourt: fetchCourtInfo
};

export default helpers;