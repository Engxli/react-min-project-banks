import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import { getToken } from "./api/storage";
import UserContext from "./context/UserContext";
import Transactions from "./pages/Transactions";
import { Users } from "./pages/Users";
import Profile from "./pages/Profile";

function App() {
  const [user, setUser] = useState(false);

  useEffect(() => {
    if (getToken()) {
      setUser(true);
    }
  }, []);

  return (
    <UserContext.Provider value={[user, setUser]}>
      <div className="h-screen flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/transactions" Component={Transactions} />
          <Route path="/users" Component={Users} />
          <Route path="/profile" Component={Profile} />
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
