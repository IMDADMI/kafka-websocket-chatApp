import { Box, Button, Input, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { messages } from "./messagesList";
import { connect, sendMessage, disconnect } from "./WebSocketClient";
import Messages from "./Messages";
export default function Chat() {
  var user = "hello";
  const [allMessages, setAllMessages] = useState([]);
  const [username, setUsername] = useState("");
  const [uservalue, setUservalue] = useState("");
  const [message, setMessage] = useState("");
  const [toValue, setToValue] = useState("");
  // console.log(username);
  const callback = (message) => {
    const msg = JSON.parse(message);
    console.log("the received messages is  : ", msg);
    console.log("the messages are : ", allMessages);
    console.log(user);
    // if (msg.fromContact === username) {
    console.log(msg.fromContact);
    console.log(username);
    // console.log("noice");
    setAllMessages((prevState) => [...prevState, msg]);
    // }
  };

  useEffect(() => {
    // console.log("use effect get called");
    const sorted = messages.sort((m1, m2) => {
      if (m1.sendTime > m2.sendTime) return 1;
      else if (m1.sendTime < m2.sendTime) return -1;
      else return 0;
    });

    connect(callback);

    setAllMessages(sorted);
    return () => {
      disconnect();
    };
  }, []);

  const sendMessageToSocket = () => {
    user = "mf hello";
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
  const setUser = (event) => {
    event.preventDefault();
    setUsername(uservalue);
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
        width="100%"
        height={600}
        sx={{
          border: "1px solid black",
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
