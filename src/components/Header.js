import React from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { preferredLang } from "../utils/constants";
import { setPreferredLang } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        //as soon as user sign in , redirect him to browse page , this can be done using navigate
        // ...
        navigate("/browse");
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  const handleGptToggle = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    console.log(e.target.value);
    dispatch(setPreferredLang(e.target.value));
  };

  return (
    <div className="absolute flex justify-between w-screen px-8 py-8 bg-gradient-to-b from-black z-10">
      <img className="w-44" src={LOGO} alt="logo" />

      {user && (
        <div className="flex">
          {showGptSearch && (
            <select
              className="m-5 rounded-md px-2 bg-gray-400 text-black"
              onChange={handleLanguageChange}
            >
              {preferredLang.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.value}
                </option>
              ))}
            </select>
          )}
          <button
            className="bg-purple-500 text-white rounded-md m-5 p-2"
            onClick={handleGptToggle}
          >
            {showGptSearch ? "Home" : "GPT Search"}
          </button>
          <img
            className="w-9 h-9 p-1 my-5"
            src={user?.photoURL}
            alt="userIcon"
          ></img>
          <button className="font-bold text-white" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
