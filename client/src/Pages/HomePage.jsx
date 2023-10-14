import MainSection from "../Components/MainSection";
import SideBar from "../Components/SideBar";

function HomePage() {
  return (
      <div className="flex h-[calc(100%-9.2rem)]">
        <MainSection />
        <SideBar />
      </div>
  );
}

export default HomePage;
