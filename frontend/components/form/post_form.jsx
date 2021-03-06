import React from "react";
import { connect } from "react-redux";
import { createPost } from '../../actions/post_actions';
import { clearErrors } from '../../actions/session_actions';

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
    if (this.checkErrors()) {
      return (<p className='posts-error'>Please say something!</p>);
    }
  }

  checkErrors() {
    return (this.props.errors.length > 0);
  }

  handleChange() {
    return e => {
      this.setState({ body: e.target.value });
    };
  }

  updateFile(e) {
    e.preventDefault();
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
    this.props.clearErrors();
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
    const name = this.props.currentUser.first_name;
    return (
        <form className='new-post-form' onSubmit={this.submit}>
          <h2>
            <i className="fa fa-pencil" aria-hidden="true" />
            Share your cutest baby photo here. if you don't I will show you my favorite.
          </h2>
          <div className="new-post-body">
            <textarea
              placeholder={`Whats on your mind, ${name}?`}
              onChange={this.handleChange()}
              value={this.state.body}/>
            {this.state.imageUrl &&
              <img src={this.state.imageUrl}/>
            }
            <br/>
          </div>
          <div className="new-post-footer">
            {this.handleErrors()}
            <label htmlFor="up-image" className="custom-file-upload">
              <i className="fa fa-picture-o" aria-hidden="true"> Photo</i>
            </label>
            <input id="up-image" type="file" onChange={this.updateFile}/>
            <button className="post-button">Post</button>
          </div>
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
    createPost: post => dispatch(createPost(post)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
