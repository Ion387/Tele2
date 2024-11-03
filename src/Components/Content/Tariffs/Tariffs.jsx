import s from "./Tariffs.module.css";

const Tariffs = (props) => {
  return (
    <div className={s.main}>
      {!props.isMobilePanelShown && <div className={s.section}>Tariffs</div>}
    </div>
  );
};

export default Tariffs;
