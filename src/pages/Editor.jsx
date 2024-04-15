import React from 'react';
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';

import { Header } from '../components';
import { EditorData } from '../data/dummy';

// Defines a stateless functional component 'Editor' that renders a rich text editor within a styled div.
const Editor = () => (
  <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
    {/* 'Header' component to display the page title and categorize the component as part of an app.*/}
    <Header category="App" title="Editor" />
    {/* 'RichTextEditorComponent' is used to provide a rich text editing interface. */}
    <RichTextEditorComponent>
      {/* 'EditorData' could be a component or context provider for initial data or configurations for the editor. */}
      {/* This part isn't standard and might be a custom implementation to provide specific data to the editor. */}
      <EditorData />
      {/* 'Inject' component used to add necessary services to the RichTextEditor, enabling HTML editing, toolbar, image insertion, */}
      {/* link insertion, and quick toolbar features. */}
      <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />
    </RichTextEditorComponent>
  </div>
);

// Export the 'Editor' component as the default export of this module, making it available for use in other parts of the application.
export default Editor;

