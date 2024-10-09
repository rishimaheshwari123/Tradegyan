
const BASE_URL = "https://tradegyan.mahitechnocrafts.in/api/v1";


export const endpoints = {
  LOGIN_API: BASE_URL + "/auth/login",
  SIGNUP_API: BASE_URL + "/auth/register",
  CONTACT: BASE_URL + "/contact/create",
  CREATE_SERVICE: BASE_URL + "/service/create",
  GET_SERVICE: BASE_URL + "/service/getAll",
  GET_SINGLE_SERVICE: BASE_URL + "/service/get",
  CREATE_QUERY: BASE_URL + "/query/create",
  GET_QUERY: BASE_URL + "/query/getAll",
  DELETE_QUERY: BASE_URL + "/query/delete",
  UPDATE_QUERY: BASE_URL + "/query/update"
}

export const adminApis = {
  ALL_USERS: BASE_URL + "/admin/alluser",
  USER_DETAILS: BASE_URL + "/admin/user"
}