import React from 'react';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-kanban';

import { kanbanData, kanbanGrid } from '../data/dummy';
import { Header } from '../components';

// Defines a functional component named 'Kanban'.
const Kanban = () => (
  // Wraps the component in a div with margin and padding classes that adjust based on the screen size,
  // and it uses rounded corners for styling.
  <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
    {/*  'Header' component used to display the page title and categorize the component. */}
    <Header category="App" title="Kanban" />
    {/* 'KanbanComponent' from a UI library configured for use as a Kanban board. */}
    <KanbanComponent
      id="kanban" // Sets a unique identifier for the Kanban component.
      keyField="Status" // Defines the field that categorizes cards into different columns.
      dataSource={kanbanData} // Data source for the Kanban cards.
      cardSettings={{ contentField: 'Summary', headerField: 'Id' }} // Settings for how cards should display their content and header.
    >
      {/* 'ColumnsDirective' to define the structure of columns in the Kanban board. */}
      <ColumnsDirective>
        {/* Maps over 'kanbanGrid' array to create a 'ColumnDirective' for each column. */}
        {/* This is likely configuring specific columns such as "To Do", "In Progress", and "Done". */}
        {kanbanGrid.map((item, index) => (
          <ColumnDirective key={index} {...item} />
        ))}
      </ColumnsDirective>
    </KanbanComponent>
  </div>
);

// Exports the 'Kanban' component as the default export of this module, making it reusable in other parts of the application.
export default Kanban;

