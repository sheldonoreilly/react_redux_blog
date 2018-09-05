import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route } from "react-router-dom";
import reducers from "./reducers";
import PostsIndex from "./components/PostsIndex";
import reduxPromise from "redux-promise";

const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<BrowserRouter>
			<Route path="/" component={PostsIndex} />
		</BrowserRouter>
	</Provider>,
	document.querySelector(".container")
);
