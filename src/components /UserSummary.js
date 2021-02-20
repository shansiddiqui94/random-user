import { useState, useEffect } from "react";
import fetchUser from "../services/rando_user";
import User from "./User";

function UserSummary() {
  const [currentUser, setCurrentUser] = useState(null);

  const refreshUser = async () => {
    const randoUserInfo = await fetchUser();
    setCurrentUser(randoUserInfo.results);
  };

  useEffect(() => {
    refreshUser();
  }, []);

  return (
    <main className="app-main">
      <button onClick={refreshUser}>⟳</button>
      {currentUser?.map((randoUser, index) => {
        return <User {...randoUser} key={index} />;
      })}
    </main>
  );
}

export default UserSummary;
