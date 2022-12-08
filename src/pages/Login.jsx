import React, { useContext, useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { MdAlternateEmail, MdArrowBack, MdPassword } from "react-icons/md";
import Loader from "../layout/Loader";
import { auth } from "../firebase/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../states/user_context";
import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const { user, dispatch } = useContext(UserContext);
  const [showLoader, setShowLoader] = useState(false);
  const navigate = useNavigate();
  console.log(userEmail, userPassword);

  const loginUser = async () => {
    setShowLoader(true);

    signInWithEmailAndPassword(auth, userEmail, userPassword)
      .then((userCredential) => {
        // Signed in
        const userVerified = userCredential.user;
        console.log(userVerified, "this is authorized user");
        dispatch({ type: "LOGIN", payload: userVerified });
        // ...
        setShowLoader(false);
        navigate("/client");
      })
      .catch((error) => {
        notify();
        
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        setShowLoader(false);
      });
  };

  const signUpUser = () => {
    createUserWithEmailAndPassword(auth, userEmail, userPassword)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  const notify = () =>
    toast.error("Incorrect email or password!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  return (
    <div className="relative">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />
      <Link to="/">
        <div className="p-5">
          <MdArrowBack />
        </div>
      </Link>
      {showLoader && (
        <div className="absolute left-0 right-0 top-0 bottom-0 ">
          {" "}
          <Loader />{" "}
        </div>
      )}
      <div className="h-screen w-full flex flex-col items-center justify-start pt-32">
        <div className="py-6">
          {/* <form onSubmit={loginUser}> */}
          <div className="mb-3 w-80 flex fles-row justify-between items-center h-10 border border-temp-gray2 bg-white px-2">
            <input
              onChange={(e) => setUserEmail(e.target.value)}
              className=" text-black outline-none w-full h-full bg-white placeholder:text-sm"
              required
              type="email"
              placeholder="youremail@example.com"
            />
            <span className="block w-4 h-4 ">
              <IconContext.Provider value={{ color: "#afafaf" }}>
                <div>
                  <MdAlternateEmail />
                </div>
              </IconContext.Provider>
            </span>
          </div>
          <div className="w-80 flex fles-row justify-between items-center h-10 border border-temp-gray2 bg-white  px-2">
            <input
              onChange={(e) => setUserPassword(e.target.value)}
              className=" text-black outline-none w-full h-full bg-white placeholder:text-sm"
              required
              type="password"
              placeholder="password"
            />
            <span className="block w-4 h-4 ">
              <IconContext.Provider value={{ color: "#afafaf" }}>
                <div>
                  <MdPassword />
                </div>
              </IconContext.Provider>
            </span>
          </div>
          <div className="w-full mt-6">
            <input
              type="submit"
              onClick={() => {
                loginUser();
              }}
              className="bg-black cursor-pointer hover:bg-slate-800 text-white w-full h-10 font-bold"
              value="Login"
            />
          </div>
          <div className="w-full mt-6">
            <input
              type="submit"
              onClick={() => signUpUser()}
              className="bg-black cursor-pointer hover:bg-slate-800 text-white w-full h-10 font-bold"
              value="Sign up"
            />
          </div>
          {/* </form> */}
        </div>
        <div className="mb-3">
          <h5 className="block text-sm font-bold text-black">Or</h5>
        </div>
        <div className="">
          <a className=" border-temp-red w-80 h-10  border flex items-center justify-center mb-3">
            <span className="flex flex-row items-center justify-evenly">
              <span className="block w-4 h-4 ">
                <IconContext.Provider value={{ color: "#afafaf" }}>
                  <div>
                    <FcGoogle />
                  </div>
                </IconContext.Provider>
              </span>
              <span className="block text-temp-red font-bold text-sm ml-2">
                Login with google
              </span>
            </span>
          </a>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Login;
