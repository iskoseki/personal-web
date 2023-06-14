import { useEffect, useState } from "react";
import "./App.css";
import Root from "./routes/root";
import ReactLoading from "react-loading";

const LoadComponent = () => {
  return (
    <ReactLoading type={"bars"} color={"white"} height={150} width={150} />
  );
};
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
    setTimeout(() => {
      setLoading(true);
    }),
      6000;
  }, []);

  return !loading ? (
    <div className="flex justify-center h-screen items-center">
      {" "}
      <LoadComponent />{" "}
    </div>
  ) : (
    <Root />
  );
}

export default App;
