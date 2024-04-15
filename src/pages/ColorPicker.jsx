import React from 'react';
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';

import { Header } from '../components';

// Defines a function 'change' that updates the background color of an element with the id 'preview'.
// It receives an 'args' object, expected to contain a property 'currentValue' with a 'hex' value.
const change = (args) => {
  document.getElementById('preview').style.backgroundColor = args.currentValue.hex;
};

// 'CustomColorPicker' is a functional component that renders 'ColorPickerComponent' with specific props.
// It takes 'id' and 'mode' as props to set the unique identifier and mode of the color picker.
// The color picker has mode switching disabled, is displayed inline, and does not show its default buttons.
const CustomColorPicker = ({ id, mode }) => (
  <ColorPickerComponent id={id} mode={mode} modeSwitcher={false} inline showButtons={false} change={change} />
);

// 'ColorPicker' is the main component that sets up the layout and integration of the color pickers.
const ColorPicker = () => (
  <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
    {/*  A styled container that provides margin and padding adjustments for different screen sizes. */}
        {/* It includes a header component which likely displays a category and title. */}
    <Header category="App" title="Color Picker" />
    <div className="text-center">
          {/* The 'preview' div acts as a visual feedback area where the background color will change. */}
      <div id="preview" />
      <div className="flex justify-center items-center gap-20 flex-wrap">
            {/* This section sets up two instances of 'CustomColorPicker' with different modes and configurations. */}
        <div>
          <p className="text-2xl font-semibold mt-2 mb-4">Inline Pallete</p>
              {/* 'CustomColorPicker' configured for a palette-based color selection. */}
          <CustomColorPicker id="inline-palette" mode="Palette" />
        </div>
        <div>
          <p className="text-2xl font-semibold mt-2 mb-4">Inline Picker</p>
              {/* 'CustomColorPicker' configured for a picker-based color selection. */}
          <CustomColorPicker id="inline-picker" mode="Picker" />
        </div>
      </div>
    </div>
  </div>
);

// The 'ColorPicker' component is exported as the default export of this module,
// making it available for import and use in other parts of the application.
export default ColorPicker;

