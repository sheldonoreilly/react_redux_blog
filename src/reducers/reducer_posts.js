//a reducer returns the state after applying the action
import { FETCH_POSTS, FETCH_POST } from "../actions";
import _ from "lodash";

export default function PostsReducer(state = {}, action) {
	switch (action.type) {
		case FETCH_POSTS: {
			// return our part of the state.
			//lodash provides a convinence method to take an array and transform into a object
			//[ post1, post2] -> {id: post1, id2: post2}
			return _.mapKeys(action.payload.data, "id");
		}
		case FETCH_POST: {
			const post = action.payload.data;

			//spread the existing state to a temp var
			const newState = { ...state };
			newState[post.id] = post;
			return newState;
			//return {...state, state[id] : action.payload.data }
		}
		// the reducer type is not handling the incoming action
		// so we simply return the state
		default:
			return state;
	}
}
