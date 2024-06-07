import Main from "./pages/Main";
import Signup from "./components/Signup";
import Logout from "./components/logout";
import { useEffect } from "react";
import { gapi } from "gapi-script"
import { Route, Routes } from "react-router-dom"

const clientId = "988563869606-he9454qn5qus04sq86hh0f9nmm955ba2.apps.googleusercontent.com"

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
      {/* <Signup /> */}
      {/* <Logout /> */}
      {/* <Main /> */}
    </>
  );
}

export default App;
