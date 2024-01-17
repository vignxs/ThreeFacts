import * as React from "react";
import {
  AppBar,
  Divider,
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Toolbar,
  Drawer,
  Button,
  Menu,
  MenuItem,
  CssBaseline,
} from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { useState, MouseEvent } from "react";
// import jwtDecode, { JwtPayload } from "jwt-decode";
import { axiosInstance } from "./AxiosHelper";
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import { Link , useLocation} from "react-router-dom";
import SchoolIcon from "@mui/icons-material/School";

const drawerWidth = 240;
interface Props {
  window?: () => Window;
}



interface Props {
  window?: () => Window;
  children: React.ReactElement;
}



function ElevationScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const ProfileButton: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [username, setUsername] = React.useState("Admin");

  // interface DecodedToken extends JwtPayload {
  //   email: string;
  //   token_type: string;
  //   exp: number; // Token expiration timestamp
  //   iat: number; // Token issued timestamp
  //   jti: string; // JSON Token Identifier (unique token identifier)
  // }


  React.useEffect(() => {
  //   // Check if user is already logged in
    const token = localStorage.getItem('access_token');
    if (token) {
  //     const decodedToken: DecodedToken = jwtDecode(token);
  //     console.log(decodedToken);
      setIsLoggedIn(true);
  //     setUsername(decodedToken.email.split("@")[0]);
    }
  }, []);

  const handleMenuOpen = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  // const signOut = useSignOut();
  const handleLogin = () => {
    setIsLoggedIn(true);
    const userInfo = { id: 1, name: "JohnDoe" };
    setUsername(userInfo.name);
    // setUserInfoInSession(userInfo);
  };
  
  const handleLogout = () => {
    axiosInstance.post('users/logout/blacklist/',{
      refresh_token: localStorage.getItem('refresh_token')
    });
    console.log(localStorage.getItem('refresh_token'))
    // signOut()
    setIsLoggedIn(false);
    setUsername("");
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
  };

  return (
    <>
      {isLoggedIn ? (
        <>
          <Button onClick={handleMenuOpen}>{username}</Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem
              component={Link}
              to="/myaccount"
              onClick={handleMenuClose}
            >
              My Account
            </MenuItem>
            <MenuItem component={Link} to="/" onClick={handleMenuClose}>
              BMI Calculator
            </MenuItem>
            <MenuItem component={Link} to="/register" onClick={handleLogout}>
              Signup
            </MenuItem>
            <MenuItem component={Link} to="/signin" onClick={handleLogout}>
              Logout
            </MenuItem>
          </Menu>
        </>
      ) : (
        <Button component={Link} to="/signin" onClick={handleLogin}>
          Login
        </Button>
      )}
    </>
  );
};


export default function ResponsiveAppBar(props: Props) {

   const CustomListItemButton = ({ component, to, children, style }) => (
     <ListItemButton component={component} to={to} style={style}>
       {children}
     </ListItemButton>
   );

   const { window } = props;
   const [mobileOpen, setMobileOpen] = React.useState(false);

   const handleDrawerToggle = () => {
     setMobileOpen(!mobileOpen);
   };
    const location = useLocation();

   const drawer = (
     <div>
       <Toolbar />
       <Divider />
       <List>
         {["Three Facts", "AI Game", "TF with memory"].map((text, index) => {
           const path = `/${text.replace(/\s+/g, "").toLowerCase()}`;
           const isCurrentPage = location.pathname === path;
           const listItemStyle = isCurrentPage
             ? {
                 borderRadius: 8, // Adjust the border radius as needed
                 margin: "8px", // Add margin to match the design
                 "&:hover": {
                   backgroundColor: "#f0f0f0", // Change hover color as needed
                 },
                 boxShadow: `rgba(3, 3, 3, 0.1) 0px 2px 10px`,
                 backgroundColor: "#90caf9", // Change hover color as needed
               }
             : {
                 borderRadius: 8, // Adjust the border radius as needed
                 margin: "8px", // Add margin to match the design
                 "&:hover": {
                   backgroundColor: "#f0f0f0", // Change hover color as needed
                 },
               };

           return (
             <ListItem key={text} disablePadding>
               <CustomListItemButton
                 component={Link}
                 to={path}
                 style={listItemStyle}
               >
                 <ListItemIcon>
                   {index % 2 === 0 ? (
                     <BubbleChartIcon />
                   ) : (
                     <SportsEsportsIcon />
                   )}
                 </ListItemIcon>
                 <ListItemText primary={text} />
               </CustomListItemButton>
             </ListItem>
           );
         })}
       </List>
       <Divider />
       <List>
         {["PySkillScale"].map((text, index) => {
           const path = `/${text.replace(/\s+/g, "").toLowerCase()}`;
           const isCurrentPage = location.pathname === path;
           const listItemStyle = isCurrentPage
             ? {
                 borderRadius: 8, // Adjust the border radius as needed
                 margin: "8px", // Add margin to match the design
                 "&:hover": {
                   backgroundColor: "#f0f0f0", // Change hover color as needed
                 },
                 boxShadow: `rgba(3, 3, 3, 0.1) 0px 2px 10px`,
                 backgroundColor: "#90caf9", // Change hover color as needed
               }
             : {
                 borderRadius: 8, // Adjust the border radius as needed
                 margin: "8px", // Add margin to match the design
                 "&:hover": {
                   backgroundColor: "#f0f0f0", // Change hover color as needed
                 },
               };

           return (
             <ListItem key={text} disablePadding>
               <CustomListItemButton
                 component={Link}
                 to={path}
                 style={listItemStyle}
               >
                 <ListItemIcon>
                   {index % 2 === 0 ? <SchoolIcon /> : <SchoolIcon />}
                 </ListItemIcon>
                 <ListItemText primary={text} />
               </CustomListItemButton>
             </ListItem>
           );
         })}
       </List>
     </div>
   );

   const container =
     window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        backgroundColor: `rgb(244, 246, 248)`,
      }}
    >
      <CssBaseline />
      <ElevationScroll>
        <AppBar
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
            backgroundColor: "#FFFFFF",
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box width={60} height={60}>
                <img
                  src="/logo.png"
                  loading="lazy"
                  alt="Logo"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </Box>
              <Typography
                variant="h5"
                noWrap
                component="a"
                href="/"
                sx={{
                  fontWeight: 500,
                  letterSpacing: ".02rem",
                  color: "#000000",
                  textDecoration: "none",
                }}
              >
                SnowDrop.ai
              </Typography>
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <ProfileButton />
            </Box>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              boxShadow: "4px 0 6px -1px rgba(0,0,0,0.2)",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              boxShadow: `rgba(3, 3, 3, 0.08) 0px 2px 8px`,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          backgroundColor: `rgb(244, 246, 248)`,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {props.children}
      </Box>
    </Box>
  );
}
