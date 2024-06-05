import { useState } from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";

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
        <div>
            <Header toggleDrawer={toggleDrawer} />
            <SideBar openDrawer={openDrawer} />
            <div>Display mail</div>
        </div>
    )
}

export default Main;