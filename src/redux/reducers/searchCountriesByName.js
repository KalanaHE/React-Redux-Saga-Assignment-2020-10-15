export default (state = 0, action) => {
  switch (action.type) {
    case "RECEIVE_SEARCH_COUNTRIES_BY_NAME":
      return (state = action.payload);
    default:
      return state;
  }
};
