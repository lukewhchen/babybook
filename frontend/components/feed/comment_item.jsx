import React from "react";
import { connect } from 'react-redux';

class commentItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const commenter = this.props.authorId;
    return (
      <div className="single-comment">
        <i className="fa fa-user-circle cc" aria-hidden="true"/>
        <div className="comment-body">
          <label>{commenter}</label>
          <p>{this.props.body}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    commenter: state.entities.users[ownProps.authorId]
  };
};

export default connect(mapStateToProps, null)(commentItem);


// 成功show commenter id
// import React from "react";
//
// function commentItem(props) {
//   return (
//     <div className="single-comment">
//       <i className="fa fa-user-circle cc" aria-hidden="true"/>
//       <div className="comment-body">
//         <label>{props.authorId}</label>
//         <p>{props.body}</p>
//       </div>
//     </div>
//   );
// }
//
// export default commentItem;
