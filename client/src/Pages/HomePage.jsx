import SideBar from "../Components/SideBar"


function HomePage() {
  return (<>
    <div className="flex h-full">
      <div className="w-full">
        Hi
      </div>
      <SideBar />
    </div>
    <div className="h-1 w-screen"></div>
    </>
  )
}

export default HomePage