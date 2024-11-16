import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./components/Layout/AppLayout";

import React from "react";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Service } from "./pages/Service";
// import { Gallery } from "./pages/Gallery";
import { Testimonial } from "./pages/Testimonial";
import { Contact } from "./pages/Contact";
import { ErrorPage } from "./pages/ErrorPage";
import { ScrollTop } from "./components/UI/ScrollTop";
import { Suspense } from "react";

// Lazy load the Gallery component
const LazyGallery = React.lazy(() => import("./pages/Gallery"));

const LoadingFallback = () => (
  <div className="suspense-container">
    <div className="loading-wrapper">
      <div className="dots">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
      <div className="loading-text">Loading Gallery</div>
    </div>
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "service",
        element: <Service />,
      },
      {
        path: "gallery",
        element: (
          <Suspense
            fallback={
              <>
                <LoadingFallback />
              </>
            }
          >
            <LazyGallery />
          </Suspense>
        ),
      },
      {
        path: "testimonial",
        element: <Testimonial />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);
const App = () => {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      <ScrollTop />
    </>
  );
};

export default App;
