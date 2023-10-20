import { Button } from "@mui/base";
import { Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";
import './SideNavMenu.css';


function SideNavMenu({navShow}) {
    const [navBar, setNavbarState] = useState(navShow);
    const navigate = useNavigate();
  
      const toggleDrawer = (open) => () => {
          setNavbarState(open);
          console.log("side" + navBar)
        };
      function navigateToPages(navItem){
        if(navItem.text === "Home"){
          navigate('/');
        }
        else if(navItem.text === "About"){
          navigate('/about');
        }
        else if(navItem.text === "Product"){
          navigate('/product');
        }
        else if(navItem.text === "Contact us"){
          navigate('/contactus');
        }
  
      }
      const list = () => (
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onKeyDown={toggleDrawer(false)}
          >
  
            <div className='nav-back-button'>
              <Button onClick={toggleDrawer(false)}><ArrowBackIcon></ArrowBackIcon></Button>
            </div>
            
            <List>
              {['Home', 'About', 'Product', 'Contact us'].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton >
                    <ListItemText primary={text} onClick={() => navigateToPages({text})}/>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        );
    return(
        <>
            <div>
                <Drawer
                    open={navBar}
                    onClose={toggleDrawer(false)}
                >
                    {list()}
                </Drawer>
            </div>
        </>
    )
}

export default SideNavMenu;