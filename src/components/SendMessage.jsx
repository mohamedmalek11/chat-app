import { auth, db } from "../firebase";
import { useRef, useState } from "react";
import { addDoc, serverTimestamp, collection } from "firebase/firestore";

const style = {
  form: ` w-full max-w-[728px] flex text-l absolute bottom-0`,
  input: `w-full text-l p-3 bg-gray-900 text-white outline-none border-none`,
  button: `w-[20%] text-white bg-rose-500`,
};
const SendMessage = () => {
  const inputElement = useRef();
  const [input, setInput] = useState("");

  const sendNessageValue = async (event) => {
    event.preventDefault();
    const { uid, displayName } = auth.currentUser;
    input === ""
      ? console.log("no Value")
      : await addDoc(collection(db, "messages"), {
          text: input,
          name: displayName,
          uid,
          timestamp: serverTimestamp(),
        });
  };
  const focusInput = () => {
    inputElement.current.focus();
    inputElement.current.value = "";
  };
  return (
    <form onSubmit={sendNessageValue} className={style.form}>
      <input
        type="text"
        className={style.input}
        placeholder="Message"
        ref={inputElement}
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button className={style.button} onClick={focusInput} type="submit">
        Send
      </button>
    </form>
  );
};

export default SendMessage;
