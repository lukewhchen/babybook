import React from "react";
import { connect } from "react-redux";
import { createPost } from '../../actions/post_actions';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { body: "", imageFile: null, imageUrl: null };
    this.submit = this.submit.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.handleErrors = this.handleErrors.bind(this);
    this.checkErrors = this.checkErrors.bind(this);
  }

  handleErrors() {
    return (<p className='posts-error'>Please say something!</p>);
  }

  checkErrors() {
    return (this.props.errors.length > 0);
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
    if (this.state.imageFile) {
      formData.append("post[image]", this.state.imageFile);
    }
    this.props.createPost(formData).then(() => {
      this.setState({ body: "", imageFile: null, imageUrl: null });
    });
  }

  render() {
    return (
        <form className='new-post-form' onSubmit={this.submit}>
          <h2>
            <i className="fa fa-pencil" aria-hidden="true" />
            Share your cutest baby photo here. if you don't I will show you my favorite.
          </h2>
          <textarea
            placeholder={`Whats on your mind? ${this.props.currentUser.first_name}`}
            onChange={this.handleChange("body")}
            value={this.state.body}/>
          {this.state.imageUrl &&
            <img src={this.state.imageUrl} id='post-img-preview' />
          }
          <br/>
          {this.checkErrors() ? this.handleErrors() : null}
          <label htmlFor="up-image" className="custom-file-upload">
            <i className="fa fa-picture-o" aria-hidden="true"> Photo</i>
          </label>
          <input id="up-image" type="file" onChange={this.updateFile}/>
          <button className="post-button">Post</button>
        </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
    errors: state.errors.posts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createPost: post => dispatch(createPost(post))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
