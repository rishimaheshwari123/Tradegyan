import React, { useEffect, useState } from "react";
import {
  FaTimes, // Cross icon
} from "react-icons/fa";
import {
  AiOutlineWhatsApp,
  AiFillEye,
  AiFillEyeInvisible,
  AiFillCheckCircle,
} from "react-icons/ai";
import { MdDoNotDisturbOn } from "react-icons/md";
import PasswordStrengthMeter from "../../../components/comman/PasswordStrength";
import { signUp } from "../../../services/operations/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
const Complain = () => {
  const [showModal, setShowModal] = useState(true);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [sameAsContact, setSameAsContact] = useState(false);
  const [password, setPassword] = useState("");
  const [validation, setValidation] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const uppercasePassword = uppercaseRegExp.test(password);
    const lowercasePassword = lowercaseRegExp.test(password);
    const digitsPassword = digitsRegExp.test(password);
    const specialCharPassword = specialCharRegExp.test(password);
    const minLengthPassword = minLengthRegExp.test(password);

    if (!minLengthPassword) {
      return toast.error("Password Too Short");
    } else if (!uppercasePassword) {
      return toast.error("At least have one Uppercase");
    } else if (!lowercasePassword) {
      return toast.error("At least have one Lowercase");
    } else if (!digitsPassword) {
      return toast.error("At least have one digit");
    } else if (!specialCharPassword) {
      return toast.error("At least have one special character");
    }

    if (email && contactNumber && whatsappNumber && password) {
      await signUp(
        { name, email, contactNumber, whatsappNumber, password },
        navigate,
        dispatch
      );
    } else {
      alert("Please fill all required fields.");
    }
  };

  const handleContactNumberChange = (e) => {
    const value = e.target.value;
    setContactNumber(value);
    if (sameAsContact) {
      setWhatsappNumber(value);
    }
  };

  const handleWhatsappNumberChange = (e) => {
    if (!sameAsContact) {
      setWhatsappNumber(e.target.value);
    }
  };

  const handleCheckboxChange = (e) => {
    const checked = e.target.checked;
    setSameAsContact(checked);
    if (checked) {
      setWhatsappNumber(contactNumber);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleOnChange = (e) => {
    setPassword(e.target.value);
    setValidation(e.target.value.length > 0);
  };

  const uppercaseRegExp = /(?=.*?[A-Z])/;
  const lowercaseRegExp = /(?=.*?[a-z])/;
  const digitsRegExp = /(?=.*?[0-9])/;
  const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
  const minLengthRegExp = /.{6,}/;

  const ValidationData = [
    {
      id: 1,
      name: "one lowercase character",
      regx: lowercaseRegExp,
    },
    {
      id: 2,
      name: "one special character",
      regx: specialCharRegExp,
    },
    {
      id: 3,
      name: "one uppercase character",
      regx: uppercaseRegExp,
    },
    {
      id: 4,
      name: "8 characters minimum",
      regx: minLengthRegExp,
    },
    {
      id: 5,
      name: "one number",
      regx: digitsRegExp,
    },
  ]; // Control modal visibility

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="relative">
      {/* Modal Popup */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 sm:p-6 rounded-lg  relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-black "
            >
              <FaTimes size={24} />
            </button>
            <div className="client-registration max-w-lg mx-auto p-6 bg-white shadow-lg rounded-md">
              <h2 className="text-2xl font-semibold mb-6 text-center">
                Client Registration
              </h2>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-1"
                  >
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-2 border rounded-md"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-1"
                  >
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-2 border rounded-md"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact"
                      className="block text-sm font-medium mb-1"
                    >
                      Contact Number:
                    </label>
                    <input
                      type="text"
                      id="contact"
                      value={contactNumber}
                      onChange={handleContactNumberChange}
                      className="w-full p-2 border rounded-md"
                      placeholder="Enter your contact number"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="whatsapp"
                      className="block text-sm font-medium mb-1 flex items-center gap-2"
                    >
                      <AiOutlineWhatsApp className="text-green-500" /> WhatsApp
                      Number:
                    </label>
                    <input
                      type="text"
                      id="whatsapp"
                      value={whatsappNumber}
                      onChange={handleWhatsappNumberChange}
                      className="w-full p-2 border rounded-md"
                      placeholder="Enter your WhatsApp number"
                      required
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="sameAsContact"
                    checked={sameAsContact}
                    onChange={handleCheckboxChange}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label htmlFor="sameAsContact" className="text-sm">
                    Same as Contact Number
                  </label>
                </div>

                <div className="relative">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium mb-1"
                  >
                    Password:
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={handleOnChange}
                    className="w-full p-2 border rounded-md pr-10"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-2 flex items-center text-gray-500 top-7 text-2xl"
                  >
                    {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                  </button>
                </div>

                <PasswordStrengthMeter password={password} />

                <div
                  className={`mt-5 ${
                    validation ? "flex" : "hidden"
                  } flex-wrap gap-4`}
                >
                  {ValidationData.map((item) => (
                    <div className="flex gap-2 items-center" key={item.id}>
                      {item.regx.test(password) ? (
                        <AiFillCheckCircle className="text-green-500" />
                      ) : (
                        <MdDoNotDisturbOn className="text-red-500" />
                      )}
                      <p
                        className={`${
                          item.regx.test(password)
                            ? "text-green-500"
                            : "text-red-500"
                        }`}
                      >
                        {item.name}
                      </p>
                    </div>
                  ))}
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Complain;
