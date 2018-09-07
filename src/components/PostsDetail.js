import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPost } from "../actions";

class PostsDetail extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		//this comes from the router
		//id is id param of the url
		const { id } = this.props.match.params;

		this.props.fetchPost(id);
	}

	render() {
		//sor i dont understand why this.props.post is undefined the first render
		//state is defaulted to = {} in the reducer.  need to look more into this
		// if (this.props.post === undefined) {
		// 	return <div />;
		// }

		//destructure
		const { post } = this.props;

		// first render is before componentDidMount where we fetch the post
		if (!post) {
			return <div>Loading...</div>;
		}

		return (
			<div>
				<h3>{post.title}</h3>
				<h6>Categories: {post.categories}</h6>
				<p>{post.content}</p>
			</div>
		);
	}
}

function mapStateToProps({ posts }, ownProps) {
	return { post: posts[ownProps.match.params.id] };
}

export default connect(
	mapStateToProps,
	{ fetchPost }
)(PostsDetail);
