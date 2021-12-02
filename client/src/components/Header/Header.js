import AccountBoxIcon from "@mui/icons-material/AccountBox";
import FilterHdrIcon from "@mui/icons-material/FilterHdr";
import ExploreIcon from "@mui/icons-material/Explore";
import { useNavigate } from "react-router";
import { useAuth } from "../../contexts/AuthContext";
import "./Header.scss";

export default function Header() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleProfile = (event) => {
    if (!currentUser) {
      navigate("/login");
    } else {
      navigate(`/dashboard/${currentUser.uid}`);
    }
  };

  return (
    <header className="header">
      <div className="header__profile" onClick={handleProfile}>
        <AccountBoxIcon />
      </div>
      <div className="header__logo">
        <FilterHdrIcon />
        <h2 className="header__title">UpTrax</h2>
      </div>
      <div className="header__areas">
        <ExploreIcon />
      </div>
    </header>
  );
}
