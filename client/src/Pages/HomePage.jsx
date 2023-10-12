import MainSection from "../Components/MainSection";
import SideBar from "../Components/SideBar";

function HomePage() {
  return (
      <div className="flex h-full">
        <MainSection />
        <SideBar />
      </div>
  );
}

export default HomePage;
