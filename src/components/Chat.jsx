import { Box, Button, Input, TextField, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { messages } from "./messagesList";
import { connect, sendMessage, disconnect } from "./WebSocketClient";
import Messages from "./Messages";
import { request } from "./databaseHelper";
export default function Chat() {
  /**
   * note that the errors are not handled such as wrong username or the receiver
   */

  const [allMessages, setAllMessages] = useState([]);
  const [username, setUsername] = useState("");
  const [uservalue, setUservalue] = useState("");
  const [message, setMessage] = useState("");
  const [toValue, setToValue] = useState("");
  const [receiver, setReciever] = useState("");
  const messageBox = useRef(null);
  // console.log(username);
  const callback = (message) => {
    const msg = JSON.parse(message);
    // if (msg.fromContact === username) {
    setAllMessages((prevState) => [...prevState, msg]);
    // }
  };

  useEffect(() => {
    connect(callback);
    return () => {
      disconnect();
    };
  }, []);
  useEffect(() => {
    const box = messageBox.current;
    box.scrollTop = box.scrollHeight;
    return () => {};
  }, [allMessages]);
  const sendMessageToSocket = () => {
    const msg = {
      fromContact: username,
      messageContent: message,
      sendTime: new Date().getTime(),
      toContact: toValue,
    };
    // console.log("sending message to the socket");
    // setAllMessages((prevState) => {
    //   console.log("done");
    //   return [...prevState, msg];
    // });
    sendMessage(msg);
    setMessage("");
  };
  const setUser = async (event) => {
    event.preventDefault();
    setUsername(uservalue);
    setReciever(toValue);
    const msgData = await request(
      "POST",
      "http://localhost:8080/api/v1/messages/conversation",
      { fromContact: uservalue, toContact: toValue }
    );
    const oldMessages = msgData.data;
    setAllMessages(oldMessages);
    setUservalue("");
    setToValue("");
  };

  return (
    <>
      <form action="" onSubmit={setUser}>
        <Box my={2} display={"flex"}>
          <TextField
            value={uservalue}
            onChange={(e) => {
              setUservalue(e.target.value);
            }}
            size="small"
            variant="filled"
            label="username"
            sx={{ width: "100%", mr: 3 }}
          />

          <TextField
            value={toValue}
            onChange={(e) => {
              setToValue(e.target.value);
            }}
            size="small"
            variant="filled"
            label="receiver"
            sx={{ width: "100%", mr: 3 }}
          />

          <Button type="submit" variant="outlined">
            submit
          </Button>
        </Box>
      </form>
      <Box
        ref={messageBox}
        width="100%"
        height={700}
        sx={{
          border: "1px solid black",
          overflow: "auto",
        }}
      >
        {username !== "" && (
          <Messages username={username} allMessages={allMessages} />
        )}
      </Box>
      <Box width="100%" my={2} display={"flex"}>
        <TextField
          sx={{ width: "100%", mr: 2 }}
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <Button
          variant="contained"
          size="large"
          color="success"
          onClick={sendMessageToSocket}
        >
          Send
        </Button>
      </Box>
    </>
  );
}
