import { Login } from "../screens/Login";
import { useAuthenticationStatus } from '@nhost/react'
import { Spinner } from "../components/Spinner";


const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated, isLoading } = useAuthenticationStatus()

  if (isLoading) {
    return <Spinner/>
  }

  if (!isAuthenticated) {
    return <Login/>
  }

  return children;
}

export default AuthProvider;