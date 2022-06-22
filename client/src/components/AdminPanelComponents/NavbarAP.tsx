import * as React from 'react';
import {Link, useNavigate} from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Modulo from "../../assets/img/LogoModulo.png"
import "../../styles/NavbarAP.scss";
import {isAuth, signout} from "../../helpers/auth";


const NavbarAP = () => {

  const navigate = useNavigate();

  const [username, setUsername] = React.useState('User');
  const [institute, setInstitute] = React.useState('Institute');

  React.useEffect(()=>{
    if(isAuth()){
      setUsername(isAuth().firstName + " " + isAuth().lastName);
      setInstitute(isAuth().institutes[0].instituteName);
    }
  })

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);


  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };


  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky">
      <Container className="admin-panel-navbar"  maxWidth="xl">
        <Toolbar disableGutters>
        <div className="adminpanel-topLeft">
          <Link to="/"><img src={Modulo} alt="logo" className="adminpanel-topbar-logo"/></Link>
        </div>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'poppins',
              fontWeight: 500,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <span className="adminpanel-navbar-Iname">{institute}</span>
          </Typography>
          
            <Typography
              variant="h6"
              noWrap
              align="center"
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                flexGrow: 1,
                fontFamily: 'poppins',
                fontWeight: 500,
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
                <span className="adminpanel-navbar-Iname">{institute}</span> 
              </Typography>
          

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              
                <Avatar alt={username} src="/static/images/avatar/2.jpg" />
            
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography className="AP-Userdropdown-Name" textAlign="center" style={{ fontWeight: 700 }}>{username}</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Link to="/admin-panel/myprofile" className="AP-Userdropdown-myprofile"><Typography className="AP-Userdropdown-Item" textAlign="center">My Profile</Typography></Link>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography 
                    className="AP-Userdropdown-Item" 
                    textAlign="center"
                    onClick={() => {
                      signout(() => {
                        navigate('/');
                      })
                    }}
                    >Log out</Typography>
                </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavbarAP;
