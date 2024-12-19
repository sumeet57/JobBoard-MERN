import React from "react";
import { useNavigate } from "react-router-dom";
const Logout = () => {
  const navigate = useNavigate();
  const logout = () => {
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    localStorage.removeItem("userid");
    sessionStorage.removeItem("profile");

    //for recruiter
    document.cookie = "Rtoken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    localStorage.removeItem("recruiterid");

    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Logout</h1>
      <p className="text-lg mb-6">Are you sure you want to logout?</p>
      <button
        onClick={logout}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
      >
        Yes, Logout
      </button>
    </div>
  );
};

export default Logout;
