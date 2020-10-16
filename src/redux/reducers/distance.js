export default (state = 0, action) => {
  switch (action.type) {
    case "RECEIVE_DISTANCE":
      return (state = action.payload);
    default:
      return state;
  }
};
