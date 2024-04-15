// Importing React library from 'react' package
import React from 'react';

// Importing the custom hook 'useStateContext' from the relative path '../contexts/ContextProvider'.
// This hook is likely used to access and manage the application's state context.
import { useStateContext } from '../contexts/ContextProvider';

// Define the 'Button' component with destructured props. This allows for each button instance to have
// its own custom settings for appearance and behavior.
const Button = ({ icon, bgColor, color, bgHoverColor, size, text, borderRadius, width }) => {
  // Accessing 'setIsClicked' and 'initialState' from the context using the custom hook.
  // 'setIsClicked' is probably a function to update the state and 'initialState' represents
  // the initial or default state value.
  const { setIsClicked, initialState } = useStateContext();

  // Rendering a 'button' element with various dynamic styles and behaviors:
  return (
    <button
      // Setting the button type to "button" to specify its behavior in forms.
      type="button"
      // When the button is clicked, it triggers 'setIsClicked' with 'initialState', likely resetting
      // some state to its initial values.
      onClick={() => setIsClicked(initialState)}
      // Inline style object that applies the background color, text color, and border radius from props.
      style={{ backgroundColor: bgColor, color, borderRadius }}
      // Using Tailwind CSS for dynamic class binding:
      // - `text-${size}` dynamically adjusts the text size based on the 'size' prop.
      // - `p-3` applies padding of 3 units.
      // - `w-${width}` controls the width of the button based on the 'width' prop.
      // - `hover:drop-shadow-xl` applies an extra-large drop shadow on hover.
      // - `hover:bg-${bgHoverColor}` changes the background color on hover to the value of 'bgHoverColor'.
      className={`text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
    >
      {/*  The button's content includes an 'icon' and 'text', both of which are configurable via props.*/}
      {icon} {text}
    </button>
  );
};

// Exporting the 'Button' component as a default export, making it available for use in other parts of the application.
export default Button;
