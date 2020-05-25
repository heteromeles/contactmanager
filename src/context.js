import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter((contact) => contact.id !== action.payload),
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "John Doe",
        email: "jd@foo.bar",
        phone: "555-555-5555",
      },
      {
        id: 2,
        name: "Karen Williams",
        email: "kw@foo.bar",
        phone: "555-555-5556",
      },
      {
        id: 3,
        name: "Henry Johnson",
        email: "hj@foo.bar",
        phone: "555-555-5557",
      },
    ],
    dispatch: (action) => {
      this.setState((state) => reducer(state, action));
    },
  };

  render() {
    // pass any of my children as children to Context.Provider
    return <Context.Provider value={this.state}>{this.props.children}</Context.Provider>;
  }
}

export const Consumer = Context.Consumer;
