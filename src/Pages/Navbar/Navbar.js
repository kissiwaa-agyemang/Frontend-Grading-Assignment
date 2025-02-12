import React, { useState } from "react";
import ".//Navbar.css"
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import { Link } from 'react-router-dom';
import {
  Box,
  Drawer,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  List,
  ListItem,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";


const Navbar = () => {
  const [openMenu, setopenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      text: "FAQ",
      icon: <InfoIcon />,
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
    },
    {
      text: "Missing Grade Report",
      icon: <CommentRoundedIcon />,
    },
    
  ];
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex bg-white py-4">
        <div className="navbar-link-container">
        
        
          <Link to="/FAQ">
          <button className="">FAQ</button>
          </Link>

          <Link to="/GradeReport">
          <button className="">GradeReport</button>
          </Link>

          <Link to="/MissingGradeReport ">
          <button className="">
            <BsCart2 className="navbar-MissingGradeReport-icon" />
          </button>
          </Link>
          <Link to="/Login"> 
          <button className="primary-button">login</button>
          </Link>
          

          <div className="navbar-menu-container">
            <HiOutlineBars3 onClick={() => setopenMenu(true)} />
          </div>
          <Drawer
            open={openMenu}
            onClose={() => setopenMenu(false)}
            anchor="right"
          >
            <Box
              sx={{ width: 250 }}
              role="presentation"
              onClick={() => setopenMenu(false)}
              onKeyDown={() => setopenMenu(false)}
            >
              <List>
                {menuOptions.map((item) => (
                  <ListItem key={item.text} disablePadding>
                    <ListItemButton>
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.text} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Drawer>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
