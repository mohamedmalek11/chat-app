import { auth } from "../firebase";
const style = {
  message: `flex flex-col relative text-start`,
  messageStart: `items-start`,
  messageEnd: `items-end`,
  name: `text-gray-600 text-xs  mx-2`,
  text: `shadow-xl m-2 mt-1 mb-4 py-1 px-[10px] rounded`,
  sent: `bg-lime-700 text-white flex-row-reverse rounded`,
  received: `bg-[#e5e5ea] text-black rounded`,
};
function Message({ message }) {
  const textClass =
    message.uid === auth.currentUser.uid
      ? `${style.sent}`
      : `${style.received}`;

  const messageClass =
    message.uid === auth.currentUser.uid
      ? `${style.messageEnd}`
      : `${style.messageStart}`;
  return (
    <div>
      <div className={`${style.message} ${messageClass}`}>
        {message.uid !== auth.currentUser.uid ? (
          <p className={style.name}>{message.name}</p>
        ) : null}
        <div style={style.textWrapper} className={`${style.text} ${textClass}`}>
          <p>{message.text}</p>
        </div>
      </div>
    </div>
  );
}

export default Message;
