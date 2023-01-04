import React from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase";
import { GoogleButton } from "react-google-button";

const style = {
  buttonWrapper: `flex justify-center`,
  button: `bg-lime-800`,
};
const Signin = () => {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };
  return (
    <div className={style.buttonWrapper}>
      <GoogleButton
        onClick={googleSignIn}
        className={style.button}
        style={{ backgroundColor: "non" }}
      />
    </div>
  );
};

export default Signin;
