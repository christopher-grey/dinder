import React, { Component } from 'react';
import "./Header.css";
import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from "@mui/icons-material/Forum";
import IconButton from "@material-ui/core/IconButton";

function Header() {
    return (
      // BEM
      <div className="header">
        <IconButton>
          <PersonIcon className="header__icon" fontSize="large" />
        </IconButton>
        <img
          className="header__logo"
          src="https://www.pngkit.com/png/detail/73-730019_tinder-logo-transparent-tinder-logo-png.png"
          alt="tinder logo"
        />
        <IconButton>
          <ForumIcon className="header__icon" fontSize="large" />
        </IconButton>
      </div>
    );
}

export default Header;