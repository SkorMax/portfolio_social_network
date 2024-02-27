import React from 'react';
import Posts from './Posts';
import {
  addPostActionCreator,
  changeAreaTextActionCreator,
} from '../../../redux/profile-reducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    postsData: state.profilePage.postsData,
    newTextArea: state.profilePage.newTextArea,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addNewPost: () => {
      dispatch(addPostActionCreator());
    },
    changeAreaText: (text) => {
      dispatch(changeAreaTextActionCreator(text));
    },
  };
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;
