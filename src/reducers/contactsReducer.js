import { GET_CONTACTS, DELETE_CONTACT, ADD_CONTACT } from "../actions/types";

const initialState = {
  contacts: [
    {
      id: 1,
      name: "John Doe",
      email: "john@gmail.com",
      phone: "555-555-5555",
    },
    {
      id: 2,
      name: "Karen Williams",
      email: "karen@gmail.com",
      phone: "444-444-4444",
    },
    {
      id: 3,
      name: "Henry Johnson",
      email: "henry@gmail.com",
      phone: "333-333-333",
    },
  ],
};

export function contactsReducer(contactsState = initialState, action) {
  const { contacts } = contactsState;
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...contactsState,
      };
    case DELETE_CONTACT:
      return {
        ...contactsState,
        contacts: contacts.filter((contact) => contact.id !== action.payload),
      };
    case ADD_CONTACT:
      return {
        ...contactsState,
        contacts: [action.payload, ...contacts],
      };
    default:
      return contactsState;
  }
}
