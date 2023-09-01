import SockJS from "sockjs-client";
import Stomp from "stompjs";


let stompClient = null;

function onConnect(options, stateCallBack) {
  console.log("connected");
  stompClient.subscribe("/topic/chatMessages", (message) =>
    onMessageReceive(message, stateCallBack)
  );
  console.log("subscribed");

}

function onMessageReceive(message, stateCallBack) {
  console.log("receiving the msg : ", message.body);
  stateCallBack(message.body);
}
function connect(stateCallBack) {
  var socket = new SockJS("http://localhost:8080/chat-endpoint");
  stompClient = Stomp.over(socket);
  stompClient.connect(
    {},
    (option) => onConnect(option, stateCallBack),
    onError
  );
}
function onError(e) {
  console.log(`couldn't connect to the websocket`);
  console.log(e);
}
function sendMessage(message) {
  const msg = JSON.stringify(message);
  if (stompClient) 
    stompClient.send("/app/chat", {}, msg);
  
}
function disconnect() {
  if (stompClient !== null) {
    stompClient.disconnect();
  }
}

// function callback(message){
//   console.log(message);
// }
// connect(callback);

export { connect, sendMessage, disconnect };
