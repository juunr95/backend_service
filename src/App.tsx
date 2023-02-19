
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Login } from "./screens/Login";
import Dashboard from './screens/Dashboard';
import AuthProvider from './providers/AuthProvider';

function App() {
  return (
    <div className="max-w-screen overflow-x-hidden">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  )
}

export default App
