import { GoogleLogout } from "react-google-login";

const clientId = process.env.REACT_APP_CLIENT_ID

const Logout = () => {
    const onSuccess = () => {
        console.log("Logout successful!");
    }

    return (
        <div id="signOutButton">
            <GoogleLogout
                clientId={clientId}
                buttonText={"Logout"}
                onLogoutSuccess={onSuccess}
            />
        </div>
    )
}

export default Logout