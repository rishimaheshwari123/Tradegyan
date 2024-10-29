
const BASE_URL = process.env.REACT_APP_BASE_URL


export const endpoints = {
  LOGIN_API: BASE_URL + "/auth/login",
  SIGNUP_API: BASE_URL + "/auth/register",
  VERIFY_USER_API: BASE_URL + "/auth/verify",
  SINGLE_USER_API: BASE_URL + "/auth/get",
  FETCH_PROFILE: BASE_URL + "/auth/fetchMyProfile",
  GET_ALL_SERVICE: BASE_URL + "/service/getAllServices",




  CONTACT: BASE_URL + "/contact/create",
  CREATE_SERVICE: BASE_URL + "/service/create",
  GET_SERVICE: BASE_URL + "/service/getAll",
  GET_SINGLE_SERVICE: BASE_URL + "/service/get",
  GET_SINGLE_ADMIN_SERVICE: BASE_URL + "/service/get/admin",
  CREATE_QUERY: BASE_URL + "/query/create",
  GET_QUERY: BASE_URL + "/query/getAll",
  DELETE_QUERY: BASE_URL + "/query/delete",
  UPDATE_QUERY: BASE_URL + "/query/update"
}

export const adminApis = {
  ALL_USERS: BASE_URL + "/admin/alluser",
  USER_DETAILS: BASE_URL + "/admin/user"
}


export const paymentEndpoints = {
  PRODUCT_PAYMENT_API: BASE_URL + "/order/capturePayment",
  PRODUCT_VERIFY_API: BASE_URL + "/order/verifyPayment",
  ENROLLED_USER_API: BASE_URL + "/order/enrolledUser",


  // Get all orders



}