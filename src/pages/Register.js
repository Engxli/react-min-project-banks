import React, { useContext, useState } from "react";
import image from "../assets/Coins-pana.svg";
import Input from "../components/Input";
import FileInput from "../components/FileInput";
import Button from "../components/Button";
import { useMutation } from "@tanstack/react-query";
import { register } from "../api/auth";
import UserContext from "../context/UserContext";
import { Navigate, useNavigate } from "react-router-dom";
const Register = () => {
  const [userInfo, setUserInfo] = useState({});
  const [user, setUser] = useContext(UserContext);
  const navigate = useNavigate();
  const { mutate, isPending, error } = useMutation({
    mutationKey: ["regitser"],
    mutationFn: () => register(userInfo),
    onSuccess: () => {
      setUser(true);
    },
  });

  const handleOnChange = (e) => {
    if (e.target.name == "image") {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.files[0] });
    } else {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    }
  };

  const handleOnSubmit = () => {
    // register
    mutate();
  };

  const navigateToLogin = () => {
    navigate("/login");
  };

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <div className="h-full  flex flex-col md:flex-row ">
      <div className="w-full md:w-[50%] h-full flex justify-center items-center">
        <img src={image} className="w-[70%]" />
      </div>
      <div className="w-full md:w-[50%] h-full  flex flex-col justify-center items-center gap-3">
        <>
          <h1 className="text-[20px] text-green-500 font-bold">
            Register your acount
          </h1>
          <p className="flex gap-2">
            if you don't have an account
            <span
              onClick={navigateToLogin}
              className="text-blue-500 cursor-pointer"
            >
              Login here
            </span>
          </p>
        </>
        {/* USERNAME */}
        <div className="w-[90%] h-[75px] ">
          <Input
            label="Username"
            type="text"
            name="username"
            handleOnChange={handleOnChange}
          />
        </div>
        {/* PASSWORD */}
        <div className="w-[90%] h-[75px] ">
          <Input
            label="Password"
            type="password"
            name="password"
            handleOnChange={handleOnChange}
          />
        </div>
        {/* IMAGE */}
        <div className="w-[90%] ">
          <FileInput name="image" handleOnChange={handleOnChange} />
        </div>
        {error && (
          <div className="w-[90%] ">
            <p className="text-red-500">{error?.response?.data.error}</p>
          </div>
        )}
        {/* Button action */}
        <div className="w-[90%] h-[36px] ">
          {isPending ? (
            <Button label="Loading..." />
          ) : (
            <Button label="REGISTER" onClick={handleOnSubmit} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;
