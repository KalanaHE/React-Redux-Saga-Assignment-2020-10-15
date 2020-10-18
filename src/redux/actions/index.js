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

export const requestSearchByName = (data) => {
  return {
    type: "REQUEST_SEARCH_COUNTRIES_BY_NAME",
    payload: data,
  };
};

export const receiveSearchByName = (data) => {
  return {
    type: "RECEIVE_SEARCH_COUNTRIES_BY_NAME",
    payload: data,
  };
};

export const requestSearchByTime = (data) => {
  return {
    type: "REQUEST_SEARCH_COUNTRIES_BY_TIME",
    payload: data,
  };
};

export const receiveSearchByTime = (data) => {
  return {
    type: "RECEIVE_SEARCH_COUNTRIES_BY_TIME",
    payload: data,
  };
};

export const changeLoginState = (data) => {
  return {
    type: "CHANGE_LOGIN_STATE",
    payload: data,
  };
};
