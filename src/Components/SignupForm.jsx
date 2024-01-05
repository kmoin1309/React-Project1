import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SignupForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [accounType, setAccountType] = useState("student");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    if (formData.password != formData.confirmPassword) {
      toast.error("Passswords does not Match");
      return;
    }
    setIsLoggedIn(true);
    toast.success("Account Created");
    const accountData = {
      ...formData,
    };
    const finalData = {
      ...accountData,
      accounType,
    };
    console.log("Printing final data");
    console.log(finalData);

    navigate("/dashboard");
  }

  return (
    <div>
      {/* student-Instructor -tab */}
      <div className="flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max">
        <button
          className={`${
            accounType === "student"
              ? "bg-richblack-900 text-richblack-5"
              : "bg-transparent text-richblack-200"
          }
        py-2 px-5 rounded-full transition-all duration-200
        `}
          onClick={() => setAccountType("student")}
        >
          Student
        </button>
        <button
          className={`${
            accounType === "instructor"
              ? "bg-richblack-900 text-richblack-5"
              : "bg-transparent text-richblack-200"
          }
        py-2 px-5 rounded-full transition-all duration-200
        `}
          onClick={() => setAccountType("instructor")}
        >
          Instructor
        </button>
      </div>

      <form
        onSubmit={submitHandler}
        className="mt-20"
      >
        {/* firstName and lastName */}
        <div className="flex gap-x-4 mt-[10px]">
          <label>
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              First Name<sup className="text-pink-200">*</sup>
            </p>
            <input
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
              required
              type="text"
              name="firstName"
              onChange={changeHandler}
              placeholder="Enter First Name"
              value={formData.firstName}
            />
          </label>

          <label>
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Last Name<sup className="text-pink-200">*</sup>
            </p>
            <input
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
              required
              type="text"
              name="lastName"
              onChange={changeHandler}
              placeholder="Enter Last Name"
              value={formData.lastName}
            />
          </label>
        </div>

        {/* Email Address */}
        <div className="mt-[20px]">
          <label className="w-full mt-[10px]">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Email Address<sup className="text-pink-200">*</sup>
            </p>
            <input
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
              required
              type="email"
              name="email"
              onChange={changeHandler}
              placeholder="Enter Email Address"
              value={formData.email}
            />
          </label>
        </div>

        {/* Create Password and Confirm Password */}
        <div className="w-full flex gap-x-4 justify-between mt-[20px]">
          <label className="relative w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Create Password<sup className="text-pink-200">*</sup>
            </p>
            <input
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
              required
              type={showPassword ? "text" : "password"}
              name="password"
              onChange={changeHandler}
              placeholder="Enter Password"
              value={formData.password}
            />
            <span
              className="absolute right-3 top-[38px] cursor-pointer"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? (
                <AiOutlineEyeInvisible
                  fontSize={24}
                  fill="#AFB2BF"
                />
              ) : (
                <AiOutlineEye
                  fontSize={24}
                  fill="#AFB2BF"
                />
              )}
            </span>
          </label>

          <label className="relative w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Confirm Password<sup className="text-pink-200">*</sup>
            </p>
            <input
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
              required
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              onChange={changeHandler}
              placeholder="Confirm Password"
              value={formData.confirmPassword}
            />
            <span
              className="absolute right-3 top-[38px] cursor-pointer"
              onClick={() => setShowConfirmPassword((prev) => !prev)}
            >
              {showConfirmPassword ? (
                <AiOutlineEyeInvisible
                  fontSize={24}
                  fill="#AFB2BF"
                />
              ) : (
                <AiOutlineEye
                  fontSize={24}
                  fill="#AFB2BF"
                />
              )}
            </span>
          </label>
        </div>

        {/* Confirm Button */}
        <button className="bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[9px] mt-6 w-full">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
