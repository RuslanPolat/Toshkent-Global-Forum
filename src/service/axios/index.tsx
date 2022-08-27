import axios from "axios";

import {CONSTS} from '../../utils/consts'

export const myAxios = axios.create({
  baseURL: CONSTS.BASE_URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("TOKEN")}`
  }
});
