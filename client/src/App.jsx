import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <LoginPage />
      {/* <HomePage /> */}
      <Footer />
    </div>
  );
}

export default App;
