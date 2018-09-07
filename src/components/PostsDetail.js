import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPost, deletePost } from "../actions";

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

	onDeleteClick() {
		const { id } = this.props.match.params;
		this.props.deletePost(id, () => {
			this.props.history.push("/");
		});
	}

	render() {
		//destructure
		const { post } = this.props;

		// first render is before componentDidMount where we fetch the post
		if (!post) {
			return <div>Loading...</div>;
		}

		return (
			<div>
				<Link className="btn btn-primary" to="/">
					Back to Index
				</Link>
				<button className="btn btn-danger pull-xs-right" onClick={this.onDeleteClick.bind(this)}>
					Delete Post
				</button>
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
	{ fetchPost, deletePost }
)(PostsDetail);
