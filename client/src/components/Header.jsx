import { AppBar, Toolbar, styled, InputBase, Box } from "@mui/material"
import { Menu as MenuIcon, Search, Tune, HelpOutlineOutlined, SettingsOutlined, AppsOutlined, AccountCircleOutlined } from "@mui/icons-material"
import EmailIcon from '@mui/icons-material/Email';
import LogoutBtn from "./logout";
import { useContext } from "react";
import { UserContext } from "../App";

// Apply CSS over AppBar component
const StyledAppBar = styled(AppBar)({
    background: '#F5F5F5',
    boxShadow: 'none'
})

const SearchWrapper = styled(Box)({
    background: '#EAF1FB',
    marginLeft: 100,
    borderRadius: 8,
    minWidth: 690,
    maxWidth: 720,
    height: 48,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 20px',
    '& > div': {
        width: '100%',
        padding: '0 10px'
    }
})

const IconWrapper = styled(Box)({
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    '& > svg': {
        marginLeft: 20
    }
})

const Header = ({ toggleDrawer }) => {
    const { username, isLogged } = useContext(UserContext)
    return (
        <StyledAppBar position="static">
            <Toolbar>
                <MenuIcon color="action" style={{ cursor: 'pointer' }} onClick={toggleDrawer} />
                <EmailIcon style={{ color: "#ee2400", fontSize: 33, marginLeft: 15 }} />
                <h2 style={{ color: "rgba(0, 0, 0, 0.54)", marginLeft: 10, fontWeight: 500 }}>Mail</h2>

                <SearchWrapper>
                    <Search color="action" />
                    <InputBase placeholder="Search mail" />
                    <Tune color="action" />
                </SearchWrapper>

                <IconWrapper>
                    <HelpOutlineOutlined color="action" />
                    <SettingsOutlined color="action" />
                    <AppsOutlined color="action" />
                    <AccountCircleOutlined color="action" />
                </IconWrapper>
                {
                    isLogged ?
                        <>
                            <a href="/"><LogoutBtn /></a>
                            <p style={{ color: "#111" }}>{username.name}</p>
                        </>
                        :
                        ""

                }
            </Toolbar>
        </StyledAppBar>
    )
}

export default Header