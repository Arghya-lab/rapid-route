import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SideBar from "../Components/SideBar";

function CreateLinkPage() {
  const navigate = useNavigate();
  const baseApiUrl = import.meta.env.VITE_BASE_API_URL;
  const token = localStorage.getItem("token");

  const [formData, setFormData] = useState({
    destination: "",
    title: "",
  });

  const handleFormDataChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`${baseApiUrl}/urlShorten`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: token },
      body: JSON.stringify({ name: formData.title, url: formData.destination }),
    });
    const json = await res.json();

    if (json.success) {
      navigate("/");
      console.log(`Successfully created ${json.shortId}`);
    } else {
      console.log(json.error);
    }
  };

  const handleCancel = () => {
    navigate("/");
    console.log(`Successfully canceled.`);
  };

  return (
    <div className="flex h-[calc(100%-9.2rem)]">
      <div className="w-full h-full bg-base-100 p-6 rounded-lg m-1 flex flex-col space-y-8">
        <h2 className="text-3xl font-bold text-neutral-content">Create new</h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center mt-12 mb-6 space-y-4">
          <div className="w-full max-w-xl space-y-1">
            <p className="ml-3 font-semibold text-neutral-content">Title</p>
            <input
              type="text"
              placeholder="Title"
              name="title"
              value={formData.title}
              onChange={handleFormDataChange}
              className="input input-bordered input-primary w-full"
            />
          </div>
          <div className="w-full max-w-xl space-y-1">
            <p className="ml-3 font-semibold text-neutral-content">Destination</p>
            <input
              type="url"
              placeholder="https://www.example.com/"
              name="destination"
              value={formData.destination}
              onChange={handleFormDataChange}
              className="input input-bordered input-primary w-full"
            />
          </div>
          <div className="space-x-4">
            <button
              type="button"
              className="btn btn-wide btn-error"
              onClick={handleCancel}>
              Cancel
            </button>
            <button type="submit" className="btn btn-wide btn-accent">
              Create
            </button>
          </div>
        </form>
      </div>
      <SideBar />
    </div>
  );
}

export default CreateLinkPage;
