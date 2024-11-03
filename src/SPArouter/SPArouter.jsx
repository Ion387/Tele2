import Actions from "Components/Content/Actions/Actions";
import ESIM from "Components/Content/ESIM/ESIM";
import Main from "Components/Content/Main/Main";
import NewAbonent from "Components/Content/NewAbonent/NewAbonent";
import Promo from "Components/Content/Promo/Promo";
import Tariffs from "Components/Content/Tariffs/Tariffs";
import { Route, Routes } from "react-router-dom";

const SPArouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/tariffs" element={<Tariffs />} />
      <Route path="/actions" element={<Actions />} />
      <Route path="/promo" element={<Promo />} />
      <Route path="/eSIM" element={<ESIM />} />
      <Route path="/newAbonent" element={<NewAbonent />} />
    </Routes>
  );
};

export default SPArouter;
