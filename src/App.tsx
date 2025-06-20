import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage/MainPage";
import ServerPage from "./pages/ServerPage/ServerPage";
import OptionsPage from "./pages/OptionsPage/OptionsPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/options" element={<OptionsPage />} />
        <Route path="/:serverId" element={<ServerPage />} />
      </Routes>
    </>
  );
}

export default App;
