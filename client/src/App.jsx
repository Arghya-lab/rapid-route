import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import CreateLinkPage from "./Pages/CreateLinkPage";
import AnalyticsPage from "./Pages/AnalyticsPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const mode = localStorage.getItem("mode");
  return (
    <div className="h-screen min-h-[600px]">
      <ToastContainer autoClose={3000} theme={mode} />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreateLinkPage />} />
        <Route path="/analytic" element={<AnalyticsPage />} />
      </Routes>
    </div>
  );
}

export default App;
