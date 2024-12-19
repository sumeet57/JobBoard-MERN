import React from "react";

const Header = () => {
  return (
    <>
      <nav className="w-full h-fit py-7 px-2 flex justify-between items-center fixed bg-black text-white">
        <div className="logo">
          <h1>jobboard</h1>
        </div>
        <div className="navlink flex justify-center items-center gap-2">
          <a href="/home">Home</a>
          <a href="/signup">Sign Up</a>
          <a href="/signin">Sign In</a>
        </div>
      </nav>
    </>
  );
};

export default Header;
