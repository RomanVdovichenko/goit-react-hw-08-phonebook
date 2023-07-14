import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export const Layout = () => {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <ToastContainer autoClose={3000}/>
    </div>
  );
};