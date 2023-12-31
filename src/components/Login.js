import React, { useRef, useState } from "react";
import Header from "./Header";
import validateData from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { BG_URL } from "../utils/constants";

const Login = () => {
  const [isSignedIn, setIsSignedIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
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
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              // Profile updated!
              // ...
            })
            .catch((error) => {
              // An error occurred
              // ...
              setErrorMessage(error.message);
            });
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
        <img src={BG_URL} alt="background-img" />
      </div>
      <form className="absolute w-4/12 bg-black p-16 my-28 mx-auto right-0 left-0 text-white bg-opacity-90">
        <h1 className="text-3xl mb-4">{isSignedIn ? "Sign In" : "Sign Up"}</h1>
        {!isSignedIn && (
          <input
            ref={name}
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
