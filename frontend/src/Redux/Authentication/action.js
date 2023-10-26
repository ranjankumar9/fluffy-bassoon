import { POST_DATA_FAIL, POST_DATA_REQUEST, POST_DATA_SUCCESS } from "./actionType"

export const loginRequestAction = () => {
  return { type: POST_DATA_REQUEST };
};

export const loginSuccessAction = (payload) => {
  return { type: POST_DATA_SUCCESS, payload };
};

export const loginFailureAction = () => {
  return { type: POST_DATA_FAIL };
};

