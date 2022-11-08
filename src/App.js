import { Route, Routes } from "react-router-dom";
import "./App.css";
import Signup from "./Components/Signup/Signup";
import Login from "./Components/Login/Login";
import Errorpage from "./Components/Errorpage/Errorpage";
import Medialibrary from "./Components/Medialibrary/Medialibrary";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Signup></Signup>} />
        <Route path="/login" element={<Login />} />
        <Route path="/medialibrary" element={<Medialibrary />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </div>
  );
}

export default App;
