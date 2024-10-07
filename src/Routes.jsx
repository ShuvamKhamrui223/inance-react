import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Layouts
import RootLayout from "./Layouts/RootLayout";

// Global loader
import SectionLoader from "./components/common/PreLoaders/SectionLoader";

// Direct import
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";

// Dynamic imports
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const RecipeSiteRoutes = () => {
  const AppRouter = createBrowserRouter([
    {
      path: "/",
      errorElement: <ErrorPage />,
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "about",
          element: (
            <Suspense>
              <AboutPage />
            </Suspense>
          ),
        },
        {
          path: "services",
          element: (
            <Suspense>
              <ServicesPage />
            </Suspense>
          ),
        },
        {
          path: "contact",
          element: (
            <Suspense>
              <ContactPage />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={AppRouter} fallbackElement={<SectionLoader />} />
  );
};

export default RecipeSiteRoutes;
