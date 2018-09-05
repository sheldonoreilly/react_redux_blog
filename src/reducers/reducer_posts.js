//a reducer returns the state after applying the action
import { FETCH_POSTS } from "../actions";
import _ from "lodash";

export default function PostsReducer(state = {}, action) {
	switch (action.type) {
		case FETCH_POSTS: {
			// return our part of the state.
			//lodash provides a convinence method to take an array and transform into a object
			//[ post1, post2] -> {id: post1, id2: post2}
			return _.mapKeys("posts", "id");
		}
		// this reducer is not handling the incoming action
		// so we simply return the state
		default:
			return state;
	}
}
