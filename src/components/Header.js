import React from "react";

const Header = () => {
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="zero.png"
      />
      <div className="flex items-center">
        <img
          className="w-8 rounded-md"
          src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
          alt="userIcon.png"
        />
        <button className="text-white p-4">Sign out</button>
      </div>
    </div>
  );
};

export default Header;
