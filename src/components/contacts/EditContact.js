import React, { Component } from "react";
import { TextInputGroup } from "../layout/TextInputGroup";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getContact } from "../../actions/contactsActions";

class EditContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {},
  };

  componentWillReceiveProps(nextProps, nextState) {
    const { name, email, phone } = nextProps.contact;
    this.setState({ name: name, email: email, phone: phone });
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getContact(id);
  }

  onSubmit = async (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;

    if (name === "") {
      this.setState({ errors: { name: "Name is required" } });
      return;
    }
    if (email === "") {
      this.setState({ errors: { email: "Email is required" } });
      return;
    }
    if (phone === "") {
      this.setState({ errors: { phone: "Phone is required" } });
      return;
    }

    const updatedContact = {
      name: name,
      email: email,
      phone: phone,
    };

    const { id } = this.props.match.params;

    //// UPDATE CONTACT ////

    this.setState({
      name: "",
      email: "",
      phone: "",
      errors: {},
    });

    // Redirects back to home page.
    this.props.history.push("/");
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <div className="card mt-3 mb-3">
        <div className="card-header">Edit Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <TextInputGroup
              label="Name"
              name="name"
              placeholder="Enter Name"
              value={name}
              onChange={this.onChange}
              error={errors.name}
            />
            <TextInputGroup
              label="Email"
              name="email"
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={this.onChange}
              error={errors.email}
            />
            <TextInputGroup
              label="Phone"
              name="phone"
              placeholder="Enter Phone"
              value={phone}
              onChange={this.onChange}
              error={errors.phone}
            />
            <input type="submit" value="Update Contact" className="btn btn-light btn-block" />
          </form>
        </div>
      </div>
    );
  }
}

EditContact.propTypes = {
  contact: PropTypes.object.isRequired,
  getContact: PropTypes.func.isRequired,
};

const mapStateToProps = (storeState) => ({ contact: storeState.contactsState.contact });

const actionCreators = {
  getContact: getContact,
};

export default connect(mapStateToProps, actionCreators)(EditContact);
