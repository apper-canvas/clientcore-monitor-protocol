import React, { useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "@/App";
import Sidebar from "@/components/organisms/Sidebar";
const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { logout } = useContext(AuthContext);

  const handleMenuClick = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="flex h-screen">
        <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} logout={logout} />
        
        <div className="flex-1 flex flex-col overflow-hidden">
          <main className="flex-1 overflow-y-auto">
            <Outlet context={{ onMenuClick: handleMenuClick }} />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;