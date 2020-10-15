export default (state = {}, action) => {
  switch (action.type) {
    case "RECEIVE_API_DATA":
      return (state = action.payload);
    default:
      return state;
  }
};
