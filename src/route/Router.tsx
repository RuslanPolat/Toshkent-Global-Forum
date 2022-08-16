import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { IRes, MyContext } from "../context/Context";

// Layout
import Layout from "../layout/Layout";

// AUTH
import Login, { ILogin } from "../pages/login/Login";

// ADMIN PAGE
import UsersMain from "../components/usermain/UsersMain";
import Fields from "../pages/fields/Fields";
import Position from "../pages/position/Position";
// import Users from "../pages/admin/Users";

export interface IAuth {
  auth?: {
    token: string;
    _id: number;
    phoneNumber: string;
    password: string;
    isAuth: string;
  };
}

export default function Router() {
  const isAuth = localStorage.getItem("ISAUTH");
  console.log("AUTH: ", isAuth);

  if (!isAuth) {
    return (
      <Routes>
        {/* Auth Route */}
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    );
  }

  return (
    <Routes>
      {/* Admin Panel Route */}
       <Route path="/" element={<Layout/>}>
        <Route path="/users" element={<UsersMain />} /> 
        <Route path="/fields" element={<Fields/>}/>
        <Route path="/position" element={<Position/>}/>
        <Route path="*" element={<Navigate to="users" />} />
      </Route>
    </Routes>
  );
}
