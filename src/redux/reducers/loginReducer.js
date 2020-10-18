export default (state = false, action) => {
  switch (action.type) {
    case "CHANGE_LOGIN_STATE":
      return (state = action.payload);
    default:
      return state;
  }
};
