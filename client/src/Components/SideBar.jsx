import { useNavigate } from "react-router-dom";

function SideBar() {
  const navigate = useNavigate();

  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");
  // const isAuth = Boolean(localStorage.getItem("token"))

  const handleLogout = () => {
    localStorage.removeItem("name", undefined);
    localStorage.removeItem("email", undefined);
    localStorage.removeItem("token", undefined);
    navigate("/login");
  };

  const handleRedirectCreatePage = () => {
    navigate("/create");
  };

  return (
    <div className="min-w-[280px] max-w-full h-full bg-neutral-content rounded-lg m-1 p-4 flex flex-col justify-between">
      <div className=" space-y-6">
        <div className="bg-neutral-focus p-3 rounded-md text-neutral-content">
          <p className="font-semibold text-xl capitalize font-mono">{name}</p>
          <p className="">{email}</p>
        </div>
        <button
          className="btn btn-active btn-primary w-full"
          onClick={handleRedirectCreatePage}>
          Create new
        </button>
      </div>
        <button className="btn btn-active btn-ghost w-full" onClick={handleLogout}>
          Logout
        </button>
      </div>
  );
}

export default SideBar;
