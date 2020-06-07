import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import { Consumer } from "../../context";

class Contact extends Component {
  state = {
    showContactInfo: false,
  };

  onShowClick = (e) => {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };

  onDeleteClick = (id, dispatch) => {
    console.log("about to delete");
    axios.delete(`/datasource/users/${id}`).then((res) => dispatch({ type: "DELETE_CONTACT", payload: id }));
    // axios
    // .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
    // .then((res) => dispatch({ type: "DELETE_CONTACT", payload: id }));
    console.log("did delete");
  };

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card card-body mt-2 mb-2">
              <h4>
                {name}
                <i className="fas fa-sort-down" style={{ cursor: "pointer" }} onClick={this.onShowClick} />
                <i
                  className="fas fa-times"
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                 />
              </h4>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default Contact;
