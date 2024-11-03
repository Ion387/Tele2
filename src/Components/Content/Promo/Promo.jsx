import s from "./Promo.module.css";

const Promo = (props) => {
  return (
    <div className={s.main}>
      {!props.isMobilePanelShown && <div className={s.section}>Promo</div>}
    </div>
  );
};

export default Promo;
