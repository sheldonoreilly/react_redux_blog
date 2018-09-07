import axios from "axios";

export const FETCH_POSTS = "fetch_posts";
export const FETCH_POST = "fetch_post";
export const CREATE_POST = "create_posts";
export const DELETE_POST = "delete_post";

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

export function createPost(values, callback) {
	//do the post to the server
	//the values obj passed in are from the form and the values keys match the request 'body' keys expected at the blog server
	const request = axios.post(`${BASE_URL}/posts${API_KEY}`, values).then(() => {
		callback();
	});

	return {
		type: CREATE_POST,
		payload: request
	};
}

export function fetchPost(id) {
	const request = axios.get(`${BASE_URL}/posts/${id}${API_KEY}`);

	return {
		type: FETCH_POST,
		payload: request
	};
}

export function deletePost(id, callback) {
	const request = axios.delete(`${BASE_URL}/posts/${id}${API_KEY}`).then(() => callback());

	return {
		type: DELETE_POST,
		payload: id
	};
}
