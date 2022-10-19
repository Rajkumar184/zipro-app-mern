import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeIcon from "@mui/icons-material/Home";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import InfoIcon from "@mui/icons-material/Info";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import { Link } from "react-router-dom";
import logo from "../assests/img/logo.png";

const Navbar = () => {
  //   const { cartItems } = useContext(GlobalContext);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky" style={{ backgroundColor: "rgb(1, 163, 164)" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            className="title"
            noWrap
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            style={{
              color: "#4b4b4b",
              textDecoration: "none",
              fontSize: "22px",
            }}
          >
            <img
              style={{ maxWidth: "360px", borderRadius: "60%" }}
              src={logo}
              alt="lOGO"
              height="50px"
            />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {/* {pages.map((page) => (
								<MenuItem key={page} onClick={handleCloseNavMenu}>
									<Typography textAlign="center">{page}</Typography>
								</MenuItem>
							))} */}
              <MenuItem onClick={handleCloseNavMenu} component={Link} to="/">
                <HomeIcon />

                <Typography variant="h6"> Home</Typography>
              </MenuItem>
              <MenuItem
                onClick={handleCloseNavMenu}
                component={Link}
                to="/Product"
              >
                <LocalMallIcon />

                <Typography variant="h6"> Order delivery </Typography>
              </MenuItem>

              <MenuItem
                onClick={handleCloseNavMenu}
                component={Link}
                to="/Contact"
              >
                <ContactPageIcon />

                <Typography variant="h6"> Contact sales </Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            className="title"
            noWrap
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            style={{
              color: "#4b4b4b",
              textDecoration: "none",
              fontSize: "22px",
            }}
          >
            <img
              src={logo}
              alt="lOGO"
              height="50px"
              style={{ borderRadius: "60%" }}
            />
          </Typography>
          <Box
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            className="justify-content-md-center"
          >
            {/* {pages.map((page) => (
							<Button
								key={page}
								onClick={handleCloseNavMenu}
								sx={{ my: 2, color: "white", display: "block" }}
							>
								{page}
							</Button>
						))} */}
            <Button
              variant="text"
              component={Link}
              to="/"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Home
            </Button>
            <Button
              variant="text"
              component={Link}
              to="/Product"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Order delivery
            </Button>

            <Button
              variant="text"
              component={Link}
              to="/Contact"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Contact sales
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Login">
              <Button component={Link} to="/login" color="inherit">
                Login / signup
              </Button>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
