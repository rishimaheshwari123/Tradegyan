import { apiConnector } from "../apiConnector";
import { adminApis} from "../apis";
import Swal from "sweetalert2";
import { toast } from "react-toastify"

const 
{
    ALL_USERS,
    USER_DETAILS
} = adminApis

export const getAllUser = async (currentPage, limit, searchQuery, sortOrder) => {
   
    try {
      const response = await apiConnector("GET", ALL_USERS,null,null,{
        currentPage, limit, searchQuery, sortOrder
      });
  
      console.log(response?.data)
      if (!response?.data?.success) {
        throw new Error("Could Not Fetch USER");
      }
  

  
      // Return the filtered list of non-admin users if needed
      return response?.data;
    } catch (error) {
      console.log("GET_ALL_USERS_API ERROR:", error);
      return [];
    }
  };
  


  export const getUserDetails = async (userid) => {
    try {
      const response = await apiConnector("GET", `${USER_DETAILS}/${userid}`);
  
      if (!response?.data?.success) {
        throw new Error("Could Not Fetch User Details");
      }
  
      const result = response?.data?.data;
  
      return result;
    } catch (error) {
      console.log("USER_DETAILS API ERROR:", error);
  
      return [];
    }
  };