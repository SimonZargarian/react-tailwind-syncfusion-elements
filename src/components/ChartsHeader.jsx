import React from 'react';

// This functional component takes 'category' and 'title' as props to display them appropriately in the UI.
const ChartsHeader = ({ category, title }) => (
  // The outermost 'div' provides margin at the bottom.
  <div className="mb-10">
    {/*  Nested 'div' to group the 'category' label and its value. */}
    <div>
      {/* Static label indicating the type of content, styled to be less prominent using gray color. */}
      <p className="text-lg text-gray-400">Chart</p>
      {/* Displays the 'category' prop with a larger, bold font style to make it stand out, adaptive to light/dark mode. */}
      <p className="text-3xl font-extrabold tracking-tight dark:text-gray-200 text-slate-900">{category}</p>
    </div>
    {/* Displays the 'title' of the chart, centered and styled distinctly for emphasis. */}
    <p className="text-center dark:text-gray-200 text-xl mb-2 mt-3">{title}</p>
  </div>
);

// Exporting 'ChartsHeader' as a default export, allowing it to be imported and used in other parts of the application.
export default ChartsHeader;

