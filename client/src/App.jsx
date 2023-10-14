import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import CreateLinkPage from "./Pages/CreateLinkPage";
import AnalyticsPage from "./Pages/AnalyticsPage";

function App() {
  return (
    <div className="h-screen min-h-[600px]">
      <NavBar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreateLinkPage />} />
        <Route path="/analytic" element={<AnalyticsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
