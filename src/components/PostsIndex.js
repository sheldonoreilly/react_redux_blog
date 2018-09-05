import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

class PostsIndex extends Component {
	//we dont have an explicit user action to run the action creator instead the action is to
	//be dispensed at time component loads or mounts (lifecycle hook)
	componentDidMount() {
		//here we dispense the action  ...
		this.props.fetchPosts();
	}

	render() {
		return <div>PostsIndex</div>;
	}
}

export default connect(
	null,
	{ fetchPosts }
)(PostsIndex);
