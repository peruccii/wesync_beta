'use client'
import Header from "@/components/@initial_page/components/header";
import {
  createHashRouter,
} from "react-router-dom";
import App from "./app";

const loggedIn = window.localStorage.getItem('isLoggedIn');
export const router = createHashRouter([
  {
    path: "/",
    element: <App/>,
  },
]);