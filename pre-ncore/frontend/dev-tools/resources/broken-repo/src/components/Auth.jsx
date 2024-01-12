import React, { useContext } from "react";
import UserContext from "../contexts/UserContext";
import emilyUser from "../users/emily";

function Auth() {
  const { user, setUser } = useContext(UserContext);

  function handleAuth() {
    if (!user.username) {
      setUser((user) => {
        user.username = emilyUser.username;
        user.avatar = emilyUser.avatar;

        return user;
      });
    } else {
      setUser({ username: "", avatar: "" });
    }
    console.log(user);
  }
  return (
    <section>
      <br></br>
      {!user.username ? (
        <>
          <p>You are not signed in</p>
          <button onClick={handleAuth}>Sign In</button>
        </>
      ) : (
        <>
          <img
            src={user.avatar}
            style={{ borderRadius: "50px 50px", height: "250px" }}
            alt={`avatar for ${user.username}`}
          ></img>
          <p>{user.username} is Signed in</p>
          <button onClick={handleAuth}>Sign Out</button>
        </>
      )}
    </section>
  );
}

export default Auth;
