const SET_BACKGROUND_PHOTO = 'SET-BACKGROUND-PHOTO';
const SET_PROFILE_PHOTO = 'SET-PROFILE-PHOTO';

let initialState = {
  profilePhoto: null,
  backgroundPhoto: null,
};

const headerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BACKGROUND_PHOTO: {
      return { ...state, backgroundPhoto: action.backgroundImage };
    }
    case SET_PROFILE_PHOTO: {
      return { ...state, profilePhoto: action.profilePhoto };
    }
    default:
      return state;
  }
};

export const setBackgroundPhoto = (backgroundImage) => {
  return { type: SET_BACKGROUND_PHOTO, backgroundImage };
};

export const setProfilePhoto = (profilePhoto) => {
  return { type: SET_PROFILE_PHOTO, profilePhoto: profilePhoto };
};

export default headerReducer;
