import { combineReducers, createStore } from 'redux';
import profileReducer from './profile-reducer';
import messangerReducer from './messanger-reducer';
import usersReducer from './users-reducer';
import headerReducer from './header-reducer';
import authReducer from './auth-reducer';

let reducers = combineReducers({
  profilePage: profileReducer,
  messangerPage: messangerReducer,
  usersPage: usersReducer,
  header: headerReducer,
  auth: authReducer,
});

let store = createStore(reducers);

export default store;
