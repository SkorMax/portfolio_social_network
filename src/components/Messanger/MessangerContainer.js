import React from 'react';
import Messanger from './Messanger';
import {
  changeTextMessageCreator,
  sendMessageCreator,
} from '../../redux/messanger-reducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    messangerPage: state.messangerPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    changeTextMessage: (text) => {
      dispatch(changeTextMessageCreator(text));
    },
    sendMessage: () => {
      dispatch(sendMessageCreator());
    },
  };
};

const MessangerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Messanger);

export default MessangerContainer;
