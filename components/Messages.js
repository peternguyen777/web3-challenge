import React, { useRef } from "react";
import { ByMoralis, useMoralis, useMoralisQuery } from "react-moralis";
import SendMessage from "./SendMessage";
import Message from "./Message";

const MINS_DURATION = 1440;

const Messages = () => {
  const { user } = useMoralis();
  const endOfMessagesRef = useRef(null);
  const { data, isLoading, error } = useMoralisQuery(
    "Messages",
    (query) =>
      query
        .ascending("createdAt")
        .greaterThan(
          "createdAt",
          new Date(Date.now() - 1000 * 60 * MINS_DURATION)
        ),
    [],
    {
      live: true,
    }
  );

  return (
    <div className='pb-56'>
      <div className='my-5'>
        <ByMoralis
          variant='light'
          style={{ marginLeft: "auto", marginRight: "auto" }}
        />
      </div>

      {/* Each Message */}
      <div className='space-y-10 px-5'>
        {data.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>

      {/* Send Message */}
      <div className='flex justify-center'>
        <SendMessage endOfMessagesRef={endOfMessagesRef} />
      </div>

      <div ref={endOfMessagesRef} className='mt-5 text-center text-gray-400'>
        <p>You're up to date {user.getUsername()} 🤖</p>
      </div>
    </div>
  );
};

export default Messages;
