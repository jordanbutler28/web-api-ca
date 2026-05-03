import React, { useState } from "react";
import { useNavigate } from "react-router";
import { styled } from '@mui/material/styles';
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AppLogo from '@mui/icons-material/MovieFilter';
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";

//creates spacer div to push content below the header
const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

const SiteHeader = () => {
  //stores element menu is anchored to for positioning, null if menu is closed
  //for mobile menu
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl); //checks if menu is open by checking if anchorEl is not null

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  
  const navigate = useNavigate();
  const goHome = () => {navigate("/");};

  const menuOptions = [
    { label: "Favourites", path: "/movies/favorites" },
    { label: "Watchlist", path: "/movies/watchlist" },
  ];

  const movieMenuOptions = [
    { label: "Upcoming", path: "/movies/upcoming" },
    { label: "Top Rated", path: "/movies/top-rated" },
    { label: "In Cinemas", path: "/movies/in-cinemas" },
    { label: "Trending", path: "/movies/trending" },
  ];

  //for mobile menu
  const handleMenuSelect = (pageURL) => {
    setAnchorEl(null);
    navigate(pageURL);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  //for movies menu
  const [moviesAnchhor, setMoviesAnchor] = useState(null);
  const moviesOpen = Boolean(moviesAnchhor);

  const handleMoviesMenu = (event) => {
    setMoviesAnchor(event.currentTarget);
  };

  const handleMoviesClose = () => {
    setMoviesAnchor(null);
  };

  return (
    <>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <AppLogo sx={{width: 50, height: 45}}></AppLogo>
          <Typography 
            variant="h4" 
            onClick={goHome} 
            sx={{ flexGrow: 1, cursor: "pointer", display: "flex", alignItems: "center", gap: 1 }}>
            Media Hub
          </Typography>
            {isMobile ? (
              <>
                <IconButton
                  aria-label="menu"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={open}
                  onClose={() => setAnchorEl(null)}
                >
                  {movieMenuOptions.map((opt) => (
                  <MenuItem
                    key={opt.label}
                    onClick={() => handleMenuSelect(opt.path)}
                  >
                    {opt.label}
                  </MenuItem>
                ))}
                  {menuOptions.map((opt) => (
                    <MenuItem
                      key={opt.label}
                      onClick={() => handleMenuSelect(opt.path)}
                    >
                      {opt.label}
                    </MenuItem>
                  ))}
                </Menu>
              </>
            ) : (
              <>
                <Button
                  color="inherit"
                  onClick={handleMoviesMenu}>
                    Movies
                </Button>
                <Menu
                  id="movies-menu"
                  anchorEl={moviesAnchhor}
                  open={moviesOpen}
                  onClose={handleMoviesClose}
                >
                  {movieMenuOptions.map((opt) => (
                    <MenuItem
                    key={opt.label}
                    onClick={() => {
                      handleMoviesClose();
                      navigate(opt.path);
                    }}
                  >
                    {opt.label}
                  </MenuItem>
                  ))}
                </Menu>

                {menuOptions.map((opt) => (
                  <Button
                    key={opt.label}
                    color="inherit"
                    onClick={() => handleMenuSelect(opt.path)}
                  >
                    {opt.label}
                  </Button>
                ))}
              </>
            )}
        </Toolbar>
      </AppBar>
      <Offset />
    </>
  );
};

export default SiteHeader;
