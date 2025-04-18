import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingPage from './components/Landingpage'; // The main page with Stories and Link components
import Login from './components/Login'; // Login Component
import Signup from './components/Signup'; // Signup Component
import Navbar from './components/Navbar'; // Common Navbar Component
import ErrorPage from './components/ErrorPage'; // Error Page Component
import PostFooter from './components/PostButton';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/feed",
      element: (
        <>
          <Navbar /> {/* navbar is always visible */}
          <LandingPage /> {/* landingPage component with Stories and Link */}
          
        </>
      ),
      errorElement: <ErrorPage />, //adds error page if something went wrong
    },
    {
        path: "/", //adds login path
        element: <Login />,
    },
    {
        path: "/signup",//adds signup path
        element: <Signup />
    }
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
