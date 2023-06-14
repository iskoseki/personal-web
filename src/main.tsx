import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import ErrorPage from "./error-page.tsx";
import Projects from "./routes/Projects.tsx";
import Contact from "./routes/Contact.tsx";
import Layout from "./components/Layout";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <React.Suspense fallback="Loading">
        <App />
      </React.Suspense>
    ),
    errorElement: <ErrorPage />,
  },

  {
    path: "/projects",
    element: <Projects />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/contact",
    element: <Contact />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  </React.StrictMode>
);
