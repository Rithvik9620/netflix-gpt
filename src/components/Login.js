import React, { useRef, useState } from "react";
import Header from "./Header";
import validateData from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [isSignedIn, setIsSignedIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  function validateForm() {
    const message = validateData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignedIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  }

  function handleToggleSign() {
    setIsSignedIn(!isSignedIn);
  }

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/893a42ad-6a39-43c2-bbc1-a951ec64ed6d/1d86e0ac-428c-4dfa-9810-5251dbf446f8/IN-en-20231002-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background-img"
        />
      </div>
      <form className="absolute w-4/12 bg-black p-16 my-28 mx-auto right-0 left-0 text-white bg-opacity-90">
        <h1 className="text-3xl mb-4">{isSignedIn ? "Sign In" : "Sign Up"}</h1>
        {!isSignedIn && (
          <input
            type="text"
            placeholder="Full name"
            className="p-4 my-2 rounded-md w-full bg-gray-800"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email or phone number"
          className="p-4 my-2 rounded-md w-full bg-gray-800"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-2 rounded-md w-full  bg-gray-800"
        />
        <p className="font-bold text-red-700 py-2">{errorMessage}</p>
        <button
          type="button"
          onClick={validateForm}
          className="w-full bg-red-700 mt-8 text-lg p-2 rounded-md"
        >
          {isSignedIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 mt-4 cursor-pointer" onClick={handleToggleSign}>
          {isSignedIn
            ? "New to Netflix? Sign up now."
            : "Already a user? Sign In."}
        </p>
      </form>
    </div>
  );
};

export default Login;
