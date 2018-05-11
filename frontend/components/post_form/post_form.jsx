import React from 'react';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.post;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.post.id !== nextProps.post.id) this.setState(nextProps.post);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submit(this.state);
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <label>Body
            <input type="text" onChange={this.update('body')} value={this.state.body} />
          </label>

          <label>post_image_url
            <input type="text" onChange={this.update('post_image_url')} value={this.state.post_image_url} />
          </label>

          <button>Submit Post</button>
        </form>
    );
  }
}

export default PostForm;
