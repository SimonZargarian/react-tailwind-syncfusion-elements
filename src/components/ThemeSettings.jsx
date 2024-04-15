import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { BsCheck } from 'react-icons/bs';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { themeColors } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

// The 'ThemeSettings' functional component.
const ThemeSettings = () => {
  // Extracts necessary functions and state variables from context.
  const { setColor, setMode, currentMode, currentColor, setThemeSettings } = useStateContext();

  // The rendered JSX content of the component.
  return (
    <div className="bg-half-transparent w-screen fixed nav-item top-0 right-0">
      {/*  This wrapper provides a semi-transparent full-screen background and positions the settings panel. */}
      <div className="float-right h-screen dark:text-gray-200 bg-white dark:bg-[#484B52] w-400">
        {/*  Header section with a title and a close button. */}
        <div className="flex justify-between items-center p-4 ml-4">
          <p className="font-semibold text-lg">Settings</p>
          <button
            type="button"
            onClick={() => setThemeSettings(false)} // Closes the theme settings panel.
            style={{ color: 'rgb(153, 171, 180)', borderRadius: '50%' }}
            className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
          >
            <MdOutlineCancel />
          </button>
        </div>
        {/*  Section for selecting the theme mode (Light/Dark). */}
        <div className="flex-col border-t-1 border-color p-4 ml-4">
          <p className="font-semibold text-xl">Theme Option</p>
          <div className="mt-4">
            <input
              type="radio"
              id="light"
              name="theme"
              value="Light"
              onChange={setMode} // Changes the theme mode to Light.
              checked={currentMode === 'Light'} // Checks if the current mode is Light.
              className="cursor-pointer"
            />
            <label htmlFor="light" className="ml-2 text-md cursor-pointer">Light</label>
          </div>
          <div className="mt-2">
            <input
              type="radio"
              id="dark"
              name="theme"
              value="Dark"
              onChange={setMode} // Changes the theme mode to Dark.
              checked={currentMode === 'Dark'} // Checks if the current mode is Dark.
              className="cursor-pointer"
            />
            <label htmlFor="dark" className="ml-2 text-md cursor-pointer">Dark</label>
          </div>
        </div>
        {/*  Section for selecting theme colors. */}
        <div className="p-4 border-t-1 border-color ml-4">
          <p className="font-semibold text-xl">Theme Colors</p>
          <div className="flex gap-3">
            {themeColors.map((item, index) => (
              <TooltipComponent key={index} content={item.name} position="TopCenter">
                <div className="relative mt-2 cursor-pointer flex gap-5 items-center">
                  <button
                    type="button"
                    className="h-10 w-10 rounded-full cursor-pointer"
                    style={{ backgroundColor: item.color }}
                    onClick={() => setColor(item.color)} // Sets the selected color as the current color.
                  >
                    <BsCheck className={`ml-2 text-2xl text-white ${item.color === currentColor ? 'block' : 'hidden'}`} />
                    {/*  The check icon is displayed only if the item color is the current color. */}
                  </button>
                </div>
              </TooltipComponent>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Exports 'ThemeSettings' for use in other parts of the application.
export default ThemeSettings;

