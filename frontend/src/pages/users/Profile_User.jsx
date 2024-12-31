import React, { useEffect } from "react";
// import { data } from "react-router-dom";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import UserApplication from "../../components/UserApplication";
import UserProfile from "../../components/UserProfile";

const Profile_User = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const userid = localStorage.getItem("userid");

  // console.log(userid);

  useEffect(() => {
    const profile = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/users/profile", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: userid }),
        });
        const data = await res.json();
        localStorage.setItem("profile", JSON.stringify(data));
      } catch (error) {
        console.log(error);
      }
    };
    profile();
  }, [userid]);

  const userdata = JSON.parse(localStorage.getItem("profile"));

  if(userdata === null){
    const getprofile = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/users/profile", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: userid }),
        });
        const data = await res.json();
        localStorage.setItem("profile", JSON.stringify(data));
      } catch (error) {
        console.log(error);
      }
  }};

  // console.log(userdata);

  const logoutbt = () => {
    navigate("/user/logout");
  };

  return (
    <>
      {location.pathname === "/user/profile/application" || location.pathname === "/user/profile/update" ? (
        <Outlet />
      ) : (
        <div className="cont w-full h-fit bg-[var(--pri)] text-[var(--sec)] px-5 pt-24 flex flex-col items-start">
          <UserProfile profile = {userdata} />
          <hr />
          <UserApplication profile = {userdata} />
          <button
            onClick={logoutbt}
            className="px-8 py-2 ml-4 bg-red-500 border-2 border-white mt-4 rounded-xl capitalize font-medium"
          >
            logout
          </button>
        </div>
      )}
    </>
  );
};

export default Profile_User;
