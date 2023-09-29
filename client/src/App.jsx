import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
        <Footer />
    </div>
  );
}

export default App;
