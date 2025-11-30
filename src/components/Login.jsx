import React, { useState, useRef } from "react";
// import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Header from "./Header";
import { isValidaData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser } from "../utils/userSlice";
import {USER_AVATAR ,LOGO} from "../utils/constants";


const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleSubmit = () => {
    //validate form data
    // console.log(email.current.value);
    // console.log(password.current.value);
    // console.log(name.current?.value);

    const message = isValidaData(
      isSignInForm ? "" : name.current?.value,
      email.current.value,
      password.current.value
    );
      setErrorMessage(message);
      if (message) return;
      // sign in and signup logic
      if (!isSignInForm) {
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
            
          }).then(() => {
            // Profile updated!
            const { uid, email, displayName, photoURL } = user;
            dispatch(addUser({ uid, email, displayName, photoURL }));
            // navigate('/browse');
            // console.log(user);
          }).catch((error) => {
            // An error occurred
            setErrorMessage(error.message);
          });   
         
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    } else {
      // sign in login
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          const { uid, email, displayName, photoURL } = user;
          dispatch(addUser({ uid, email, displayName, photoURL }));
          // navigate('/browse');
          // console.log(user);

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-f" + errorMessage);
        });
    }
  };
  const toggelSignInForm = () => {
    setIsSignInForm(!isSignInForm);

  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={LOGO}
          alt="netflix-logo"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black/80 my-36 mx-auto right-0 left-0 text-white rounded-lg"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <p className="text-red-500 py-4">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-700 w-full"
          type="submit" 
          onClick={handleSubmit}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4" onClick={toggelSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already have an account? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
