import React, { useEffect, useState } from "react";
import LeftSidebar from "./components/LeftSidebar";
import style from "./style/DashLayout.module.css";
import DashboardRoutes from "../../routes";
import { Drawer } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import RightSidebar from "./components/RightSidebar";
import { Route } from "react-router-dom";
import Home from "./views/Home/Home";
import Header from "./components/Header";

const DashLayout = () => {
  //Setting mobile responsive
  const [mobile, setMobile] = useState(window.innerWidth < 1080);
  useEffect(() => {
    const handleSize = () => setMobile(window.innerWidth < 1080);
    window.addEventListener("resize", handleSize);
    return () => window.removeEventListener("resive", handleSize);
  }, []);

  //Sidebar toogle for mobile view
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <>
      <div className={style.menuBtnContainer}>
        <MenuIcon
          onClick={toggleDrawer(true)}
          style={{
            color: "white",
          }}
          fontSize="large"
        />
      </div>
      <div className={style.container}>
        {!mobile ? (
          <LeftSidebar routes={DashboardRoutes} mobile={false} />
        ) : (
          <Drawer open={drawerOpen} onClose={toggleDrawer(false)}>
            <LeftSidebar routes={DashboardRoutes} mobile={true} />
          </Drawer>
        )}
        <div className={style.middle}>
          <Header />
          <Route path="/dash" component={Home} />
        </div>
        <RightSidebar />
      </div>
    </>
  );
};

export default DashLayout;
