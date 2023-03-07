import { Routes, Route, BrowserRouter, Navigate, useLocation, Outlet } from 'react-router-dom';
import Dashboard from './screens/Dashboard';
import {Settings} from "./screens/Settings";
import { motion } from "framer-motion";

const PageLayout = ({ children }: { children: JSX.Element }) => children;

const pageVariants = {
  initial: {
    opacity: 0
  },
  in: {
    opacity: 1
  },
  out: {
    opacity: 0
  }
};

const pageTransition = {
  type: "tween",
  ease: "linear",
  duration: 0.5
};


const AnimationLayout = () => {
  const { pathname } = useLocation();
  return (
    <PageLayout>
      <motion.div
        key={pathname}
        initial="initial"
        animate="in"
        variants={pageVariants}
        transition={pageTransition}
      >
        <Outlet />
      </motion.div>
    </PageLayout>
  );
};

function App() {
  return (
    <div id="main" className="max-w-screen overflow-x-hidden">
      <BrowserRouter>
        <Routes>
          <Route element={<AnimationLayout/>}>
            <Route path='/' element={<Dashboard />} />
            <Route path='/register' element={<Navigate to='/'/>}/>
            <Route path='/login' element={<Navigate to='/'/>}/>
            <Route path="/settings" element={<Settings/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
