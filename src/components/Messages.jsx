import React from "react";
import Sender from "./Sender";
import Reciever from "./Reciever";
export default function Messages({ allMessages, username }) {
  console.log(allMessages);
  return (
    <>
      {allMessages.map((mesg, index) => {
        return mesg.fromContact === username ? (
          <Sender key={index} content={mesg.messageContent} />
        ) : (
          <Reciever key={index} content={mesg.messageContent} />
        );
      })}
    </>
  );
}
