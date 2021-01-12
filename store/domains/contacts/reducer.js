import actionTypes from './actionTypes';

const initialStateContacts = {
    contacts: []
}

export const contactsReducer = (state=initialStateContacts, action={}) => {
    switch(action.type) {
        case actionTypes.SEND_MESSAGE_FROM_USER_FULFILLED:
            return {contacts: [...state.contacts, action.payload.data]};
        default: 
            return state;
    }
}
