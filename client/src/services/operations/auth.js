import { setUser, setToken } from "../../redux/authSlice";
import { apiConnector } from "../apiConnector";
import { endpoints } from "../apis";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
const {
  LOGIN_API,
  SIGNUP_API,
  CONTACT,
  CREATE_SERVICE,
  GET_SERVICE,
  GET_SINGLE_SERVICE,
  CREATE_QUERY,
  GET_QUERY,
  DELETE_QUERY,
  UPDATE_QUERY,
  FETCH_PROFILE,
  GET_ALL_SERVICE,
  GET_SINGLE_ADMIN_SERVICE,
  SINGLE_USER_API,
  VERIFY_USER_API
} = endpoints;

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
    dispatch(setToken(response?.data?.token));
    dispatch(setUser(response?.data?.user));
    localStorage.setItem("user", JSON.stringify(response.data.user));

    localStorage.setItem("token", JSON.stringify(response.data.token));

    navigate("/");
  } catch (error) {
    console.log("SIGNUP API ERROR............", error);
  }
  Swal.close();
}
export async function verifyUserApi(name, password, id) {
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
    const response = await apiConnector("PUT", `${VERIFY_USER_API}/${id}`, { name, password });

    console.log("Verify API RESPONSE............", response);

    if (!response.data.success) {
      // toast.error(response.data.message)
      throw new Error(response.data.message);
    }
    return response?.data;


  } catch (error) {
    console.log("Verify API ERROR............", error);
  }
  Swal.close();
}

export async function login(name, password, navigate, dispatch) {
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
      name,
      password,
    });
    Swal.close();
    if (!response?.data?.success) {
      await Swal.fire({
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
    console.log("LOGIN API ERROR............", error?.response);
    Swal.fire({
      title: "Login Failed",
      text:
        error.response?.data?.message ||
        "Something went wrong, please try again later",
      icon: "error",
    });
  }
}

export function fetchMyProfile(token, navigate) {
  return async (dispatch) => {
    try {
      const response = await apiConnector("GET", FETCH_PROFILE, null, {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      });

      // console.log("APP JS RESPONSE............", response)

      if (!response?.data?.success) {
        throw new Error(response?.data?.message);
      }
      // console.log(response.data)

      dispatch(setUser(response?.data?.user));

      localStorage.setItem("user", JSON.stringify(response?.data?.user));
    } catch (error) {
      console.log(
        "LOGIN API ERROR............",
        error?.response?.data?.message
      );

      if (
        error?.response?.data?.message === "Token expired" ||
        error?.response?.data?.message === "token is invalid"
      ) {
        Swal({
          title: "Session Expired",
          text: "Please log in again for security purposes.",
          icon: "warning",
          button: "Login",
        }).then(() => {
          dispatch(logout(navigate));
          navigate("/client-login"); // Redirect to login page
        });
      }
    }
  };
}

export function logout(navigate) {
  return (dispatch) => {
    dispatch(setToken(null));
    dispatch(setUser(null));

    localStorage.removeItem("token");
    localStorage.removeItem("user");
    toast.success("Logged Out");
    navigate("/");
  };
}

export const sendContactForm = async (formData) => {
  Swal.fire({
    title: "Loading...",
    text: "Please wait while we process your request.",
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });
  try {
    const response = await apiConnector("POST", CONTACT, formData);
    if (response?.data) {
      Swal.fire({
        title: "Good job!",
        text: "Your message has been sent successfully!",
        icon: "success",
      });
    }
    return response;
  } catch (error) {
    console.log(error);
    Swal.fire({
      title: "Error!",
      text: "There was a problem sending your message. Please try again later.",
      icon: "error",
    });
  }
};

export const createService = async (serviceData, token) => {
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
    const response = await apiConnector("POST", CREATE_SERVICE, serviceData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.data.success) {
      throw new Error(response.data.message);
    }
    Swal.fire({
      title: response?.data?.message,
      icon: "success",
    });
    return response?.data?.success;
  } catch (error) {
    console.error("Error creating service:", error);
    Swal.fire({
      title: error?.response?.data?.message,
      icon: "error",
    });
  }
};

export const getAllService = async () => {
  try {
    const response = await apiConnector("GET", GET_SERVICE);
    const result = response?.data?.services;
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const getAllServices = async (token) => {
  try {

    const response = await apiConnector("GET", GET_ALL_SERVICE, null, {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    });
    if (!response?.data?.success) {
      return []
    }
    const result = response?.data?.services;
    return result;
  } catch (error) {
    console.log(error);
    return []
  }
};


export const getSingelService = async (id) => {
  try {
    const response = await apiConnector("GET", `${GET_SINGLE_SERVICE}/${id}`);
    const result = response?.data?.service;
    return result;
  } catch (error) {
    console.log(error);
  }
};
export const getSingelServiceAdmin = async (id) => {
  try {
    const response = await apiConnector("GET", `${GET_SINGLE_ADMIN_SERVICE}/${id}`);
    const result = response?.data?.service;
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const createQueryApi = async (formData) => {
  Swal.fire({
    title: "Loading...",
    text: "Please wait while we process your request.",
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });

  try {
    const response = await apiConnector("POST", CREATE_QUERY, formData);

    // Check if the request was successful
    if (!response?.data?.success) {
      throw new Error(response?.data?.message || "Failed to process request.");
    }

    return response?.data?.success;
  } catch (error) {
    console.error(error);

    // Error message
    Swal.fire({
      title: "Error!",
      text:
        error?.message ||
        "There was a problem sending your message. Please try again later.",
      icon: "error",
    });
  }
};

export const getQueryApi = async () => {
  try {
    const response = await apiConnector("GET", GET_QUERY);
    if (!response?.data?.success) {
      throw new Error(response?.data?.message);
    }
    return response?.data?.queries;
  } catch (error) {
    console.log(error);
    Swal.fire({
      title: "Error!",
      text: "There was a problem sending your message. Please try again later.",
      icon: "error",
    });
  }
};

export const deleteQueryApi = async (id) => {
  try {
    const response = await apiConnector("DELETE", `${DELETE_QUERY}/${id}`);
    if (!response?.data?.success) {
      throw new Error(response?.data?.message);
    }

    Swal.fire({
      title: "Success!",
      text: response?.data?.message,
      icon: "success",
    });
  } catch (error) {
    console.log(error);
    Swal.fire({
      title: "Error!",
      text: "There was a problem sending your message. Please try again later.",
      icon: "error",
    });
  }
};

export const updateQueryApi = async (id, updatedData) => {
  try {
    const response = await apiConnector(
      "PUT",
      `${UPDATE_QUERY}/${id}`,
      updatedData
    );

    if (!response?.data?.success) {
      throw new Error(response?.data?.message);
    }

    Swal.fire({
      title: "Success!",
      text: response?.data?.message,
      icon: "success",
    });
  } catch (error) {
    console.log(error);
    Swal.fire({
      title: "Error!",
      text: "There was a problem updating the query. Please try again later.",
      icon: "error",
    });
  }
};


export const getSingleUserApi = async (id) => {
  try {
    const response = await apiConnector("GET", `${SINGLE_USER_API}/${id}`);
    if (!response?.data?.success) {
      throw new Error(response?.data?.message)
    }
    return response?.data?.user

  } catch (error) {
    console.log(error)
  }
}