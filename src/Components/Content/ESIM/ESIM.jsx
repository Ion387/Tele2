import s from "./ESIM.module.css";

const ESIM = (props) => {
  return (
    <div className={s.main}>
      {!props.isMobilePanelShown && <div className={s.section}>ESIM</div>}
    </div>
  );
};

export default ESIM;
