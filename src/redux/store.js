// Этот файл является простенькой имитацией редаксовского стора, он просто нужен лично для меня.

import messangerReducer from './messanger-reducer';
import profileReducer from './profile-reducer';

let store = {
  _state: {
    profilePage: {
      postsData: [
        { postId: 1, message: 'Hi, how are you?', likesCount: 12 },
        { postId: 2, message: 'You are okey?', likesCount: 7 },
        { postId: 3, message: 'Miss you!', likesCount: 3 },
        { postId: 4, message: 'So much!', likesCount: 8 },
      ],
      newTextArea: '',
    },

    messangerPage: {
      dialogsData: [
        { userId: 1, name: 'Oksana Skorokhod' },
        { userId: 2, name: 'Olivia' },
        { userId: 3, name: 'Korol' },
        { userId: 4, name: 'Dima' },
        { userId: 5, name: 'Igor' },
        { userId: 6, name: 'Tima' },
        { userId: 7, name: 'Aleksander KoGygetovitsch' },
        { userId: 8, name: 'Tima' },
        { userId: 9, name: 'Tima' },
        { userId: 10, name: 'Tima' },
        { userId: 11, name: 'Tima' },
        { userId: 12, name: 'Tima' },
        { userId: 13, name: 'Tima' },
        { userId: 14, name: 'Tima' },
      ],
      messagesData: [
        { message: "Hey, wat's up?" },
        { message: 'what time is now?' },
        { message: 'Do you hear me?' },
        { message: 'I want to eat' },
        { message: 'i want to speak english' },
        { message: 'i want to speak english' },
        { message: 'i want to speak english' },
        { message: 'i want to speak english' },
        { message: 'i want to speak english' },
        { message: 'i want to speak english' },
        { message: 'i want to speak english' },
        { message: 'i want to speak english' },
        { message: 'i want to speak english' },
        { message: 'i want to speak english' },
        { message: 'i want to speak english' },
        { message: 'i want to speak english' },
        { message: 'i want to speak english' },
        { message: 'i want to speak english' },
        { message: 'i want to speak english' },
        { message: 'i want to speak english' },
        { message: 'i want to speak english' },
        { message: 'i want to speak english' },
        { message: 'i want to speak english' },
        { message: 'i want to speak english' },
        { message: 'i want to speak english' },
        { message: 'i want to speak english' },
        { message: 'i want to speak english' },
        { message: 'i want to speak english' },
        { message: 'i want to speak english' },
        { message: 'i want to speak english' },
        { message: 'i want to speak english' },
        { message: 'i want to speak english' },
        { message: 'i want to speak english' },
      ],
      enteringTextMessage: '',
    },
  },

  _callSubscriber() {
    console.log('state changed');
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer; // observer \ publisher-subscriber //
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messangerPage = messangerReducer(
      this._state.messangerPage,
      action
    );

    this._callSubscriber(this._state);
  },
};

export default store;

window.store = store;
