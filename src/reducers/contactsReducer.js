import { GET_CONTACTS, DELETE_CONTACT, ADD_CONTACT, GET_CONTACT, UPDATE_CONTACT } from "../actions/types";

const initialState = {
  contacts: [],
  contact: {},
};

export function contactsReducer(contactsState = initialState, action) {
  const { contacts, contact } = contactsState;
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...contactsState,
        contacts: action.payload,
      };
    case GET_CONTACT:
      return {
        ...contactsState,
        contact: action.payload,
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
