'use client'


import RegisterView from "../register/register_view"
import { LoginView } from "./login_view"
import { useLogin } from "./model/login_model"

 const LoginPage = () => {
 return <LoginView {...useLogin()}/>
}

export default  LoginPage