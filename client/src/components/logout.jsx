import { GoogleLogout } from "react-google-login";

const clientId = "988563869606-he9454qn5qus04sq86hh0f9nmm955ba2.apps.googleusercontent.com";

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