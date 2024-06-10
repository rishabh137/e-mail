import { routes } from "./routes/routes"
import { useEffect, createContext, useState, Suspense } from "react";
import { gapi } from "gapi-script"
import { Navigate, Route, Routes } from "react-router-dom"
import Signup from "./components/Signup";
import Loader from "./components/common/Loader";
import Logout from "./components/logout";

const clientId = process.env.REACT_APP_CLIENT_ID

export const UserContext = createContext({ username: {}, isLogged: false })
function App() {
  const [username, setUsername] = useState({ name: "", email: "", imageURL: "" })
  const [isLogged, setIsLogged] = useState(false)
  const onSuccess = (res) => {
    setUsername({ ...username, name: res.profileObj.name, email: res.profileObj.email, imageURL: res.profileObj.imageUrl })
    setIsLogged(true)
  }

  const onFailure = (res) => {
    alert("Network error")
    setIsLogged(false)
  }

  useEffect(() => {
    function start() {
      gapi.auth2.init({
        clientId: clientId,
        scope: ""
      })
    };

    gapi.load('client:auth2', start)
  })

  const data = JSON.parse(localStorage.getItem("username"))
  if (data[0].name === "" || data[0] === "") {
    localStorage.setItem("username", JSON.stringify([username, isLogged]))
  }

  return (
    <>
      <UserContext.Provider value={{ username: data[0], isLogged: data[1] }}>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route exact path="/" element={<Signup onSuccess={onSuccess} onFailure={onFailure} />} />
            <Route exact path={routes.main.path} element={<Navigate to={`${routes.emails.path}/inbox`} />} />
            <Route exact path={routes.main.path} element={<routes.main.element />}>
              <Route path={`${routes.emails.path}/:type`} element={<routes.emails.element />} />
              <Route path={routes.view.path} element={<routes.view.element />} />
            </Route>
            <Route exact path="/logout" element={<Logout />} />
            <Route exact path={routes.invalid.path} element={<Navigate to={'/'} />} />
          </Routes>
        </Suspense>
      </UserContext.Provider>
    </>
  );
}

export default App;
