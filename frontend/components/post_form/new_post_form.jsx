import React from "react";
import { connect } from "react-redux";
import { createPost } from '../../actions/post_actions';

class NewPostForm extends React.Component {
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
      <div className='new-post-form'>
        <h2>
          <i className="fa fa-pencil" aria-hidden="true" />
          Make Post
        </h2>

        <form onSubmit={this.submit}>
          <textarea
            placeholder={`Whats on your mind? ${this.props.currentUser.first_name}`}
            onChange={this.handleChange("body")}
            value={this.state.body}/>
          {this.state.imageUrl &&
            <img src={this.state.imageUrl} id='post-img-preview' />
          }

          <div id="upload-image">
            <i className="fa fa-picture-o" aria-hidden="true"></i>
            <h3>Photo</h3>
            <input type="file" onChange={this.updateFile}/>
          </div>
          <button className="post-button">Post</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.id]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createPost: post => dispatch(createPost(post))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewPostForm);
