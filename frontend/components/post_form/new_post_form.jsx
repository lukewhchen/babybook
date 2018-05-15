import React, { Component } from "react";
import { connect } from "react-redux";
import { createPost } from '../../actions/post_actions';

class NewPostForm extends Component {
  constructor(props) {
    super(props);
    this.state = { body: "", post_image_url: "" };
    this.submit = this.submit.bind(this);
  }

  handleChange(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  submit(e) {
    e.preventDefault();
    this.props.createPost(this.state);
  }

// hidtory.push
  // submit(e) {
  //   e.preventDefault();
  //   this.props.createPost(Object.assign({}, this.state)).then(() => {
  //     this.props.history.push("/posts");
  //   });
  // }

  render() {
    return (
      <form onSubmit={this.submit}>
        <label>What is on your mind!</label>
        <br/>
        <textarea onChange={this.handleChange("body")} value={this.state.body}/>

        <button>Make Post!</button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createPost: post => dispatch(createPost(post))
  };
};

export default connect(null, mapDispatchToProps)(NewPostForm);
