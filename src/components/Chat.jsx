import React, { useRef } from "react";
import Message from "./Message";
const style = {
  main: `flex felx-col p-[10px] relative`,
};
function Chat() {
    const scroll = useRef()
  return (
    <>
      <main className={style.main}>
        <Message />
      </main>
      <span ref={scroll}></span>
    </>
  );
}

export default Chat;
