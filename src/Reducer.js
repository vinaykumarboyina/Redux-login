const initialState = {
  username: "",
  password: "",
  
};

 export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
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
