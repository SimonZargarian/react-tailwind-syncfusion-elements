import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';

import { Button } from '.';
import { userProfileData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import avatar from '../data/avatar.jpg';

// Definition of the 'UserProfile' functional component.
const UserProfile = () => {
  // Accessing the 'currentColor' from the context, which likely controls the theme or color scheme of the application.
  const { currentColor } = useStateContext();

  // The rendered JSX content of the component.
  return (
    <div className="nav-item absolute right-1 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
      {/*  Outer div positions the user profile pane on the screen with specific styles for light and dark themes. */}
      <div className="flex justify-between items-center">
        {/* Header section with a title. */}
        <p className="font-semibold text-lg dark:text-gray-200">User Profile</p>
        {/* Button to close the user profile pane. */}
        <Button
          icon={<MdOutlineCancel />}
          color="rgb(153, 171, 180)"
          bgHoverColor="light-gray"
          size="2xl"
          borderRadius="50%"
        />
      </div>
      <div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6">
        {/* Display area for user image and basic information. */}
        <img
          className="rounded-full h-24 w-24"
          src={avatar}
          alt="user-profile"
        />
        <div>
          {/* User name displayed prominently. */}
          <p className="font-semibold text-xl dark:text-gray-200">Michael Roberts</p>
          {/* Additional user details like role and contact email. */}
          <p className="text-gray-500 text-sm dark:text-gray-400">Administrator</p>
          <p className="text-gray-500 text-sm font-semibold dark:text-gray-400">info@shop.com</p>
        </div>
      </div>
      <div>
        {/* Iteration over 'userProfileData' which could contain links or actions the user can take. */}
        {userProfileData.map((item, index) => (
          <div key={index} className="flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer dark:hover:bg-[#42464D]">
            <button
              type="button"
              style={{ color: item.iconColor, backgroundColor: item.iconBg }}
              className="text-xl rounded-lg p-3"
            >
              {item.icon}
            </button>
            <div>
              {/* Title and description for each user profile action or link. */}
              <p className="font-semibold dark:text-gray-200">{item.title}</p>
              <p className="text-gray-500 text-sm dark:text-gray-400">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5">
        {/* Logout button that could presumably handle user sign-out. */}
        <Button
          color="white"
          bgColor={currentColor}
          text="Logout"
          borderRadius="10px"
          width="full"
        />
      </div>
    </div>
  );
};

// Exporting the 'UserProfile' component so it can be used elsewhere in the application.
export default UserProfile;
