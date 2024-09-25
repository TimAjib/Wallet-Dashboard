import { lazy, Suspense } from 'react';
import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom';
import paths, { rootPaths } from './path';
import { getAuthToken } from 'helpers/auth'; // Helper to check authentication
import Spinner from 'components/loading/Splash'; // Import a loading spinner

// Lazy loaded components
const App = lazy(() => import('App'));
const MainLayout = lazy(() => import('layouts/main-layout'));
const AuthLayout = lazy(() => import('layouts/auth-layout'));
const Dashboard = lazy(() => import('pages/dashboard'));
const LoginPage = lazy(() => import('pages/authentication/login'));
const NotFoundPage = lazy(() => import('pages/not-found'));

// Route protection based on authentication
const ProtectedRoute = ({ element }: { element: JSX.Element }) => {
  const token = getAuthToken(); // Check if token exists
  return token ? element : <Navigate to={paths.login} replace />;
};

const routes = [
  {
    element: (
      <Suspense fallback={<Spinner />}>
        <App />
      </Suspense>
    ),
    children: [
      {
        path: paths.default,
        element: (
          <ProtectedRoute element={
            <MainLayout>
              <Suspense fallback={<Spinner />}>
                <Outlet />
              </Suspense>
            </MainLayout>
          } />
        ),
        children: [
          { index: true, element: <Dashboard /> },
        ],
      },
      {
        path: rootPaths.authRoot,
        element: (
          <Suspense fallback={<Spinner />}>
            <AuthLayout />
          </Suspense>
        ),
        children: [
          { path: paths.login, element: <LoginPage /> },
        ],
      },
      {
        path: paths.notFound,
        element: <NotFoundPage />,
      },
      {
        path: '*',
        element: <Navigate to={paths.notFound} replace />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);
export default router;
