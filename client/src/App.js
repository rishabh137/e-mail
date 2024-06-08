import Main from "./pages/Main";
import Signup from "./components/Signup";
import Logout from "./components/logout";
import { useEffect } from "react";
import { gapi } from "gapi-script"
import { Route, Routes } from "react-router-dom"

const clientId = process.env.REACT_APP_CLIENT_ID

function App() {

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: ""
      })
    };

    gapi.load('client:auth2', start)
  })

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Signup />} />
        <Route exact path="/mail" element={<Main />} />
        <Route exact path="/logout" element={<Logout />} />
      </Routes>
    </>
  );
}

export default App;
