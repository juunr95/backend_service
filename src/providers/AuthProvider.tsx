import { Login } from "../screens/Login";
import { useAuthenticationStatus } from '@nhost/react'
import { Spinner } from "../components/Spinner";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';
import { Register } from '../screens/Register';
import { ForgotPassword } from "../screens/ForgotPassword";


const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated, isLoading } = useAuthenticationStatus()

  // if (isLoading) {
  //   return <Spinner />
  // }

  if (!isAuthenticated) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/forget' element={<ForgotPassword />} />
        </Routes>
      </BrowserRouter>
    )
  }

  return children;
}

export default AuthProvider;