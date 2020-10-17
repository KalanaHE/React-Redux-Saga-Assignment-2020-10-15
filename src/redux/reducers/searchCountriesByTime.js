export default (state = 0, action) => {
  switch (action.type) {
    case "RECEIVE_SEARCH_COUNTRIES_BY_TIME":
      return (state = action.payload);
    default:
      return state;
  }
};
