import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import avatar from '../data/avatar.jpg';
import { Cart, Chat, Notification, UserProfile } from '.';
import { useStateContext } from '../contexts/ContextProvider';

// Defines a functional React component named 'NavButton'. This component is designed to display
// a button within a navigation bar, typically containing an icon and an optional notification dot.
// It also utilizes a tooltip to provide additional information to the user.
const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  // 'TooltipComponent' wraps the button to provide a tooltip. The 'content' prop determines
  // what text appears in the tooltip, and 'position' prop specifies where the tooltip appears
  // relative to the button.
  <TooltipComponent content={title} position="BottomCenter">
    {/*  A button element that triggers a custom function on click. It's styled with Tailwind CSS 
    // and inline styles for flexibility. */}
    <button
      type="button"  // Specifies that the button has no default behavior and its type is for general use in forms or dialogs.
      onClick={() => customFunc()}  // Adds an onClick event handler that calls a function passed as a prop.
      style={{ color }}  // Inline style for text color of the button, allowing dynamic change of color.
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
      // Tailwind classes are used here:
      // 'relative' - sets the positioning context for the absolute elements inside this button.
      // 'text-xl' - sets the size of the icon inside the button.
      // 'rounded-full' - makes the button fully rounded.
      // 'p-3' - applies padding around the content of the button.
      // 'hover:bg-light-gray' - changes background color to light gray on hover.
    >
      {/* A small span element styled as a dot, typically used to show notification alerts. */}
      {/* This dot is absolutely positioned within the button to appear at the top-right corner. */}
      <span
        style={{ background: dotColor }}  // Inline style for background color, allowing the color to be set dynamically.
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
        // Tailwind classes configure the dot:
        // 'absolute' - positions the dot relative to the nearest positioned ancestor (the button).
        // 'inline-flex' - applies flexbox layout inline.
        // 'rounded-full' - makes the dot circular.
        // 'h-2 w-2' - sets height and width of the dot to 0.5rem (2 units in Tailwind's default scale).
        // 'right-2 top-2' - positions the dot 0.5rem away from the top and right edges of the button.
      />
      {icon}  {/* Displays the icon passed as a prop inside the button. */}
    </button>
  </TooltipComponent>
);


// 'Navbar' is a functional React component that uses various hooks and context to manage its state and behavior.
const Navbar = () => {
  // Extracts multiple values from a custom React context. These values are used to manage UI state and responsiveness.
  const { currentColor, activeMenu, setActiveMenu, handleClick, isClicked, setScreenSize, screenSize } = useStateContext();

  // The first useEffect hook listens to window resize events to adjust the 'screenSize' state,
  // which is used to toggle visibility of certain UI elements based on the screen width.
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth); // Updates screenSize in context based on the window width.

    window.addEventListener('resize', handleResize); // Adds the event listener for window resize.

    handleResize(); // Initial call to set the size on component mount.

    // Cleanup function to remove the event listener when the component unmounts.
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // The second useEffect hook adjusts the visibility of the menu based on the 'screenSize' state,
  // hiding it on smaller screens and showing it on larger screens.
  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false); // Hides the menu on smaller screens.
    } else {
      setActiveMenu(true); // Shows the menu on larger screens.
    }
  }, [screenSize]);

  // Function to toggle the 'activeMenu' state.
  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  // The rendered JSX of the component.
  return (
    <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative">
      {/*  A responsive button that toggles the menu visibility. */}
      <NavButton title="Menu" customFunc={handleActiveMenu} color={currentColor} icon={<AiOutlineMenu />} />
      <div className="flex">
       {/* Additional navigation buttons for different functionalities like cart, chat, notifications, and user profile. */}
        <NavButton title="Cart" customFunc={() => handleClick('cart')} color={currentColor} icon={<FiShoppingCart />} />
        <NavButton title="Chat" dotColor="#03C9D7" customFunc={() => handleClick('chat')} color={currentColor} icon={<BsChatLeft />} />
        <NavButton title="Notification" dotColor="rgb(254, 201, 15)" customFunc={() => handleClick('notification')} color={currentColor} icon={<RiNotification3Line />} />
        {/* Tooltip component wrapping a clickable profile section. */}
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick('userProfile')}
          >
            {/* User profile image and greeting display. */}
            <img
              className="rounded-full w-8 h-8"
              src={avatar}
              alt="user-profile"
            />
            <p>
              <span className="text-gray-400 text-14">Hi,</span>
              <span className="text-gray-400 font-bold ml-1 text-14">Michael</span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>
        {/* Conditionally rendered components based on 'isClicked' state indicating which sections are active. */}
        {isClicked.cart && (<Cart />)}
        {isClicked.chat && (<Chat />)}
        {isClicked.notification && (<Notification />)}
        {isClicked.userProfile && (<UserProfile />)}
      </div>
    </div>
  );
};

// Exports the 'Navbar' component to allow its use in other parts of the application.
export default Navbar;
