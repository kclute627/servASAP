

export const initialState = {
    currentPage: "dashboard",
  };
  
  export const nav = (state = initialState, action) => {
    switch (action.type) {
      case "dashboard":
        return { ...state, currentPage: "dashboard" };
      case "jobs":
        return { ...state, currentPage: "jobs" };
      case "invoices":
        return { ...state, currentPage: "invoices" };
      case "account":
        return { ...state, currentPage: "account" };
      case "reports":
        return { ...state, currentPage: "reports" };
      default:
        return state;
    }
  };