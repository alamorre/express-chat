import { useState } from "react";

import AuthPage from "./authPage";
import ChatsPage from "./chatsPage";

function App() {
  const [user, setUser] = useState();

  if (!user) {
    return <AuthPage callback={(user) => setUser(user)} />;
  } else {
    return <ChatsPage user={user} />;
  }
}

export default App;
