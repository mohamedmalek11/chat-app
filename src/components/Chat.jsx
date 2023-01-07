import { query, collection, orderBy, onSnapshot } from "firebase/firestore";
import React, { useEffect, useRef, useState } from "react";
import { db } from "../firebase";
import Message from "./Message";
const style = {
  main: `flex flex-col p-[10px] relative`,
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
        console.log(doc.data());
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
          : null}
      </main>
      <span ref={scroll}></span>
    </>
  );
}

export default Chat;
