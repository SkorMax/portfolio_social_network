const CHANGE_TEXT_MESSAGE = 'CHANGE-TEXT-MESSAGE';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
};

const messangerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let readyText = state.enteringTextMessage;
      return {
        ...state,
        enteringTextMessage: '',
        messagesData: [...state.messagesData, { message: readyText }],
      };
    case CHANGE_TEXT_MESSAGE:
      return { ...state, enteringTextMessage: action.messageText };
    default:
      return state;
  }
};

export const sendMessageCreator = () => {
  return {
    type: SEND_MESSAGE,
  };
};

export const changeTextMessageCreator = (text) => {
  return {
    type: CHANGE_TEXT_MESSAGE,
    messageText: text,
  };
};

export default messangerReducer;
