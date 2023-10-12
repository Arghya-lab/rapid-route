import { useNavigate } from "react-router-dom"


function SideBar() {
  const navigate = useNavigate()

  const name = localStorage.getItem("name")
  const email = localStorage.getItem("email")
  // const isAuth = Boolean(localStorage.getItem("token"))

  const handleLogout = () =>{
      localStorage.removeItem("name", undefined);
      localStorage.removeItem("email", undefined);
      localStorage.removeItem("token", undefined);
      navigate("/login")
  }


  return (
    <div className="min-w-[280px] max-w-full h-full bg-neutral-content p-6 rounded-lg my-1 flex flex-col space-y-8 relative" >
      <div className="bg-neutral-focus p-3 rounded-md text-neutral-content">
        <p className="font-semibold text-xl capitalize font-mono">{name}</p>
        <p className="">{email}</p>
      </div>
      <button className="btn btn-active btn-primary">Create new</button>
      <button className="btn btn-active btn-ghost absolute w-[calc(100%-3rem)] bottom-8" onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default SideBar