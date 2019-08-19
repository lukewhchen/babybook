import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import SearchBarContainer from "./search_bar_container";
import { logout } from '../../actions/session_actions';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayModal: false
    };
    this.handleModal = this.handleModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  handleModal(e) {
    const nextTitle = e.target.textContent;
    const mapTitleToX = {
      "Find Friends":31,
      "Create":52,
      "Friend Requests": 63,
      "Messenger": 71,
      "Notifications": 79,
      "Quick Help": 87
    };
    if (nextTitle !== this.state.title) {
      this.setState(() => ({
        displayModal: true,
        title: nextTitle,
        offsetX: mapTitleToX[nextTitle]
      }));
    } else {
      this.setState(prevState => ({
        displayModal: !prevState.displayModal,
        offsetX: mapTitleToX[nextTitle]
      }));
    }
  }

  closeModal(e) {
    if (e.target.className.indexOf('dd') === -1) {
      this.setState(() => ({
        displayModal: false,
      }));
    }
  }

  render() {
    const currentUser = this.props.currentUser;
    return (
      <header className="nav-container" onClick={this.closeModal}>
        <div className="nav-bar">
            <div className="nav-left">
              <Link to="/"><p className="bb-logo">b</p></Link>
              <SearchBarContainer />
            </div>
            <div className="nav-right">
              <div className="dropdown">
                  <div className="modal" style={{display: this.state.displayModal ? "block" : "none"}}>
                    <div className="modal-from" style={{ left: this.state.offsetX + "%"}}></div>
                    <div className="modal-header">{this.state.title}</div>
                    <div className="modal-body">No New Requests</div>
                    <div className="modal-footer">See All</div>
                  </div>
              </div>
              <div className="user-link2">
                <i className="fa fa-user-circle" aria-hidden="true"/>
                <Link to={`/users/${currentUser.id}`}><p className="dd-text">{currentUser.fullName}</p></Link>
              </div>
              <Link to="/"><p className="dd-text">Home</p></Link>
              <div><p className="dd-text" onClick={this.handleModal}>Find Friends</p></div>
              <div><p className="dd-text" onClick={this.handleModal}>Create</p></div>
              <div className="dd-icon friends" onClick={this.handleModal}>Friend Requests</div>
              <div className="dd-icon messages" onClick={this.handleModal}>Messenger</div>
              <div className="dd-icon alert" onClick={this.handleModal}>Notifications</div>
              <div className="dd-icon questions" onClick={this.handleModal}>Quick Help</div>
              <button className="logout-button" onClick={this.props.logout}>Log Out</button>
            </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.id]
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
