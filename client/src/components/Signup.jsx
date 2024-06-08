import { GoogleLogin } from "react-google-login";
import { useState } from "react";
import Main from "../pages/Main";
// import { NavLink } from "react-router-dom";
import EmailIcon from '@mui/icons-material/Email';
import "../App.css"

const clientId = process.env.REACT_APP_CLIENT_ID

const Signup = () => {
    const [username, setUsername] = useState({ name: "", email: "", imageURL: "" })
    const [isLogged, setIsLogged] = useState(false)
    const onSuccess = (res) => {
        setUsername({ ...username, name: res.profileObj.name, email: res.profileObj.email, imageURL: res.profileObj.imageUrl })
        setIsLogged(true)
    }

    const onFailure = (res) => {
        alert("Authentication failed")
        setIsLogged(false)
    }


    return (
        <>
            {!isLogged ?
                <div className="container">
                    <EmailIcon style={{ color: "#ee2400", fontSize: 60, marginBottom: 15 }} />
                    <h1>Create Your Google Account</h1>
                    <GoogleLogin style={{ fontWeight: "bold" }}
                        clientId={clientId}
                        buttonText={"SIGNIN WITH GOOGLE"}
                        onSuccess={onSuccess}
                        onFailure={onFailure}
                        // cookiePolicy={'single_host_orgin'}
                        isSignedIn={true}
                    />
                </div>
                :
                <Main username={username} isLogged={isLogged} />}
        </>
    )
}

export default Signup