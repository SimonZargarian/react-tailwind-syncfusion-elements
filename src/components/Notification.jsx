import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';

import { Button } from '.';
import { chatData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

// Defines a 'Notification' functional component.
const Notification = () => {
  // Accessing 'currentColor' from a React context which likely controls theme or color settings across the application.
  const { currentColor } = useStateContext();

  // The rendered JSX of the Notification component.
  return (
    <div className="nav-item absolute right-5 md:right-40 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
      {/*  Outer div that positions the notification panel absolutely with responsive positioning and theming. */}
      <div className="flex justify-between items-center">
        {/* Header section with title and a button indicating new notifications. */}
        <div className="flex gap-3">
          <p className="font-semibold text-lg dark:text-gray-200">Notifications</p>
          <button type="button" className="text-white text-xs rounded p-1 px-2 bg-orange-theme">5 New</button>
        </div>
        {/* Button component for closing the notification panel. Uses a custom icon. */}
        <Button 
          icon={<MdOutlineCancel />}
          color="rgb(153, 171, 180)"
          bgHoverColor="light-gray"
          size="2xl"
          borderRadius="50%"
        />
      </div>
      <div className="mt-5">
        {/* Maps over 'chatData' to display individual notification items. */}
        {chatData?.map((item, index) => (
          <div key={index} className="flex items-center leading-8 gap-5 border-b-1 border-color p-3">
            <img className="rounded-full h-10 w-10" src={item.image} alt={item.message} />
            <div>
              <p className="font-semibold dark:text-gray-200">{item.message}</p>
              <p className="text-gray-500 text-sm dark:text-gray-400">{item.desc}</p>
            </div>
          </div>
        ))}
        <div className="mt-5">
          {/* Button to navigate to a full list or detailed view of all notifications. */}
          <Button
            color="white"
            bgColor={currentColor}
            text="See all notifications"
            borderRadius="10px"
            width="full"
          />
        </div>
      </div>
    </div>
  );
};

// Exports the 'Notification' component, making it reusable across different parts of the application.
export default Notification;

