const messages = [
    {
      messageId: 6,
      fromContact: "ziko",
      messageContent: "i was asking about you man ",
      sendTime: 6,
      toContact: "admi",
    },
    {
      messageId: 1,
      fromContact: "admi",
      messageContent: "hello mr ziko",
      sendTime: 1,
      toContact: "ziko",
    },
    {
      messageId: 4,
      fromContact: "admi",
      messageContent: "i miss you bruh",
      sendTime: 4,
      toContact: "ziko",
    },
    {
      messageId: 3,
      fromContact: "ziko",
      messageContent: "Yo admi",
      sendTime: 3,
      toContact: "admi",
    },
    {
      messageId: 5,
      fromContact: "ziko",
      message_content: "me too my friend",
      sendTime: 5,
      toContact: "admi",
    },
    {
      messageId: 2,
      fromContact: "admi",
      message_content: "how are you doing",
      sendTime: 2,
      toContact: "ziko",
    },
  ];
  const sorted = messages.sort((m1, m2) => {
    if (m1.sendTime > m2.sendTime) return 1;
    else if (m1.sendTime < m2.sendTime) return -1;
    else return 0;
  });
  
  console.log(sorted);