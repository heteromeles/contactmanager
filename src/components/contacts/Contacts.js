import React, { Component } from "react";
import Contact from "./Contact";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getContacts } from "../../actions/contactsActions";

class Contacts extends Component {
  componentDidMount() {
    this.props.getContacts();
  }

  render() {
    const { contacts } = this.props;
    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-danger">Contact</span> List
        </h1>
        {contacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  getContacts: PropTypes.func.isRequired,
};

// This function has a standard name.
// It defines how the Redux state should be mapped to component properties.
const mapStateToProps = (storeState) => ({ contacts: storeState.contactsState.contacts });

// An object of action creators can be passed insted of mapDispatch to auto generate
// the map of functions to wrapped dispatches of the created actions.
const actionCreators = {
  getContacts: getContacts,
};

export default connect(mapStateToProps, actionCreators)(Contacts);
