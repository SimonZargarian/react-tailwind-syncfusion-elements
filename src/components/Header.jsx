import React from 'react';

// Definition of the 'Header' functional component which takes 'category' and 'title' as props.
const Header = ({ category, title }) => (
  // The outer 'div' wraps the content and provides a bottom margin to space it from the content that follows.
  <div className="mb-10">
    {/*  The category is displayed in a smaller, less prominent style, useful for subheadings or metadata about the title. */}
    <p className="text-lg text-gray-400">{category}</p>
    {/* The title is more prominently styled with a larger font size, extra bold weight, and tight letter spacing, 
       making it stand out as the main heading. */}
    <p className="text-3xl font-extrabold tracking-tight text-slate-900">
      {title}
    </p>
  </div>
);

// The 'Header' component is exported as the default export of the module,
// making it reusable across different parts of an application.
export default Header;

