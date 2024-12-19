import React, { useEffect } from "react";
import { data } from "react-router-dom";

const Profile_User = () => {
  const userid = localStorage.getItem("userid");

  console.log(userid);

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
        sessionStorage.setItem("profile", JSON.stringify(data));
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    profile();
  }, [userid]);

  const userdata = JSON.parse(sessionStorage.getItem("profile") || "{}");

  return (
    <>
      <div className="cont w-full h-screen bg-[var(--pri)] text-[var(--sec)] px-5 pt-24">
        <div className="profile w-[full] h-fit px-4 py-10  flex flex-col">
          <div className="imgcont w-[100px] h-[100px]">
            <img src="#" alt="profile pic" />
          </div>
          <div className="textcont text-[1.7vw] flex gap-4">
            <p className="w-fit h-fit px-4 py-2 border-2 border-white">
              {userdata.user.name}
            </p>
            <p className="w-fit h-fit px-4 py-2 border-2 border-white">
              {userdata.user.email}
            </p>
            <p className="w-fit h-fit px-4 py-2 border-2 border-white">
              {userdata.user.phone}
            </p>
            <p className="w-fit h-fit px-4 py-2 border-2 border-white">
              {userdata.user.city}
            </p>
            <p className="w-fit h-fit px-4 py-2 border-2 border-white">
              {userdata.user.country}
            </p>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
};

export default Profile_User;
