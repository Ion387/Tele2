export const toggleMobileNavPanel = () => {return {
  type : "showMobileNavPanel"
  }}

const initialState ={
isMobilePanelShown:false,
linksData:[
  { linkId:"1link",link: "/", linkName: "Преимущества Tele2" },
  { linkId:"2link",link: "/tariffs/", linkName: "Тарифы" },
  { linkId:"3link",link: "/actions/", linkName: "Акции и спецпредложения" },
  { linkId:"4link",link: "/promo/", linkName: "Промотариф Tele2" },
  { linkId:"5link",link: "/eSIM/", linkName: "Технология eSIM" },
  { linkId:"6link",link: "/newAbonent/", linkName: "Подключение нового абонента" },
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