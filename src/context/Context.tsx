import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { ILogin } from "../pages/login/Login";
import { myAxios } from "../service/axios/index";

export const MyContext = createContext({});

// export interface IAuthProps {
//   auth: {};
// }

export interface IContext {
  auth?: {};
  setAuth?: Dispatch<SetStateAction<{}>>;
  userLogin?: () => Response;
  getPosition?: () => Promise<void>;
  getField?: () => Promise<void>;
  userPosit?: IPosit;
  postPosit?: (name: { uz: string; ru: string; en: string }) => Promise<void> | undefined;
}

export interface IRes {
  data: {
    code: number;
    data: {
      password: string;
      phoneNumber: string;
      token: string;
      _id: string;
      isAuth: boolean;
    };
  };
}

// position interfece
export interface IPosit {
  total: number;
  data: [];
}

export interface IDate {
  _id: string;
  name: {
    uz: string;
    en: string;
    ru: string;
  };
  __v: number;
}

export interface IUser {
  password: string;
  phoneNumber: string;
}

export default function Context({ children }: any) {
  const navigate = useNavigate();

  const [auth, setAuth] = useState({
    token: "",
    _id: "",
    phoneNumber: "",
    password: "",
    isAuth: false,
  });

  const [userPosit, setUserPosit] = useState<IPosit[]>([]);

  function sucsessPosit(res: IPosit[]) {
    setUserPosit(res);
  }

  async function getPosition() {
    try {
      const res = await myAxios.get("/position");
      sucsessPosit(res.data.data);
      console.log(res);
    } catch (error) {
      console.log(error);
      console.log("Position Ishlamadi");
    }
  }

  async function postPosit(body: any) {
    try {
      const res = await myAxios.post("/position", body);
      console.log(res);
    } catch (error) {
      console.log("Post Position ishlamadi !");
      
    }
  }

  async function getField() {
    try {
      const res = await myAxios.get("/field");
      sucsessPosit(res.data.data);
      console.log(res);
    } catch (error) {
      console.log(error);
      console.log("Position Ishlamadi");
    }
  }

  function sucsess(res: IRes) {
    setAuth((p) => ({
      ...p,
      token: res.data.data.token,
      _id: res.data.data._id,
      phoneNumber: res.data.data.phoneNumber,
      password: res.data.data.password,
      isAuth: true,
    }));
    localStorage.setItem("TOKEN", res.data.data.token);
    localStorage.setItem("ISAUTH", "true");
  }

  async function userLogin(user: IUser) {
    try {
      const res: IRes = await myAxios.post("/login", user);
      sucsess(res);
      navigate("/users");
    } catch (error) {
      console.log(error);
      console.log("Ishlamadiii");
    }
  }

  return (
    <MyContext.Provider
      value={{
        auth,
        setAuth,
        userLogin,
        getPosition,
        getField,
        userPosit,
        postPosit,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}
