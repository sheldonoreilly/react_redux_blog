import axios from "axios";

export const FETCH_POSTS = "FETCH_POSTS";
export const BASE_URL = "http://reduxblog.herokuapp.com/api";
export const API_KEY = "?key='henrylove'";

//action creator
export function fetchPosts() {
	const request = axios.get(`${BASE_URL}/posts${API_KEY}`);

	//with redux-promise middleware it will resolve the promise
	//we return an action object
	return {
		type: FETCH_POSTS,
		payload: request
	};
}
