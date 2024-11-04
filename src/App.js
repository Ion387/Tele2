 import { BrowserRouter } from "react-router-dom"; 
import NavBar from "./Components/NavBar/NavBar";
import Header from "./Components/Header/Header";
import s from "./App.module.css";
import { connect } from "react-redux";
import { toggleMobileNavPanel } from "./Redux/navbarReducer";
import SPARouter from "./SPArouter/SPArouter";

const App = (props) => {
  return (
  <BrowserRouter basename={process.env.PUBLIC_URL}> 
      <div className={s.app}>
        <header className={s.header}>
          <Header
            toggleMobileNavPanel={props.toggleMobileNavPanel}
            isMobilePanelShown={props.isMobilePanelShown}
          />
        </header>
        <nav className={s.navBar}>
          <NavBar
            toggleMobileNavPanel={props.toggleMobileNavPanel}
            isMobilePanelShown={props.isMobilePanelShown}
            linksData={props.linksData}
          />
        </nav>

        <section className={s.content}>
          <div className={s.contentDesctop}>
            <SPARouter />
          </div>

          {!props.isMobilePanelShown && (
            <div className={s.contentMobile}>
              <SPARouter />
            </div>
          )}
        </section>
      </div>
   </BrowserRouter> 
  );
};

const mapStateToProps = (state) => {
  return {
    isMobilePanelShown: state.navBar.isMobilePanelShown,
    linksData: state.navBar.linksData,
  };
};

export default connect(mapStateToProps, { toggleMobileNavPanel })(App);
