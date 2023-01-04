import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import SignIn from "./SignIn";
import SignOut from "./SignOut";

const style = {
  nav: `bg-lime-500 h-15 flex justify-between items-center p-4`,
  heading: `text-white text-2xl`,
};
const Navbar = () => {
  const [user] = useAuthState(auth);
  // console.log(user);
  return (
    <div className={style.nav}>
      <h1 className={style.heading}>Chat App</h1>
      {user ? <SignOut /> : <SignIn />}
    </div>
  );
};

export default Navbar;
