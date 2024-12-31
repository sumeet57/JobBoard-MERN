import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Signup_Recruiter = () => {
  const pathname = useLocation().pathname;
  const navigate = useNavigate();
    const checkfn = () => {
      useEffect(() => {
        if (pathname === "/recruiter/signup") {
          const cookies = document.cookie.split(';');
          for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.startsWith('token=')) {
              console.log(cookie + " found");
              navigate("/");
            }
          }
        }
      }, [pathname, navigate]);
    }
    checkfn();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/recruiters/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", //for accepting the cookies
        body: JSON.stringify({ name, email, phone, password }),
      });
      const data = await res.json();
      if (res.status === 200) {
        document.querySelector(".message").innerHTML = data.message;
        //removing all th cookies and localstorage, sessionstorage

        localStorage.clear();
        sessionStorage.clear();

        //setting the new cookies and localstorage

        localStorage.setItem("recruiterid", data.recruiterid);
        navigate("/");
      } else {
        document.querySelector(".message").innerHTML = data.error;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="cont w-full h-screen flex justify-center items-center bg-[var(--pri)] text-[var(--sec)]">
        <form
          action="#"
          className="w-[500px] h-fit p-2 bg-[var(--box)] flex flex-col justify-center items-center rounded-2xl"
        >
          <input
            className="w-full px-2 py-4 bg-transparent text-black outline-none border-2 rounded-2xl border-[var(--sec)] m-2"
            type="text"
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Enter Your Name"
          />

          <input
            className="w-full px-2 py-4 bg-transparent text-black outline-none border-2 rounded-2xl border-[var(--sec)] m-2"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter Your Email"
          />

          <br />

          <input
            className="w-full px-2 py-4 bg-transparent text-black outline-none border-2 rounded-2xl border-[var(--sec)] m-2"
            type="text"
            onChange={(e) => setPhone(e.target.value)}
            required
            placeholder="Enter Your PhoneNo"
          />

          <input
            className="w-full px-2 py-4 bg-transparent text-black outline-none border-2 rounded-2xl border-[var(--sec)] m-2"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter Your Password"
          />

          <p className="message text-red-500"></p>

          <button
            onClick={handleSubmit}
            className="w-fit px-6 py-3 rounded-3xl bg-[var(--sec)] text-black mt-5"
          >
            Sign Up As Recruiter
          </button>
        </form>
      </div>
    </>
  );
};

export default Signup_Recruiter;
