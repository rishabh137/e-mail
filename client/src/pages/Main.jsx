import { useState } from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import { Logout } from "@mui/icons-material";

const Main = ({ username, isLogged }) => {
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
            <Header toggleDrawer={toggleDrawer} username={username} isLogged={isLogged} />
            <SideBar openDrawer={openDrawer} username={username} />
            <div>Display mail</div>
        </div>
    )
}

export default Main;