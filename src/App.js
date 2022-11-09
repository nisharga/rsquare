import { Route, Routes } from "react-router-dom";
import "./App.css";
import Signup from "./Components/Signup/Signup";
import Login from "./Components/Login/Login";
import Errorpage from "./Components/Errorpage/Errorpage";
import Medialibrary from "./Components/Medialibrary/Medialibrary";
import { useQuery } from "@tanstack/react-query";

function App() {
  // const { isLoading, error, data } = useQuery(["repoData"], () =>
  //   fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
  //     res.json()
  //   )
  // );

  // if (isLoading) return "Loading...";

  // if (error) return "An error has occurred: " + error.messag;

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
