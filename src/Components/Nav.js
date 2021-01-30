import React, { useState, useReducer } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { grey, purple } from "@material-ui/core/colors";
import Avatar from "@material-ui/core/Avatar";
import logo from "../Assets/logo.png";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import DashboardIcon from "@material-ui/icons/Dashboard";

const initialState = {
  currentPage: "dashboard",
};


const Nav = ({dispatch}) => {
  const [open, openHandler] = useState(true);
 

  return (
    <div className={!open ? "nav__drawer open" : "nav__drawer"}>
      <div className="nav__drawer-top">
        <Avatar
          alt="logo"
          src={logo}
          className={open ? "avatar-open" : "avatar"}
        />
        <span></span>
      </div>
      <div className={open ? "nav__drawer-middle" : "nav__drawer-middle mg"}>
        <List>
          <ListItem
            button
            key="1"
            className="listItem"
            style={{ color: "white", fontSize: "2rem", marginBottom: "1rem" }}
            onClick={()=>dispatch({type: 'dashboard'})}
          >
            <ListItemIcon style={{ color: "white" }}>
              <DashboardIcon fontSize="large" />
            </ListItemIcon>
            {open && (
              <ListItemText
                primary="Dashboard"
                style={{ transition: "all 11.5s" }}
              />
            )}
          </ListItem>
          <ListItem
            button
            key="10"
            style={{ color: "white", marginBottom: "1rem" }}
            onClick={()=>dispatch({type: 'jobs'})}
          >
            <ListItemIcon>
              <AssignmentIndIcon style={{ color: "white" }} fontSize="large" />
            </ListItemIcon>
            {open && <ListItemText primary="Jobs" />}
          </ListItem>
          <ListItem
            button
            key="21"
            style={{ color: "white", fontSize: "2rem", marginBottom: "1rem" }}
            onClick={()=>dispatch({type: 'invoices'})}
          >
            <ListItemIcon>
              <AttachMoneyIcon style={{ color: "white" }} fontSize="large" />
            </ListItemIcon>
            {open && <ListItemText primary="Invoices" />}
          </ListItem>
          <ListItem
            button
            key="31"
            style={{ color: "white", marginBottom: "1rem" }}
            onClick={()=>dispatch({type: 'reports'})}
          >
            <ListItemIcon>
              <AssignmentIndIcon style={{ color: "white" }} fontSize="large" />
            </ListItemIcon>
            {open && <ListItemText primary="Reports" id="text" />}
          </ListItem>
          <ListItem
            button
            key="41"
            style={{ color: "white", marginBottom: "1rem" }}
            onClick={()=>dispatch({type: 'account'})}
          >
            <ListItemIcon style={{ color: "white", padding: 0 }}>
              <AccountCircleIcon
                style={{ color: "white", padding: 0 }}
                fontSize="large"
              />
            </ListItemIcon>
            {open && <ListItemText primary="Account" />}
          </ListItem>
        </List>
      </div>
      <div className="nav__drawer-bottom">
        <div className="icon">
          <IconButton onClick={() => openHandler(!open)}>
            {open ? (
              <ChevronLeftIcon fontSize="large" style={{ color: grey[100] }} />
            ) : (
              <ChevronRightIcon fontSize="large" style={{ color: grey[100] }} />
            )}
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Nav;
