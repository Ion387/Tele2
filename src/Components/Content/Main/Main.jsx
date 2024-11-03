import s from "./Main.module.css";

const Main = (props) => {
  return (
    <div className={s.main}>
      {!props.isMobilePanelShown && <div className={s.section}>Main</div>}
    </div>
  );
};

export default Main;
