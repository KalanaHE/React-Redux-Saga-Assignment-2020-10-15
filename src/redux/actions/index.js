export const requestDistance = (data) => {
  return {
    type: "REQUEST_DISTANCE",
    payload: data,
  };
};

export const receiveDistance = (data) => {
  return {
    type: "RECEIVE_DISTANCE",
    payload: data,
  };
};
