import Icon from "Pictures/Icons/IconsConrtainer";
import s from "./HamburgerPanel.module.css";

const HamburgerPanel = (props) => {
  const onClickHandler = () => {
    props.toggleMobileNavPanel();
  };
  return (
    <div onClick={onClickHandler} className={s.hamburgerComponent}>
      {props.isMobilePanelShown ? (
        <Icon iconName="closeIcon" />
      ) : (
        <div className={s.hamburgerIcon}>
          <Icon iconName="hamburgerIcon" />
        </div>
      )}
    </div>
  );
};

export default HamburgerPanel;
