
const BASE_URL = process.env.REACT_APP_BASE_URL;


export const endpoints = {
  LOGIN_API: BASE_URL + "/auth/login",
  SIGNUP_API: BASE_URL + "/auth/register",
  CONTACT: BASE_URL + "/contact/create",
  CREATE_SERVICE: BASE_URL + "/service/create",
  GET_SERVICE: BASE_URL + "/service/getAll"
}

