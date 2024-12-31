import React from "react";

const Aside = () => {
  return (
    <>
      <div className="aside w-[30%] h-screen bg-[var(--extra)]">
        <div className="profile w-full h-[100px] bg-red-500 flex justify-center items-center">
          <div className="pp w-[30%] h-full">
            <img src="#" alt="" />
          </div>
          <div className="w-[70%] h-full flex flex-col gap-1 justify-center items-start">
            <h1 className="text-[18px] font-semibold capitalize">
              lorem ipsum pixel
            </h1>
            <p className="capitalize">recruiter</p>
          </div>
        </div>

        <div className="mt-4">
          {[
            {
              pathname: "/",
              name: "home",
            },
            {
              pathname: "/user/profile",
              name: "profile",
            },
            {
              pathname: "/",
              name: "job",
            },
            {
              pathname: "/application",
              name: "application",
            },
          ].map((item) => (
            <div
              key={item.name}
              className="navlink w-full h-[50px] flex justify-center items-center capitalize text-[18px] mt-4"
            >
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Aside;
