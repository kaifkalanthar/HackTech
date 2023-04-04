import { Route, Routes } from "react-router-dom";
import NavBar from "./comp/navBar";
import Home from "./comp/home";
import AllPs from "./comp/allPs";


function App() {
  return (
    <>
      <NavBar />
      <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path="/ps" element = {<AllPs/>}/>
      </Routes>
    </>
  );
}

export default App;
