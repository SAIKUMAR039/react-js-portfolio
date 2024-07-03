import React from "react";
import { Menus } from "../utils/helper";
import MenuItem from "../components/MenuItem";

const Header = () => {
  return (
    <div className="fixed bottom-0  right-0 lg:right-0  lg:top-0 w-full lg:w-32 h-auto lg:h-screen flex justify-center items-end lg:items-center pb-0 mr-1 lg:pb-0 z-50">
      <div className="w-auto max-w-screen-sm lg:w-auto px-4 py-3 lg:py-12 rounded-full lg:rounded-full border border-[rgba(225,255,255,0.3)] flex flex-row lg:flex-col items-center justify-evenly lg:justify-center gap-6 lg:gap-12 duration-200 backdrop-blur-md">
        {Menus?.map((item) => (
          <MenuItem key={item.id} menu={item} />
        ))}
      </div>
    </div>
  );
};

export default Header;
