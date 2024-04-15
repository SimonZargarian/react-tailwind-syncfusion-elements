import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';

import { Button } from '.';
import { chatData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

// Defines a 'Chat' functional component.
const Chat = () => {
  // Extracts 'currentColor' from a custom React context, likely used for theming purposes.
  const { currentColor } = useStateContext();

  // The component returns a JSX structure.
  return (
    <div className="nav-item absolute right-5 md:right-52 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
      {/*  This div is absolutely positioned to appear as a floating element on the page. It has styling for both light and dark themes. */}
      <div className="flex justify-between items-center">
        {/* Flex container for the header of the chat interface. */}
        <div className="flex gap-3">
          {/* Displays the title "Messages". */}
          <p className="font-semibold text-lg dark:text-gray-200">Messages</p>
          {/* Button indicating the number of new messages. */}
          <button type="button" className="text-white text-xs rounded p-1 px-2 bg-orange">
            5 New
          </button>
        </div>
        {/* A button component for closing the chat interface, with a custom icon. */}
        <Button
          icon={<MdOutlineCancel />}
          color="rgb(153, 171, 180)"
          bgHoverColor="light-gray"
          size="2xl"
          borderRadius="50%"
        />
      </div>
      <div className="mt-5">
        {/* Maps over 'chatData' to generate a list of message previews. */}
        {chatData?.map((item, index) => ( 
          <div key={index} className="flex items-center gap-5 border-b-1 border-color p-3 leading-8 cursor-pointer">
            <div className="relative">
              {/* Displays the sender's image. */}
              <img
                className="rounded-full h-10 w-10"
                src={item.image}
                alt={item.message}
              />
              {/* Status indicator, possibly showing online/offline status. */}
              <span
                style={{ background: item.dotColor }}
                className="absolute inline-flex rounded-full h-2 w-2 right-0 -top-1"
              />
            </div>
            <div>
              {/* Displays the message preview. */}
              <p className="font-semibold dark:text-gray-200">{item.message}</p>
              {/* Additional message details or description. */}
              <p className="text-gray-500 dark:text-gray-400 text-sm">{item.desc}</p>
              {/* Timestamp of the message. */}
              <p className="text-gray-500 dark:text-gray-400 text-xs">{item.time}</p>
            </div>
          </div>
        ))}
        <div className="mt-5">
          {/* A button to navigate to view all messages, styled according to the current theme color. */}
          <Button
            color="white"
            bgColor={currentColor}
            text="See all messages"
            borderRadius="10px"
            width="full"
          />
        </div>
      </div>
    </div>
  );
};

// Exports the 'Chat' component as the default export of this module.
export default Chat;
