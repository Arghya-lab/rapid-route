function LoginPage() {
  return (
    <div className="w-full max-w-xl mx-auto">
      <form className="flex flex-col items-center mt-12 mb-6 space-y-4">
      <p className="mb-4 text-3xl font-semibold text-neutral">Login</p>
        <div className="w-full max-w-xl space-y-1">
          <p className="ml-3 font-semibold text-neutral">Name</p>
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered input-primary w-full"
          />
        </div>
        <div className="w-full max-w-xl space-y-1">
          <p className="ml-3 font-semibold text-neutral">Email</p>
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered input-primary w-full"
          />
        </div>
        <div className="w-full max-w-xl space-y-1">
          <p className="ml-3 font-semibold text-neutral">Password</p>
          <input
            type="password"
            placeholder="password"
            className="input input-bordered input-primary w-full"
          />
        </div>
        <button type="submit" className="btn btn-wide btn-neutral">Submit</button>
      </form>
      <div className="flex justify-end items-center">
        <p>Don’t have an account?</p>
        <button className="btn btn-link">Join Rapid route</button>
      </div>
    </div>
  );
}

export default LoginPage;
