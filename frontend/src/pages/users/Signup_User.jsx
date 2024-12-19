import React, { useState, useEffect } from "react";
import {
  Link,
  Navigate,
  redirect,
  useLocation,
  useNavigate,
} from "react-router-dom";

const Signup_User = () => {
  const pathname = useLocation().pathname;

  if (pathname === "/user/signup") {
    useEffect(() => {
      const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("token="));
      if (token) {
        navigate("/");
      }
    }, []);
  }

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          city,
          country,
          phone,
          password,
        }),
      });

      const data = await res.json();

      if (res.status == 200) {
        document.querySelector(".message").innerHTML = data.message;
        document.cookie = `token=${data.token}; path=/;`;
        localStorage.setItem("userid", data.userid);
        navigate("/");
      } else {
        document.querySelector(".message").innerHTML = data.error;
      }
    } catch (error) {
      document.querySelector(".message").innerHTML = error.error;
    }
  };

  return (
    <>
      <div className="cont w-full h-screen pt-24 flex justify-center items-center bg-[var(--pri)] text-[var(--sec)]">
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
            onChange={(e) => setCity(e.target.value)}
            required
            placeholder="Enter Your city"
          />

          <input
            className="w-full px-2 py-4 bg-transparent text-black outline-none border-2 rounded-2xl border-[var(--sec)] m-2"
            type="text"
            onChange={(e) => setCountry(e.target.value)}
            required
            placeholder="Enter Your country"
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
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
};

export default Signup_User;
