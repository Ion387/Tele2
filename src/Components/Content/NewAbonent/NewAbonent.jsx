import s from "./NewAbonent.module.css";

const NewAbonent = (props) => {
  return (
    <div className={s.main}>
      {!props.isMobilePanelShown && <div className={s.section}>NewAbonent</div>}
    </div>
  );
};

export default NewAbonent;
