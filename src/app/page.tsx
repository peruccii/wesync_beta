'use client'
import { RouterProvider } from "react-router-dom"
import { Router } from "react-router-dom";
import { router } from "./routes"

export default function Home() {
  
  return (

      <RouterProvider router={router} />
  
  );
}
