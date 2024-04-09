
'use client'

import { useRegister } from "./components/model/use_login_model"
import RegisterView from "./register_view"

 const LoginPage = () => {
 return <RegisterView {...useRegister()}/>
}

export default LoginPage