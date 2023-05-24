import { Route, Routes } from "react-router-dom";
import NavBar from "./comp/navBar";
import Home from "./comp/home";
import AllPs from "./comp/allPs";
import RegisterForm from "./comp/registerForm";
import RegisteredTeams from "./comp/registeredTeams";


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ps" element={<AllPs />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/teams" element={<RegisteredTeams/>} />
      </Routes>
    </>
  );
}

export default App;
