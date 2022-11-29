import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <>
      {JSON.stringify(props.user.secret)}
      {JSON.stringify(props.user.username)}
      {/* <PrettyChatWindow
        projectId="5d498a31-cd23-42b7-b367-4fcc9463bd2f"
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: "100%" }}
      /> */}
    </>
  );
};

export default ChatsPage;
