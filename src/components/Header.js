import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES, USER_ICON } from "../utils/constants";
import { toggleGptSearchMode } from "../utils/gptSlice";
import { changelang } from "../utils/userPrefSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const gptSearch = useSelector((store) => store.gpt?.showGptSearchBox);
  const language = useSelector((store) => store.pref.language);
  const languageOptions = SUPPORTED_LANGUAGES;

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const toggleGpt = () => {
    dispatch(toggleGptSearchMode());
  };

  const changeLanguage = (e) => {
    dispatch(changelang(e.target.value));
  };

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between">
      <img className="w-44" src={LOGO} alt="zero.png" />
      {user && (
        <div className="flex items-center">
          {gptSearch && (
            <select
              className="bg-gray-700 text-white px-2 py-2 m-2 rounded-lg"
              onChange={changeLanguage}
            >
              {languageOptions.map((lang) => (
                <option
                  key={lang.identifier}
                  value={lang.identifier}
                  selected={lang.identifier === language}
                >
                  {lang.lang}
                </option>
              ))}
            </select>
          )}
          <button
            className="text-white py-2 px-4 mx-4 my-2 rounded-lg bg-blue-950"
            onClick={toggleGpt}
          >
            {gptSearch ? "Homepage" : "GPT Search"}
          </button>
          <img className="w-8 rounded-md" src={USER_ICON} alt="userIcon.png" />
          <button onClick={handleSignOut} className="text-white p-4">
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
