import React from "react";
import { GoogleButton } from "react-google-button";

const style = {
  buttonWrapper: `flex justify-center`,
  button: `bg-lime-800`
};
const Signin = () => {
  return (
    <div className={style.buttonWrapper}>
      <GoogleButton className={style.button} style={{backgroundColor: "non"}}/>
    </div>
  );
};

export default Signin;
