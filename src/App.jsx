import { lazy, memo, Suspense } from 'react';
import { Navigate, Outlet, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './Login.jsx';
import Header from './Layout.jsx/Header';
import Sidebar from './Layout.jsx/Sidebar';
import Footer from './Layout.jsx/Footer';
import './App.css';

const Home = lazy(() => import('./pages/Home'));
const User = lazy(() => import('./pages/User'));
const Settings = lazy(() => import('./pages/Settings'));
const Camera = lazy(() => import('./pages/Camera'));

function ProtectedRoute() {
  const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />;
}

function RouteChunk(props) {
  const Page = props.Page;

  return (
    <Suspense fallback={null}>
      <Page />
    </Suspense>
  );
}

const AppLayout = memo(function AppLayout() {
  return (
    <div className="app-shell">
      <Header />
      <div className="app-body">
        <Sidebar />
        <main className="app-main">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/login" replace />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: '/',
        element: <AppLayout />,
        children: [
          {
            path: 'Home',
            element: <RouteChunk Page={Home} />,
          },
          {
            path: 'User',
            element: <RouteChunk Page={User} />,
          },
          {
            path: 'Settings',
            element: <RouteChunk Page={Settings} />,
          },
          {
            path: 'Camera',
            element: <RouteChunk Page={Camera} />,
          },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/login" replace />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
