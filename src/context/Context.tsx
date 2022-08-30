import { AxiosRequestConfig } from "axios";
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
import { Toast } from "react-toastify/dist/components";
import { toast } from "react-toastify";

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
  getSpicers?: () => Promise<void>;
  getAgenda?: () => Promise<void>;
  getUsers?: () => Promise<void>;
  getTicket?: () => Promise<void>;
  deletePosit?: any;
  deleteSpicers?: Function;
  deleteField?: Function;
  deleteAgenda?: Function;
  deleteTicket?: Function;
  deleteUser?: Function;
  userPosit?: any;
  userFiel?: any;
  userSpicers?: any;
  userAgenda?: any;
  userUsers?: any;
  userTicket?: any;
  postPosit?: (name: {
    uz: string;
    ru: string;
    en: string;
  }) => Promise<void> | undefined;
  postField?: (name: {
    uz: string;
    ru: string;
    en: string;
  }) => Promise<void> | undefined;
  putField?: Function;
  putPosition?: Function;
  putSpecers?: Function;
  putAgenda?: Function;
  postSpicers?: (body: any
  ) => Promise<void> | undefined;
  postAgenda?: (body: any) => Promise<void> | undefined;
  postUser?: (body: any) => Promise<void> | undefined;
  postTicket?: (body: any) => Promise<void> | undefined;
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
  phoneNumber: string;
  fullName: string;
  fieldId: string;
  brand: string;
  employeeCount: number;
  positionId: string;
  category: string;
  sector: string;
  row: string;
  seat: string;
  price: number;
  occupied: boolean;

  field: {
    _id: string;
    name: {
      uz: string;
      en: string;
      ru: string;
    },
    __v: number;
  },
  position: {
    _id: string;
    name: {
      uz: string;
      en: string;
      ru: string;
    },
    __v: number;
  },
  name: {
    uz: string;
    en: string;
    ru: string;
  },
  bio: {
    en: string;
    ru: string;
    uz: string;
  },
  image: string;
  type: string;
  startTime: string;
  endTime: string
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
  const [userFiel, setUserField] = useState<any[]>([]);
  const [userSpicers, setUserSpicers] = useState<any[]>([]);
  const [userAgenda, setUserAgenda] = useState<any[]>([]);
  const [userUsers, setUsers] = useState<any[]>([]);
  const [userTicket, setTicket] = useState<any[]>([]);

  function sucsessSpicers(res: IPosit[]) {
    setUserSpicers(res);
  }

  function sucsessUsers(res: IPosit[]) {
    setUsers(res);
  }

  function sucsessPosit(res: IPosit[]) {
    setUserPosit(res);
  }

  function sucsessField(res: IPosit[]) {
    setUserField(res);
  }

  function sucsessAgenda(res: IPosit[]) {
    setUserAgenda(res);
  }

  function sucsessTicket(res: IPosit[]) {
    setTicket(res);
  }


  // Position Page API

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

  async function putPosition(user: {}) {
    try {
      const res = await myAxios.put("/position", user);
      // toast.success("Muvaffaqiyatli O'zgartirildi")
      getPosition();
    } catch (error) {
      console.log("Put Position ishlamadi !");
    } 
  }

  async function deletePosit(ids: {}) {
    try {
      const res = await myAxios.delete("/position", { data: ids });
      getPosition();
    } catch (error) {
      console.log(error);
      console.log("Delete Positda xato");
    }
  }

  async function postPosit(name: any) {
    try {
      const res = await myAxios.post("/position", { name });
      // toast.success("Qo'shildi")
      getPosition();
      console.log(res);
    } catch (error) {
      console.log("Post Position ishlamadi !");
    }
  }

  // Field Page API

  async function deleteField(ids: {}) {
    try {
      const res = await myAxios.delete("/field", { data: ids });
      getField();
    } catch (error) {
      console.log(error);
      console.log("Delete Fielda xato");
    }
  }


  async function putField(user: {}) {
    try {
      const res = await myAxios.put("/field", user);
      getField();
    } catch (error) {
      console.log("Put Field ishlamadi !");
    } 
  }

  async function getField() {
    try {
      const res = await myAxios.get("/field");
      sucsessField(res.data.data);
      console.log(res);
    } catch (error) {
      console.log(error);
      console.log("Field Ishlamadi");
    }
  }

  async function postField(name: any) {
    try {
      const res = await myAxios.post("/field", { name });
      getField();
      console.log(res);
    } catch (error) {
      console.log("Post Feild ishlamadi !");
    }
  }
  

  // Speaker Page API
  
  async function getSpicers() {
    try {
      const res = await myAxios.get("/speaker");
      sucsessSpicers(res.data.data);
      console.log(res);
    } catch (error) {
      console.log(error);
      console.log("Speacer Ishlamadi");
    }
  }

  async function deleteSpicers(ids: {}) {
    try {
      const res = await myAxios.delete("/speaker", { data: ids });
      getSpicers();
    } catch (error) {
      console.log(error);
      console.log("Delete Speakerda xato");
    }
  }

  async function postSpicers(body:any) {
    try {
      const res = await myAxios.post("/speaker", body );
      getSpicers();
      console.log(res);
    } catch (error) {
      console.log("Post Spicers ishlamadi !");
    }
  }

  async function putSpecers(user: {}) {
    try {
      const res = await myAxios.put("/speaker", user);
      getSpicers();
    } catch (error) {
      console.log("Put Speaker ishlamadi !");
    } 
  }
  

  // Agenda PAge API

  async function getAgenda() {
    try {
      const res = await myAxios.get("/agenda");
      sucsessAgenda(res.data.data);
      console.log(res);
    } catch (error) {
      console.log(error);
      console.log("Agenda Ishlamadi");
    }
  }

  async function deleteAgenda(ids: {}) {
    try {
      const res = await myAxios.delete("/agenda", { data: ids });
      getAgenda();
    } catch (error) {
      console.log(error);
      console.log("Delete Agenda xato");
    }
  }

  async function postAgenda(body:any) {
    try {
      const res = await myAxios.post("/agenda", body );
      getAgenda();
      console.log(res);
    } catch (error) {
      console.log("Post Agenda ishlamadi !");
    }
  }

  async function putAgenda(user: {}) {
    try {
      const res = await myAxios.put("/agenda", user);
      getAgenda();
    } catch (error) {
      console.log("Put Agenda ishlamadi !");
    } 
  }
  

  // Users Page API 

  async function getUsers() {
    try {
      const res = await myAxios.get("/user?page=1&limit=10");
      sucsessUsers(res.data.data);
      console.log(res);
    } catch (error) {
      console.log(error);
      console.log("Users Ishlamadi");
    }
  }

  async function deleteUser(ids: {}) {
    try {
      const res = await myAxios.delete("/user", { data: ids });
      getUsers();
    } catch (error) {
      console.log(error);
      console.log("Delete User xato");
    }
  }

  async function postUser(body:any) {
    try {
      const res = await myAxios.post("/user", body );
      getUsers();
      console.log(res);
    } catch (error) {
      console.log("Post User ishlamadi !");
    }
  }

  // Ticet Page APi 

  async function getTicket() {
    try {
      const res = await myAxios.get("/ticket?page=1&limit=10");
      sucsessTicket(res.data.data);
      console.log(res);
    } catch (error) {
      console.log(error);
      console.log("Ticket Ishlamadi");
    }
  }

  async function deleteTicket(ids: {}) {
    try {
      const res = await myAxios.delete("/ticket", { data: ids });
      getTicket();
    } catch (error) {
      console.log(error);
      console.log("Delete Ticket xato");
    }
  }

  async function postTicket(body:any) {
    try {
      const res = await myAxios.post("/ticket", body );
      getTicket();
      console.log(res);
    } catch (error) {
      console.log("Post Ticket ishlamadi !");
    }
  }

  // ======

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
        getPosition,
        getField,
        userLogin,
        userPosit,
        postPosit,
        postField,
        postAgenda,
        postUser,
        postTicket,
        userFiel,
        userSpicers,
        userAgenda,
        userUsers,
        userTicket,
        deletePosit,
        deleteField,
        putField,
        putPosition,
        getSpicers,
        postSpicers,
        deleteSpicers,
        deleteAgenda,
        deleteTicket,
        deleteUser,
        putSpecers,
        putAgenda,
        getAgenda,
        getUsers,
        getTicket,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}
