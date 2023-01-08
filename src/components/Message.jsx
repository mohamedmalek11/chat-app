import React from "react";
const style = {
  message: `flex flex-col relative items-start text-start`,
  name: `text-gray-600 text-xs  mx-4`,
  text: `shadow-xl m-2 mt-1 mb-4 py-1 px-[10px] rounded`,
  sent: `bg-[#395dff] text-white flex-row-reverse rounded`,
  received: `bg-[#e5e5ea] text-black rounded-br-full`,
  textWrapper: {
    backgroundColor: "",
  },
};
function Message({ message }) {
  return (
    <div>
      <div className={style.message}>
        <p className={style.name}>{message.name}</p>
        <div style={style.textWrapper} className={style.text}>
          <p>{message.text}</p>
        </div>
      </div>
    </div>
  );
}

export default Message;
