const registerState = {
  firstname:'',
  lastname:'',  
  username: "",
  password: "",
    
  };
  
   export const registerReducer = (state = registerState, action) => {
    switch (action.type) {
      case 'ONCHANGE_FIRSTNAME':
        return {
          ...state,firstname:action.payload
        }
      case 'ONCHANGE_LASTNAME':
        return {
          ...state, lastname:action.payload
        }
      case "ONCHANGE_USERNAME":
        return {
          ...state,
          username: action.payload,
        };
      case "ONCHANGE_PASSWORD":
        return {
          ...state,
          password: action.payload,
        };
  
      default:
          return state
  
    }
  };
  