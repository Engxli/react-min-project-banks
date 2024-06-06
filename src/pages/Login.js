import React, { useContext, useState } from "react";
import image from "../assets/Coins-pana.svg";
import { Navigate, useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import Input from "../components/Input";
import { login } from "../api/auth";
import { useMutation } from "@tanstack/react-query";
import Button from "../components/Button";

const Login = () => {
  const [userInfo, setUserInfo] = useState({});
  const [user, setUser] = useContext(UserContext);
  const navigate = useNavigate();

  const { mutate, isPending, error } = useMutation({
    mutationKey: ["login"],
    mutationFn: () => login(userInfo),
    onSuccess: () => {
      setUser(true);
    },
  });

  const navigateToRegister = () => {
    navigate("/register");
  };

  const handleOnChange = (e) => {
    if (e.target.name == "image") {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.files[0] });
    } else {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    }
  };

  const handleOnSubmit = () => {
    mutate();
  };

  console.log(error);
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
            Login to your acount
          </h1>
          <p className="flex gap-2">
            if you have an account
            <span
              onClick={navigateToRegister}
              className="text-blue-500 cursor-pointer"
            >
              Register here
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

        {error && (
          <div className="w-[90%] ">
            <p className="text-red-500">{error?.response?.data}</p>
          </div>
        )}
        {/* Button action */}
        <div className="w-[90%] h-[36px] ">
          {isPending ? (
            <Button label="Loading..." />
          ) : (
            <Button label="LOGIN" onClick={handleOnSubmit} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
