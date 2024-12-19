import React, { useState } from "react";

const Signin_Recruiter = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="cont w-full h-screen flex justify-center items-center bg-[var(--pri)] text-[var(--sec)]">
        <form
          action="#"
          className="w-[500px] h-fit p-2 bg-[var(--box)] flex flex-col justify-center items-center rounded-2xl"
        >
          <input
            className="w-full px-2 py-4 bg-transparent text-white outline-none border-2 rounded-2xl border-[var(--sec)] m-2"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter Your Email"
          />
          <br />

          <input
            className="w-full px-2 py-4 bg-transparent text-white outline-none border-2 rounded-2xl border-[var(--sec)] m-2"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter Your Password"
          />

          <button className="w-fit px-6 py-3 rounded-3xl bg-[var(--sec)] text-black mt-5">
            Sign In
          </button>
        </form>
      </div>
    </>
  );
};

export default Signin_Recruiter;
