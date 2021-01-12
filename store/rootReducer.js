import { combineReducers } from 'redux';  
import { reducer as formReducer } from 'redux-form';

import { projectsReducer } from './domains/projects/reducer';
import { authReducer } from './domains/auth/reducer';
import { contactsReducer } from './domains/contacts/reducer';
import { objectsReducer } from './domains/objects/reducer';


const rootReducer = combineReducers({
  projectsReducer,
  authReducer,
  contactsReducer,
  objectsReducer,
  form: formReducer 
})

export default rootReducer;