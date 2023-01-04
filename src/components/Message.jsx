import React from "react";
const style = {
  message: `flex items-center shadow-xl m-4 py-2 px-3 rounded-full`,
  name: `fixed mt-[-4rem] text-gray-600 text-xs`,
  sent: `bg-[#395dff] text-white flex-row-reverse text-end float-right
rounded-bl-full`,
  received: `bg-[#e5e5ea] text-black float-left rounded-br-full`,
};
function Message() {
  return (
    <div>
      <div className={style.message}>
        <p className={style.name}>MOHAMED</p>
        <p>hello message Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, ea.</p>
      </div>
    </div>
  );
}

export default Message;
