import s from "./NavBar.module.css";
import NavLinkCustom from "./NavLinkCustom/NavLinkCustom";

const NavBar = (props) => {
  const navPanel = props.linksData.map((i) => (
    <NavLinkCustom key={i.linkId} link={i.link} linkName={i.linkName} />
  ));
  const onClickHandler = () => {
    props.toggleMobileNavPanel();
  };
  return (
    <div className={s.main}>
      <div className={s.section}>
        <div className={s.desctopNavPanel}>{navPanel}</div>
        {props.isMobilePanelShown && (
          <div onClick={onClickHandler} className={s.mobileNavPanel}>
            {navPanel}
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
