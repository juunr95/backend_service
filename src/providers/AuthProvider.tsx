import { Login } from "../screens/Login";
import { useAuthenticationStatus } from '@nhost/react'
import { Spinner } from "../components/Spinner";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Register } from '../screens/Register';
import { ForgotPassword } from "../screens/ForgotPassword";
import React from "react";

const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated, isLoading } = useAuthenticationStatus()

  if (isLoading) {
    return <Spinner />
  }

  if (!isAuthenticated) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={
            <React.Suspense fallback={<>...</>}>
              <Register />
            </React.Suspense>
          } />
          <Route path='/forget' element={
            <React.Suspense fallback={<>...</>}>
              <ForgotPassword />
            </React.Suspense>
          } />
        </Routes>
      </BrowserRouter>
    )
  }

  return children;
}

export default AuthProvider;