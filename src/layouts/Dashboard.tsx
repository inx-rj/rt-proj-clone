import { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";
import { useAppSelector } from "../redux/store";
import { IS_SIDEBAR_COLLAPSED } from "../redux/reducers/config/app/app.slice";
import Loader from "../components/common/loader/Loader";

const Header = lazy(() => import("../components/common/header/Header"));
const Footer = lazy(() => import("../components/common/footer/Footer"));
const Sidebar = lazy(() => import("../components/common/sidebar/Sidebar"));

const Dashboard = () => {
  const isSidebarCollapsed = useAppSelector(IS_SIDEBAR_COLLAPSED);

  return (
    <div className={`relative ${isSidebarCollapsed ? "mini" : "full"}`}>
      <Suspense fallback={<Loader />}>
        <Sidebar />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Header />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <div className="dashboard min-h-[calc(100vh-103px)]">
          <main role="main">
            <Outlet />
          </main>
        </div>
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Dashboard;
