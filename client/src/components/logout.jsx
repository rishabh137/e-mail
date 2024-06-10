import { GoogleLogout } from "react-google-login";

const clientId = process.env.REACT_APP_CLIENT_ID

const Logout = () => {
    const onSuccess = () => {
        console.log("Logout successful!");
        const data = JSON.parse(localStorage.getItem("username"))
        localStorage.setItem("username", JSON.stringify([data[0].name = "", data[0].email = "", data[0].imageURL = "", data[1] = false]))
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