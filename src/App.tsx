import { Suspense, lazy } from "react";
import "./App.css";
const Root = lazy(() => import("./routes/root"));
import ReactLoading from "react-loading";

const LoadComponent = () => {
  return <ReactLoading type={"bars"} height={"50%"} width={"50%"} />;
};
function App() {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-screen">
          <LoadComponent />
        </div>
      }
    >
      <Root />
    </Suspense>
  );
}

export default App;
