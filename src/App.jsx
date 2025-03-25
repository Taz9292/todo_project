
import { useDispatch, useSelector } from "react-redux"
import LoginForm from "./components/LoginForm"
import ToDo from "./components/ToDo"
import { Navigate, Route, Router, Routes } from "react-router-dom";

function App() {  

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  
  return (
    <>      
      <Routes>
        <Route path="/" element={isAuthenticated ? <Navigate to="/todo" /> : <LoginForm />} />
        <Route path="/todo" element={isAuthenticated ? <ToDo /> : <Navigate to="/" />} />
      </Routes>    

    </>
  )
}

export default App
