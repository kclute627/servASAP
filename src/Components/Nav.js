import React, { useState } from "react";
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

const theme = createMuiTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: purple[500],
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#11cb5f",
    },
  },
});

const Nav = (props) => {
  const [open, openHandler] = useState(true);

  return (
   
      
        <div
         
          className={open ? "nav__drawer open" : "nav__drawer"}
        >
          <div className='icon'>
            <IconButton onClick={() => openHandler(!open)}>
              {!open ? (
                <ChevronLeftIcon
                  fontSize='large'
                  style={{ color: grey[100] }}
                />
              ) : (
                <ChevronRightIcon
                  fontSize='large'
                  style={{ color: grey[100] }}
                />
              )}
            </IconButton>
          </div>
        </div>
  

  );
};

export default Nav;
