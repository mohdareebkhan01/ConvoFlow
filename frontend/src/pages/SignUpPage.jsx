function SignUpPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-slate-900/80 backdrop-blur-xl p-8 shadow-2xl">

        <h1 className="text-3xl font-bold text-white text-center">
          Create Account
        </h1>

        <p className="text-slate-400 text-center mt-2">
          Join ConvoFlow today
        </p>

        <div className="mt-8 space-y-4">

          <div>
            <label className="text-sm text-slate-300">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-800/70 px-4 py-3 text-white outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="text-sm text-slate-300">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-800/70 px-4 py-3 text-white outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="text-sm text-slate-300">
              Password
            </label>

            <input
              type="password"
              placeholder="Create a password"
              className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-800/70 px-4 py-3 text-white outline-none focus:border-blue-500"
            />
          </div>

          <button className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-500 transition">
            Create Account
          </button>

        </div>

        <p className="mt-6 text-center text-sm text-slate-400">
          Already have an account?{" "}
          <a href="/login" className="text-blue-400 hover:text-blue-300">
            Login
          </a>
        </p>

      </div>
    </div>
  );
}

export default SignUpPage;