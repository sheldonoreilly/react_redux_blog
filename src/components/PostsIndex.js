import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";
import _ from "lodash";

class PostsIndex extends Component {
	//we dont have an explicit user action to run the action creator instead the action is to
	//be dispensed at time component loads or mounts (lifecycle hook)
	componentDidMount() {
		//here we dispense the action  ...
		this.props.fetchPosts();
	}

	renderPosts() {
		// props.posts is an object not an array - so to 'map' them lets use lodash
		return _.map(this.props.posts, post => {
			return (
				<li className="list-group-item" key={post.id}>
					{post.title}
				</li>
			);
		});
	}

	render() {
		return (
			<div>
				<h3>Posts</h3>
				<ul className="list-group">{this.renderPosts()}</ul>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { posts: state.posts };
}

export default connect(
	mapStateToProps,
	{ fetchPosts }
)(PostsIndex);
