import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';

import { customersData, customersGrid } from '../data/dummy';
import { Header } from '../components';

// Definition of the 'Customers' functional component.
const Customers = () => {
  // 'selectionsettings' object defines that selection in the grid should persist across pagination.
  const selectionsettings = { persistSelection: true };

  // 'toolbarOptions' specifies the toolbar items available, here only a 'Delete' button.
  const toolbarOptions = ['Delete'];

  // 'editing' settings enable deleting and editing directly in the grid.
  const editing = { allowDeleting: true, allowEditing: true };

  // The JSX returned by this component sets up the layout and components used in the Customers page.
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      {/*  Header component displays a title and categorizes the page as 'Customers'.*/}
      <Header category="Page" title="Customers" />
      {/* 'GridComponent' is used for displaying the data in a structured grid format. */}
      <GridComponent
        dataSource={customersData}  // The data source for the grid, presumably an array of customer records.
        enableHover={false}         // Disables row hover effect.
        allowPaging                 // Enables pagination of the grid.
        pageSettings={{ pageCount: 5 }}  // Configures pagination to show 5 pages at a time.
        selectionSettings={selectionsettings}  // Applies the defined selection settings.
        toolbar={toolbarOptions}  // Enables the toolbar and adds 'Delete' option.
        editSettings={editing}    // Enables editing settings specified earlier.
        allowSorting              // Allows sorting of grid columns.
      >
        {/* 'ColumnsDirective' defines how columns in the grid should be structured. */}
        <ColumnsDirective>
          {/* Mapping over 'customersGrid' to dynamically create 'ColumnDirective' for each item. */}
          {customersGrid.map((item, index) => (
            // The spread operator is used to pass all properties of 'item' to 'ColumnDirective'.
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        {/* 'Inject' component introduces necessary services into the grid, enabling paging, selection,*/}
        {/* toolbar functionalities, editing, sorting, and filtering. */}
        <Inject services={[Page, Selection, Toolbar, Edit, Sort, Filter]} />
      </GridComponent>
    </div>
  );
};

// The 'Customers' component is exported as the default export of this file,
// making it reusable in other parts of the application.
export default Customers;

