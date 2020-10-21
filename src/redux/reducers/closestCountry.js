export default (state = "", action) => {
  switch (action.type) {
    case "RECEIVE_SEARCH_CLOSEST_COUNTRY":
      return (state = action.payload);
    default:
      return state;
  }
};
