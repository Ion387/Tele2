import s from "./Actions.module.css";

const Actions = (props) => {
  return (
    <div className={s.main}>
      {!props.isMobilePanelShown && <div className={s.section}>Actions</div>}
    </div>
  );
};

export default Actions;
