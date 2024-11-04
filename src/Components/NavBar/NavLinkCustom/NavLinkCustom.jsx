import s from "./NavLinkCustom.module.css";
import { NavLink } from "react-router-dom";

const NavLinkCustom = (props) => {
  return (
    <NavLink
      key={props.key}
      to={props.link}
      className={(navData) =>
        navData.isActive ? `${s.navLink} ${s.active}` : s.navLink
      }
    >
      <div className={s.navLinkText}>{props.linkName}</div>
    </NavLink>
  );
};

export default NavLinkCustom;
