import AccountBoxIcon from "@mui/icons-material/AccountBox";
import FilterHdrIcon from "@mui/icons-material/FilterHdr";
import ExploreIcon from "@mui/icons-material/Explore";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router";
import { useAuth } from "../../contexts/AuthContext";
import "./Header.scss";
import { useState } from "react";

export default function Header() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleProfile = () => {
    setAnchorEl(null);
    if (!currentUser) {
      navigate("/login");
    } else {
      navigate(`/dashboard/${currentUser.uid}`);
    }
  };

  const handleAreas = () => {
    setAnchorEl(null);
    navigate("/areas");
  };

  const handleHome = () => {
    navigate("/");
  };

  const handleLogout = () => {
    setAnchorEl(null);
    logout()
      .then(() => {
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <header className="header">
      <div className="header__profile" onClick={handleProfile}>
        <AccountBoxIcon />
      </div>
      <div className="header__logo" onClick={handleHome}>
        <FilterHdrIcon />
        <h2 className="header__title">UpTrax</h2>
      </div>
      <div className="header__areas">
        <ExploreIcon
          id="basic-button"
          aria-controls="basic-menu"
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        />
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleProfile}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>Match</MenuItem>
          <MenuItem onClick={handleAreas}>Areas</MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </div>
    </header>
  );
}
