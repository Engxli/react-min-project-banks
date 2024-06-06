import React, { useContext } from "react";
import Button from "./Button";
import UserContext from "../context/UserContext";
import { removeToken } from "../api/storage";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [user, setUser] = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogut = () => {
    removeToken();
    setUser(false);
    navigate("/register");
  };

  return (
    <div className="flex justify-between p-3">
      <div className="flex gap-3 justify-items-start items-center cursor-pointer">
        {/* SVG Dimond */}
        <div>
          <svg
            width="20"
            height="17"
            viewBox="0 0 20 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 16L1 7M10 16L19 7M10 16L6 7M10 16L14 7M1 7L5 1M1 7H6M5 1L6 7M5 1H10M15 1L19 7M15 1L14 7M15 1H10M19 7H14M6 7H14M6 7L10 1M14 7L10 1"
              stroke="black"
            />
          </svg>
        </div>
        {/* LOGO TXT */}
        <h2>My Bank</h2>
      </div>

      {user && (
        <div className="w-[75px]">
          <Button label={"Logout"} onClick={handleLogut} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
