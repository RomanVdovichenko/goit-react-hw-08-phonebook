import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from '../redux/auth/operations';
import { useAuth } from '../hooks/useAuth';
import { HelmetProvider } from 'react-helmet-async';

const HomePage = lazy(() => import('../pages/Home/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));
const AddContactPage = lazy(() => import('../pages/AddContact/AddContact'));

export const App = () => {
  const helmetContext = {};
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
      <HelmetProvider context={helmetContext}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
              }
            />
            <Route
             path="/contacts"
              element={
                <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
              }
            />
            <Route path='/contact'
            element={<PrivateRoute redirectTo='/login' component={<AddContactPage />} /> }/>
          </Route>
        </Routes>
      </HelmetProvider>
  );
};
