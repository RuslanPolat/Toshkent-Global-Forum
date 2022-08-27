import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
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
import Ticket from "../pages/ticket/Ticket";
import Foydalanuvchilar from "../pages/users/Foydalanuvchilar";
import Agenda from "../pages/agenda/Agenda";
import Spikerlar from "../pages/spicers/Spikerlar";
import Comments from "../pages/comments/Comments";
import Setting from "../pages/settings/Setting";
import Settings from "../pages/settings/Settings";
import SettingMap from "../pages/settings/settingmap/SettingMap";
import SettingsLink from "../pages/settings/settingsLink/SettingsLink";
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
  const navigate = useNavigate();

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
      <Route element={<Layout />}>
        {/* <Route path="/users" element={<UsersMain />} />  */}
        <Route path="/ticket" element={<Ticket />} />
        <Route path="/foydalanuvchilar" element={<Foydalanuvchilar />} />
        <Route path="agenda" element={<Agenda />} />
        <Route path="/fields" element={<Fields />} />
        <Route path="/position" element={<Position />} />
        <Route path="/spikerlar" element={<Spikerlar />} />
        <Route path="/comments" element={<Comments />} />
        <Route path="/settings" element={<Settings/>} />
        <Route path="*" element={<Navigate to="position" />} />  
      </Route>
    </Routes>
  );
}
