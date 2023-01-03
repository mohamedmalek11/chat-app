import React from "react";
const style = {
  nav: `bg-lime-500 h-15 flex justify-between items-center p-4`,
  heading: `text-white text-2xl`
};
function Navbar() {
  return (
    <div className={style.nav}>
      <h1 className={style.heading}>Chat App</h1>
    </div>
  );
}

export default Navbar;
