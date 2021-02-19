import React, { useState} from "react";
import SVG from "react-inlinesvg";
import { Link } from "react-router-dom";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import IconButton from "@material-ui/core/IconButton";
import { grey } from "@material-ui/core/colors";
import Avatar from "@material-ui/core/Avatar";
import logo from "../Assets/logo-white.png";

import { navList } from "../Utils/utils";

const Nav = ({ dispatch }) => {
  const [open, openHandler] = useState(true);

  return (
    <div className={!open ? "nav__drawer open" : "nav__drawer"}>
      <div className='nav__drawer-top'>
        <Link to='/'>
          <Avatar
            alt='logo'
            src={logo}
            className={open ? "avatar-open" : "avatar"}
          />
        </Link>

        <span></span>
      </div>
      <div className={open ? "nav__drawer-middle" : "nav__drawer-middle mg"}>
        {navList.map((link, i ) => (
          <Link to={link.link} key={i}>
            <li
              className='nav__drawer-items'
              onClick={() => dispatch({ type: `${link.type}` })}
            >
              <SVG
                className='nav__drawer-items-icon'
                src={link.icon}
                title=' '
              />
              {open ? (
                <div className='nav__drawer-items-text'>{link.text}</div>
              ) : null}
            </li>{" "}
          </Link>
        ))}
      </div>
      <div className='nav__drawer-bottom'>
        <div className='icon'>
          <IconButton onClick={() => openHandler(!open)}>
            {open ? (
              <ChevronLeftIcon fontSize='large' style={{ color: grey[100] }} />
            ) : (
              <ChevronRightIcon fontSize='large' style={{ color: grey[100] }} />
            )}
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Nav;
