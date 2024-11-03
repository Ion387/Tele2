import Icon from "Pictures/Icons/IconsConrtainer";
import HamburgerPanel from "./HamburgerPanel/HamburgerPanel";
import s from "./Header.module.css";

const Header = (props) => {
  return (
    <div className={s.main}>
      <div className={s.section}>
        <div className={s.headerFlex}>
          <div className={s.logo}>
            <div className={s.logoDesctop}>
              <Icon iconName="logoIcon" />
            </div>
            <div className={s.logoMobile}>
              <Icon iconName="logoMobileIcon" />
            </div>
          </div>
          <div className={s.rightBlock}>
            <div className={s.locationDesctop}>
              <div className={s.locationIcon}>
                <Icon iconName="locationIcon" />
              </div>
              <div className={s.locationText}>Москва и область</div>
            </div>

            {props.isMobilePanelShown && (
              <div className={s.locationMobile}>
                <div className={s.locationIcon}>
                  <Icon iconName="locationMobileIcon" />
                </div>
                <div className={s.locationText}>Москва и область</div>
              </div>
            )}

            <div className={s.notification}>
              <Icon iconName="notificationIcon" />
            </div>
            <div className={s.hamburgerPanel}>
              <HamburgerPanel
                isMobilePanelShown={props.isMobilePanelShown}
                toggleMobileNavPanel={props.toggleMobileNavPanel}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
