import { GoogleLogin } from "react-google-login";
import EmailIcon from '@mui/icons-material/Email';
import { useContext } from "react";
import "../App.css"
import { Navigate } from "react-router-dom";
import { UserContext } from "../App";

const clientId = process.env.REACT_APP_CLIENT_ID


const Signup = ({ onSuccess, onFailure }) => {
    const { isLogged } = useContext(UserContext)

    return (
        <>
            {
                !isLogged ?
                    <div className="container">
                        <EmailIcon style={{ color: "#ee2400", fontSize: 60, marginBottom: 15 }} />
                        <h1>Create Your Google Account</h1>
                        <GoogleLogin style={{ fontWeight: "bold" }}
                            clientId={clientId}
                            buttonText={"SIGNIN WITH GOOGLE"}
                            onSuccess={onSuccess}
                            onFailure={onFailure}
                            isSignedIn={true}
                        />
                    </div>
                    :
                    <Navigate to={"/mail/inbox"} />
            }
        </>
    )
}

export default Signup