import { lazy, Suspense } from "react";
import { ScrollArea } from "@mantine/core";
import Loader from "../loader/Loader";

const SidebarMenuItem = lazy(() => import("./SidebarMenuItem"));

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="smw">
        <ScrollArea
          style={{ height: "calc(100vh - 65px)" }}
          scrollbarSize={6}
          scrollHideDelay={100}
        >
          <Suspense fallback={<Loader />}>
            <SidebarMenuItem />
          </Suspense>
        </ScrollArea>
      </div>
    </aside>
  );
};
export default Sidebar;
