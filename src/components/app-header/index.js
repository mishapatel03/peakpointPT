import React from "react";
import logo from "../../assets/peak-point-pt-logo-landscape-min.png"

export default function AppHeader() {
   return (
    <React.Fragment>
      <div className="navbar bg-[#0b66e4] text-white">
        <div className="flex-1">
            <img className="w-56" src={logo}></img>
        </div>
        {/* <div className="flex-none">
          <ul className="menu menu-horizontal px-1 cursor-pointer text-xl">
            <li>
              <a>Logout</a>
            </li>
          
          </ul>
        </div> */}
      </div>
    </React.Fragment>
  );
}
