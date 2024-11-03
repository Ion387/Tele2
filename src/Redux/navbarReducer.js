export const toggleMobileNavPanel = () => {return {
  type : "showMobileNavPanel"
  }}

const initialState ={
isMobilePanelShown:false,
linksData:[
  { link: "/", linkName: "Преимущества Tele2" },
  { link: "/tariffs/", linkName: "Тарифы" },
  { link: "/actions/", linkName: "Акции и спецпредложения" },
  { link: "/promo/", linkName: "Промотариф Tele2" },
  { link: "/eSIM/", linkName: "Технология eSIM" },
  { link: "/newAbonent/", linkName: "Подключение нового абонента" },
]
}

const navbarReducer =(state=initialState, action)=> {

  switch (action.type) {
  
  case"showMobileNavPanel": 
      return {
        ...state,
        isMobilePanelShown:!state.isMobilePanelShown}

  default: return state
    }}



export default navbarReducer