import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function SideBar() {
  const navigate = useNavigate();

  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");

  const handleLogout = () => {
    localStorage.removeItem("name", undefined);
    localStorage.removeItem("email", undefined);
    localStorage.removeItem("token", undefined);
    navigate("/login");
    toast.success("Logout successful");
  };

  const handleRedirectCreatePage = () => {
    navigate("/create");
  };

  return (
    <div className="min-w-[280px] h-full bg-base-200 rounded-lg m-1 p-4 flex flex-col justify-between">
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
        <button className="btn btn-active btn-ghost w-full btn-neutral" onClick={handleLogout}>
          Logout
        </button>
      </div>
  );
}

export default SideBar;
