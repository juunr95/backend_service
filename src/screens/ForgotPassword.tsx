import { useResetPassword } from '@nhost/react'
import { FormEvent } from "react"
import { Navigate } from 'react-router-dom';
import { Spinner } from '../components/Spinner';

export const ForgotPassword = () => {
  const { resetPassword, isSent, isLoading, isError, error } =
    useResetPassword();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const [ email ] = form.values();

    const data = await resetPassword(email.toString());

    if (isSent) {      
      return <Navigate to="/"/>
    }
  }

  if (isLoading) {
    return <Spinner/>
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Reset your password
            </h1>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            { error ? <span className="text-center text-red-500">{error.message}</span> : <></>}
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input type="email" autoComplete="off" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" />
              </div>
              <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Reset password</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}