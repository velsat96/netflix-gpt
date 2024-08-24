import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div>
      <Header></Header>
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/36a4db5b-dec2-458a-a1c0-662fa60e7473/1115a02b-3062-4dcc-aae0-94028a0dcdff/IN-en-20240820-TRIFECTA-perspective_WEB_eeff8a6e-0384-4791-a703-31368aeac39f_small.jpg"
          alt="Netflix first page background"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-70">
        <h1 className="font-bold text-3xl py-4">Sign In</h1>
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-black bg-opacity-70"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-black bg-opacity-70"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          Sign In
        </button>
        <p className="py-4">New to Netflix? Sign up now.</p>
      </form>
    </div>
  );
};

export default Login;
