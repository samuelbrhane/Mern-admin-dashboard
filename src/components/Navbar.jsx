import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CHANGE_MODE, selectMode } from "../redux/slice/modeSlice";
import { BiSearch } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import { MdSettings, MdDarkMode } from "react-icons/md";
import { BsFillSunFill } from "react-icons/bs";

const Navbar = ({ setShowSidebar }) => {
  const mode = useSelector(selectMode);
  const dispatch = useDispatch();

  return (
    <section className="flex justify-between items-center py-3 px-5">
      {/* Left Side */}
      <div className="flex items-center gap-4">
        <AiOutlineMenu
          className="cursor-pointer icon md:hidden"
          onClick={() => setShowSidebar(true)}
        />
        <form className="relative md:w-[300px]">
          <input
            type="text"
            placeholder="Search..."
            className={`${
              mode === "dark" ? "bg-[#114a5d]" : "bg-[#f8fbfc]"
            } shadow py-1 px-3 rounded-md w-full`}
          />
          <button
            type="submit"
            className="absolute top-[50%] translate-y-[-50%] right-2"
          >
            <BiSearch />
          </button>
        </form>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        <MdSettings className="cursor-pointer icon" />
        <button onClick={() => dispatch(CHANGE_MODE())}>
          {mode === "dark" ? (
            <MdDarkMode className="icon" />
          ) : (
            <BsFillSunFill className="icon" />
          )}
        </button>
      </div>
    </section>
  );
};

export default Navbar;
