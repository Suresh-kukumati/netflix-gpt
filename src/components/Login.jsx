import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ba53094c-3e3b-4789-94a6-baac10310f07/web/IN-en-20260420-TRIFECTA-perspective_52edec47-1b88-414a-bbbe-670f7229d886_large.jpg"
          alt=""
          aria-hidden="true"
          className="default-ltr-iqcdef-cache-19j6xtr"
        ></img>
      </div>
      <form className="w-3/11 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-black/80">
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        <input
          type="text"
          id="name"
          placeholder="Full Name"
          className="p-2 my-4 w-full bg-gray-700"
        />
        {!isSignIn && (
          <input
            type="text"
            id="email"
            placeholder="Email"
            className="p-2 my-4 w-full bg-gray-700"
          />
        )}

        <input
          type="password"
          id="password"
          placeholder="Password"
          className="p-2 my-4 w-full bg-gray-700"
        />
        <button className="p-2 my-4 bg-red-700 w-full rounded-lg">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignIn
            ? "New to Netflix? Sign Up Now"
            : "Already registerd ? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
