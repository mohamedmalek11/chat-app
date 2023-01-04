import { getAuth, signOut } from "firebase/auth";

const style = {
  button: `text-red-600 p-1 bg-white rounded-sm Properties text-s px-3 my-2`,
};
const SignOut = () => {
  const googleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
  };
  return <button onClick={googleSignOut} className={style.button}>LogOut</button>;
};

export default SignOut;
