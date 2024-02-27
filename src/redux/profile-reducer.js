const ADD_POST = 'ADD-POST';
const CHANGE_AREA_TEXT = 'CHANGE-AREA-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

// let sum = (a = 1, b = 0) => {
//   return a + b;
// };

// let b = sum();
// console.log(b);
// Тоже самое происходит и здесь let initialState

let initialState = {
  postsData: [
    { postId: 1, message: 'Hi, how are you?', likesCount: 12 },
    { postId: 2, message: 'You are okey?', likesCount: 7 },
    { postId: 3, message: 'Miss you!', likesCount: 3 },
    { postId: 4, message: 'So much!', likesCount: 8 },
  ],
  newTextArea: '',
  profile: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newTextArea,
        likesCount: 0,
      };
      return {
        ...state,
        postsData: [newPost, ...state.postsData],
        newTextArea: '',
      };
    case CHANGE_AREA_TEXT: {
      return { ...state, newTextArea: action.newText };
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    default:
      return state;
  }
};

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};

export const changeAreaTextActionCreator = (text) => {
  return {
    type: CHANGE_AREA_TEXT,
    newText: text,
  };
};

export const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile,
  };
};

export default profileReducer;
