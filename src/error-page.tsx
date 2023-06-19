import { useRouteError } from "react-router-dom";
import Navigation from "./components/Navigation";

export default function ErrorPage() {
  const error = useRouteError();
  console.error("Error:", error);

  return (
    <>
      <Navigation />
      <div
        id="error-page"
        className="flex flex-col justify-center items-center h-screen"
      >
        <h1 className="text-6xl p-5 animate-bounce">Oops!</h1>
        <p className="text-md">Sorry, an unexpected error has occurred.</p>
        <p>
          <i></i>
        </p>
      </div>
    </>
  );
}
