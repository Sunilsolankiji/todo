import Header from "../../components/header/Header";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

function Layout() {
  const [loading, setLoading] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function toggleSideBar() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="d-flex main">
        <div className="layout-container">
          <Header toggleSideBar={toggleSideBar} />
          <div className="p-4">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;
