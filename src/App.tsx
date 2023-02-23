import { lazy, Suspense } from "react";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./components/common/loader/Loader";

const RouteApp = lazy(() => import("./RouteApp"));

const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <RouteApp />
        <ToastContainer
          limit={1}
          autoClose={1500}
          transition={Slide}
          theme="colored"
        />
      </Suspense>
    </>
  );
};

export default App;
