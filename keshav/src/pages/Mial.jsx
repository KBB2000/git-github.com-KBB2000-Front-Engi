import { useEffect, useState } from "react";
import SideNavBar from "../components/mail/SideNavBar";
import Header from '../components/mail/Header'
import { useLocation, useNavigate } from "react-router-dom";
import NoDataView from "../components/mail/NoDataView";
import InboxView from "../components/mail/InboxView";

function Mail() {
  const Navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");

  useEffect(() => {
    if (!token) {
      Navigate("/login");
    }
    if (token) {
      localStorage.setItem("token", `Bearer ${token}`);
    }
  }, [token]);

  const [selectedComponent, setSelectedComponent] = useState('/'); 

  const handleMenuItemClick = (path) => {
    setSelectedComponent(path);
  };

  return (
    <div className="h-screen w-screen dark:bg-black bg-white pl-14">
      <SideNavBar onMenuItemClick={handleMenuItemClick} />
      <Header />
      <div>
        {selectedComponent === "/" && <NoDataView />}
        {selectedComponent === "/search" && <NoDataView />}
        {selectedComponent === "/mail" && <NoDataView />}
        {selectedComponent === "/send" && <NoDataView />}
        {selectedComponent === "/stack" && <NoDataView />}
        {selectedComponent === "/inbox" && <InboxView />}
        {selectedComponent === "/stacks" && <NoDataView />}
      </div>
    </div>
  );
}

export default Mail;