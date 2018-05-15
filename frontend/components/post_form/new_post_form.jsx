import React, { Component } from "react";
import { connect } from "react-redux";
import { createPost } from '../../actions/post_actions';

class NewPostForm extends Component {
  constructor(props) {
    super(props);
    this.state = { body: "", imageFile: null, imageUrl: null };
    this.submit = this.submit.bind(this);
    this.updateFile = this.updateFile.bind(this);
  }

  handleChange(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  updateFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () =>
      this.setState({ imageFile: file, imageUrl: fileReader.result });
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  submit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("post[body]", this.state.body);
    formData.append("post[image]", this.state.imageFile);
    this.props.createPost(formData).then(() => {
      this.setState({ body: "", imageFile: null, imageUrl: null });
    });
  }

  render() {
    return (
      <form onSubmit={this.submit}>
        <label>What is on your mind!</label>
        <br/>
        <textarea onChange={this.handleChange("body")} value={this.state.body}/>
        <input type="file" onChange={this.updateFile}/>

        <button>Make Post!</button>
        <img src={this.state.imageUrl}/>
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
