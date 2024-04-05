import { LoginView } from "../components/login/login_view"
import { useLogin } from "../components/login/model/use_login_model"

export const LoginPage = () => {
 return <LoginView {...useLogin()}/>
}