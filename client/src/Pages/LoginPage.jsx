import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  const [isLoginPage, setIsLoginPage] = useState(true);
  const [formData, setFormData] = useState(
    isLoginPage
      ? {
          email: "",
          password: "",
        }
      : {
          name: "",
          email: "",
          password: "",
        }
  );

  const baseApiUrl = import.meta.env.VITE_BASE_API_URL;
  const signupApiUrl = `${baseApiUrl}/auth/signup`;
  const loginApiUrl = `${baseApiUrl}/auth/login`;

  const handleFormDataChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(isLoginPage ? loginApiUrl : signupApiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(
        isLoginPage
          ? {
              email: formData.email,
              password: formData.password,
            }
          : {
              name: formData.name,
              email: formData.email,
              password: formData.password,
            }
      ),
    });
    const json = await res.json();
    if (json.success) {
      const { name, email, token } = json.data;
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("token", token);
      navigate("/");
    } else {
      console.log(json.error);
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center mt-12 mb-6 space-y-4">
        <p className="mb-4 text-3xl font-semibold text-neutral">
          {isLoginPage ? "Login" : "Signup"}
        </p>
        {isLoginPage ? undefined : (
          <div className="w-full max-w-xl space-y-1">
            <p className="ml-3 font-semibold text-neutral">Name</p>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleFormDataChange}
              className="input input-bordered input-primary w-full"
            />
          </div>
        )}
        <div className="w-full max-w-xl space-y-1">
          <p className="ml-3 font-semibold text-neutral">Email</p>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleFormDataChange}
            className="input input-bordered input-primary w-full"
          />
        </div>
        <div className="w-full max-w-xl space-y-1">
          <p className="ml-3 font-semibold text-neutral">Password</p>
          <input
            type="password"
            placeholder="password"
            name="password"
            value={formData.password}
            onChange={handleFormDataChange}
            className="input input-bordered input-primary w-full"
          />
        </div>
        <button type="submit" className="btn btn-wide btn-neutral">
          {isLoginPage ? "Login" : "signup"}
        </button>
      </form>
      <div className="flex justify-end items-center">
        <p>
          {isLoginPage ? "Don’t have an account?" : "Already have account?"}
        </p>
        <button
          onClick={() => setIsLoginPage(!isLoginPage)}
          className="btn btn-link">
          {isLoginPage ? "Join Rapid route" : "Login"}
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
