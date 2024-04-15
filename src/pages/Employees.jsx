import React from 'react';
import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Search, Page } from '@syncfusion/ej2-react-grids';

import { employeesData, employeesGrid } from '../data/dummy';
import { Header } from '../components';

// Defines the 'Employees' functional component.
const Employees = () => {
  // Toolbar options that define what features should be available in the grid's toolbar. Here, 'Search' is enabled.
  const toolbarOptions = ['Search'];

  // Edit settings that enable deleting and editing operations within the grid.
  const editing = { allowDeleting: true, allowEditing: true };

  // The returned JSX element sets up the layout and components used in the Employees page.
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      {/*  'Header' component displays a title and categorizes the page. */}
      <Header category="Page" title="Employees" />
      {/*  'GridComponent' displays the data in a structured grid format with configurable options. */}
      <GridComponent
        dataSource={employeesData}  // The data source for the grid, presumably an array of employee records.
        width="auto"  // Automatically adjusts the width based on the content or container.
        allowPaging  // Enables pagination of the grid.
        allowSorting  // Allows sorting of the columns in the grid.
        pageSettings={{ pageCount: 5 }}  // Configures pagination to show 5 pages at a time.
        editSettings={editing}  // Applies the edit settings for allowing edits and deletions.
        toolbar={toolbarOptions}  // Enables the toolbar and includes 'Search' functionality.
      >
        {/*  'ColumnsDirective' defines the column structure for the grid. */}
        <ColumnsDirective>
          {/*  Mapping over 'employeesGrid' to dynamically create 'ColumnDirective' for each column configuration. */}
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        {/*  'Inject' component introduces necessary services into the grid, enabling features like search and pagination. */}
        <Inject services={[Search, Page]} />
      </GridComponent>
    </div>
  );
};

// The 'Employees' component is exported as the default export of this module,
// making it reusable in other parts of the application.
export default Employees;

