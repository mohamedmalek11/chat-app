import { query, collection, orderBy, onSnapshot } from "firebase/firestore";
import React, { useEffect, useRef, useState } from "react";
import { db } from "../firebase";
import Message from "./Message";
import SendMessage from "./SendMessage";

const style = {
  main: `flex flex-col p-[10px] pb-[40px] absolute top-[5rem] left-0 right-0 bottom-0 overflow-y-scroll`,
};

function Chat() {
  const [messages, setmessages] = useState([]);
  const scroll = useRef();
  useEffect(() => {
    const citiesRef = collection(db, "messages");
    const q = query(citiesRef, orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setmessages(messages);
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <main className={style.main}>
        {messages !== null
          ? messages.map((message) => {
              return <Message message={message} key={message.id} />;
            })
          : "loading.."}
        <span ref={scroll}></span>
      </main>
        <SendMessage scroll={scroll} />
    </>
  );
}

export default Chat;
