import React, { Component } from "react";

import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";

class PostsNew extends Component {
	renderField(field) {
		//es6 destructure
		//reads: meta = field.meta, touched = field.meta.touched, error = field.meta.error
		const {
			meta: { touched, error }
		} = field;

		const className = `form-group  ${touched && error ? "has-danger" : ""}`;
		return (
			<div className={className}>
				<label>{field.label}</label>
				<input className="form-control" type="text" {...field.input} />
				<div className="text-help">{touched ? error : ""}</div>
			</div>
		);
	}

	onSubmit(values) {
		console.log("values :", values);
	}

	/* 
	The <form onSubmit={handleSubmit(this.onSubmit.bind(this))}></form> call...
	on Submit -> redux-form.handleSubmit (calling our validate method) passes -> calls our onSubmit method 
	*/
	render() {
		const { handleSubmit } = this.props;
		return (
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				<Field name="title" label="Title" component={this.renderField} />
				<Field name="categories" label="Categories" component={this.renderField} />
				<Field name="content" label="Post Content" component={this.renderField} />
				<button type="submit" className="btn btn-primary">
					Submit
				</button>
				<Link className="btn btn-danger" to="/">
					Cancel
				</Link>
			</form>
		);
	}
}

/*
	validates all fields from the form. the keys assigned to error obj
	must match the name argument given in the Field component of the render method.
*/
function validate(values) {
	const errors = {};
	//if no title.  add a property key of field name and a value of the error msg to user
	if (!values.title) {
		errors.title = "Please enter a post title.";
	}
	if (!values.categories) {
		errors.categories = "Please enter post categories.";
	}
	if (!values.content) {
		errors.content = "Please enter a post content.";
	}
	//errors.isEmpty ? submitted : not submitted.
	return errors;
}

/* fields are react components. reduxForm is a
 function somewhat similar to react-redux connect
 allows redux-form to communicate directly from the component
 to our formReducer.  It is neessary to have a unique name for 
 the value of the form property value.  Validate is called when a 
 user attempts submission */
export default reduxForm({
	validate,
	form: "PostsNewForm"
})(PostsNew);
