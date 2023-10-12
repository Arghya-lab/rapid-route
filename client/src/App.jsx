import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import CreateLinkPage from "./Pages/CreateLinkPage";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreateLinkPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
