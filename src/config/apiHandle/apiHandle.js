import axios from "axios";
import dayjs from "dayjs";
import jwt_decode from "jwt-decode";
import { save_tokens_constant } from "../../store/constants/constants";
import { exit_session } from "../../store/slice/logoutSlice";
import SocketIOClient from "socket.io-client";

// ts

// const api_url =
// "https://app-quaintance-backend-2023-3e6881cf7235.herokuapp.com";
// const api_url = "https://dylan-production.up.railway.app";

const api_url = "https://honesthome-backend-6d8f37871a1b.herokuapp.com";

// const api_url = "https://dilannazartsbackendtest-production-8988.up.railway.app";

// https://honesthome-backend-6d8f37871a1b.herokuapp.com

// https://honesthome-backend-6d8f37871a1b.herokuapp.com/

// const api_url = "http://localhost:5000";
//
// const api_url = "https://dylanbackend-production.up.railway.appp";

export const baseURL = `${api_url}`;

// export  const socket = SocketIOClient('https://dylanbackend-production.up.railway.app/');
// export  const socket = SocketIOClient('https://dylanbackend-production.up.railway.app/');

// export  const socket = SocketIOClient('https://dylan-production.up.railway.app');

// https://honesthome-backend-6d8f37871a1b.herokuapp.com

export const socket = SocketIOClient(
"https://honesthome-backend-6d8f37871a1b.herokuapp.com"
);

// export const socket = SocketIOClient(
//   "https://dilannazartsbackendtest-production-8988.up.railway.app"
// );

// export  const socket = SocketIOClient('http://localhost:5000');

export const apiHandle = axios.create({
  baseURL: `${baseURL}`,
});

axios.defaults.timeout = 15000;

apiHandle.interceptors.request.use(async (req) => {
  // console.log(req?.headers);
  const authTokens = localStorage.getItem(save_tokens_constant)
    ? JSON.parse(localStorage.getItem(save_tokens_constant))
    : null;
  // console.log("token", authTokens);
  if (authTokens) {
    const user = jwt_decode(authTokens);
    const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

    if (isExpired) {
      exit_session();
      // console.log("tokena", authTokens);

      return req;
    } else {
      // console.log("tokenaa", authTokens);
      req.headers.Authorization = `Bearer ${authTokens}`;
    }
  }

  return req;
});
