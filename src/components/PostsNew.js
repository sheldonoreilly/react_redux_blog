import React, { Component } from "react";

import { Field, reduxForm } from "redux-form";

class PostsNew extends Component {
	renderField(field) {
		return (
			<div className="form-group">
				<label>{field.label}</label>
				<input className="form-control" type="text" {...field.input} />
			</div>
		);
	}

	render() {
		return (
			<form>
				<Field name="title" label="Title" component={this.renderField} />
				<Field name="tags" label="Tags" component={this.renderField} />
				<Field name="content" label="Post Content" component={this.renderField} />
			</form>
		);
	}
}

// fields are react components, reduxForm is a
// function somewhat similar to react-redux connect
// allows redux form to communicate directly from the component
// to our formReducer
export default reduxForm({
	form: "PostsNewForm"
})(PostsNew);
