import React, { useState, useEffect } from "react";
import {
  Link,
  Navigate,
  redirect,
  useLocation,
  useNavigate,
} from "react-router-dom";

const Signup_User = () => {
  const navigate = useNavigate();
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

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
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
        credentials: "include",
        body: JSON.stringify({
          name,
          email,
          phone,
          password,
        }),
      });

      const data = await res.json();

      if (res.status == 200) {
        alert(data.message);
        localStorage.removeItem("userid");
        localStorage.removeItem("recruiterid");
        localStorage.setItem("userid", data.userid);
        localStorage.setItem("profile", JSON.stringify(data.profile));
        navigate("/");
      } else {
        document.querySelector(".message").innerHTML = data.error;
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <div className="w-full h-screen pt-20">
      <div className="bg-[var(--pri)] flex h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div className="bg-white shadow-md rounded-md p-6">

            <h2 className="my-3 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign up for an account
            </h2>

            <form className="space-y-6" method="POST">
              <div>
                <div className="mt-1">
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    name="username"
                    type="username"
                    required
                    placeholder="Enter your name"
                    className="px-2 py-3 mt-1 block w-full border-[1px] border-[var(--pri)] shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                
                <div className="mt-1">
                  <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                    name="email"
                    type="email-address"
                    
                    required
                    placeholder="Enter your email"
                    className="px-2 py-3 mt-1 block w-full border-[1px] border-[var(--pri)] shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                
                <div className="mt-1">
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    name="phone"
                    type="tel"
                    pattern="[0-9]{10}"
                    required
                    placeholder="Enter your phone number"
                    className="px-2 py-3 mt-1 block w-full border-[1px] border-[var(--pri)] shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                
                <div className="mt-1">
                  <input

                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    name="password"
                    type="password"
                    required
                    placeholder="Enter your password"
                    className="px-2 py-3 mt-1 block w-full border-[1px] border-[var(--pri)] shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                  />
                </div>
              </div>

              <p className="message text-red-500 font-medium capitalize"></p>

              <div>
                <button
                  onClick={handleSubmit}
                  className="flex w-full justify-center rounded-md border border-transparent bg-sky-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
                >
                  Register Account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Signup_User;