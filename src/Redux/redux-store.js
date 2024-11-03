import { configureStore} from "@reduxjs/toolkit";
import navbarReducer from "./navbarReducer";


let store = configureStore ({
  reducer:{
    navBar: navbarReducer, 

  },

}) 

window.store=store;

export default store;