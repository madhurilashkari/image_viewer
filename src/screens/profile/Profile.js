import React, { Component } from 'react';
import Header from '../../common/header/Header';
import './Profile.css';
import Avatar from '@material-ui/core/Avatar';

import instaLogo from "../../assets/insta.png";
class Profile extends Component {
    render (){
        return(
            <div>
                 <Header
          title="Image Viewer"
          history={this.props.history}
          showProfilePage="profile"
        />
        <div className="top-container">
          <Avatar className="profile-picture-avatar"
            alt="User Image"
            style={{ cursor: 'pointer' }}
            src={instaLogo}
          />
          </div>

            </div>
        )
    }
}

export default Profile;