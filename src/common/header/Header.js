
import React, { Component } from 'react';
import "./Header.css";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import Avatar from "@material-ui/core/Avatar";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import instaLogo from "../../assets/insta.png";



class Header extends Component {

  render() {

    return (
      <div>
        <div className='app-header'>
          <span className='app-logo'> Image Viewer</span>

          <div className="header-right">
              <Input
                id="search-box"
                type="search"
                className="search-field"
                variant="outlined"
                placeholder="Search…"
                startAdornment={
                  <InputAdornment
                    variant="standard"
                    position="start"
                    id="searchBoxIcon"
                    style={{ backgroundColor: "#c0c0c0" }}
                  >
                    <SearchOutlinedIcon />
                  </InputAdornment>
                }
                disableUnderline={true}
              />
              <Avatar
                alt="Remy Sharp"
                src={instaLogo}
                className="icon-large"
              
              />
             
            </div>
        </div>


      </div>

    )
  }
}

export default Header