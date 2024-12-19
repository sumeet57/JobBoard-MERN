import React from "react";

const Profile_User = () => {
  return (
    <>
      <div className="cont w-full h-screen bg-[var(--pri)] text-[var(--sec)] px-5 pt-24">
        <div className="profile w-[full] h-fit px-4 py-10  flex flex-col">
          <div className="imgcont w-[100px] h-[100px]">
            <img src="#" alt="profile pic" />
          </div>
          <div className="textcont text-[1.7vw] flex gap-4">
            <p className="w-fit h-fit px-4 py-2 border-2 border-white">name</p>
            <p className="w-fit h-fit px-4 py-2 border-2 border-white">email</p>
            <p className="w-fit h-fit px-4 py-2 border-2 border-white">phone</p>
            <p className="w-fit h-fit px-4 py-2 border-2 border-white">city</p>
            <p className="w-fit h-fit px-4 py-2 border-2 border-white">
              country
            </p>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
};

export default Profile_User;
