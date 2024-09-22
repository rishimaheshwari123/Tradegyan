import { setUser, setToken } from "../../redux/authSlice";
import { apiConnector } from "../apiConnector";
import { endpoints } from "../apis";
import Swal from "sweetalert2";
import { toast } from "react-toastify"
const { LOGIN_API, SIGNUP_API } = endpoints;



export async function signUp(formData, navigate, dispatch) {

  Swal.fire({
    title: "Loading",
    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: false,
    showConfirmButton: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });
  try {
    const response = await apiConnector("POST", SIGNUP_API, formData);

    console.log("SIGNUP API RESPONSE............", response);

    if (!response.data.success) {
      // toast.error(response.data.message)
      throw new Error(response.data.message);
    }
    Swal.fire({
      title: `Register Successfully!`,
      text: `Have a nice day!`,
      icon: "success",
    });
    navigate("/");
  } catch (error) {
    console.log("SIGNUP API ERROR............", error);
  }
  Swal.close();

}

export async function login(email, password, navigate, dispatch) {
  Swal.fire({
    title: "Loading",
    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: false,
    showConfirmButton: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });

  try {
    const response = await apiConnector("POST", LOGIN_API, {
      email,
      password,
    });
    Swal.close();
    if (!response?.data?.success) {
      await
        Swal.fire({
          title: "Login Failed",
          text: response.data.message,
          icon: "error",
        });
      throw new Error(response.data.message);
    }

    Swal.fire({
      title: `Login Successfully!`,
      text: `Have a nice day!`,
      icon: "success",
    });
    dispatch(setToken(response?.data?.token));
    dispatch(setUser(response.data.user));
    navigate("/admin/dashboard");
  } catch (error) {
    console.log("LOGIN API ERROR............", error);
    Swal.fire({
      title: "Login Failed",
      text:
        error.response?.data?.message ||
        "Something went wrong, please try again later",
      icon: "error",
    });
  }
}





export function logout(navigate) {
  return (dispatch) => {
    dispatch(setToken(null))
    dispatch(setUser(null))

    localStorage.removeItem("token")
    localStorage.removeItem("user")
    toast.success("Logged Out")
    navigate("/")

  }
}