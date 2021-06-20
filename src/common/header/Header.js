import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Header.css';

import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import InputAdornment from "@material-ui/core/InputAdornment";
import { fade, withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { Icon } from '@material-ui/core';



class Header extends Component {

  render() {


    return (
      <div>
        <div className='app-header'>
          <span className='app-logo'> Image Viewer</span>
          <input placeholder='Search…'
            InputProps={{
              startAdornment: (
                <InputAdornment position='end'>
                  <SearchIcon />
                  {/* <IconButton>
                <Icon>search</Icon>
              </IconButton> */}
                </InputAdornment>
              )
            }} >
          </input>
        </div>


      </div>

    )
  }
}

export default Header