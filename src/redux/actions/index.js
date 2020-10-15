export const requestAPIData = (data) => {
  return {
    type: "REQUEST_API_DATA",
    payload: data,
  };
};

export const receiveAPIData = (data) => {
  return {
    type: "RECEIVE_API_DATA",
    payload: data,
  };
};
