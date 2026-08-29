import { LoginPage } from '@/pages/login';
import { createBrowserRouter, redirect } from 'react-router-dom';

export const ROUTES = {
  root: '/',
  login: '/login',
} as const;
export const router = createBrowserRouter([
  { path: ROUTES.root, loader: () => redirect(ROUTES.login) },
  {
    path: ROUTES.login,
    Component: LoginPage,
  },
]);
