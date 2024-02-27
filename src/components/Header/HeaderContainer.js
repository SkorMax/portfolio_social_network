import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { setProfilePhoto } from '../../redux/header-reducer';

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then((response) => {
        this.props.setProfilePhoto(response.data);
      });
  }

  render() {
    return <Header {...this.props} profilePhoto={this.props.profilePhoto} />;
  }
}

let mapStateToProps = (state) => ({
  profilePhoto: state.header.profilePhoto,
});

export default connect(mapStateToProps, { setProfilePhoto })(HeaderContainer);
