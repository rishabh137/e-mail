import { useState } from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";

const Main = () => {
    const [openDrawer, setOpenDrawer] = useState(true);

    const toggleDrawer = () => {
        if (openDrawer === true) {
            setOpenDrawer(false)
        } else {
            setOpenDrawer(true)
        }
    }

    return (
        <>
            <Header toggleDrawer={toggleDrawer} />
            <SideBar openDrawer={openDrawer} />
            {/* Outlet renders child component */}
            <Outlet context={{ openDrawer }} />
        </>
    )
}

export default Main;