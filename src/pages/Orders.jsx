import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';

import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy';
import { Header } from '../components';

// Defines the 'Orders' functional component.
const Orders = () => {
  // Editing settings enabling deleting and editing directly in the grid.
  const editing = { allowDeleting: true, allowEditing: true };

  // The returned JSX structure sets up the orders management interface.
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      {/*  'Header' component to display the page title and category. */}
      <Header category="Page" title="Orders" />
      {/* 'GridComponent' displays the data in a structured grid format with advanced functionalities. */}
      <GridComponent
        id="gridcomp"  // A unique identifier for the grid component.
        dataSource={ordersData}  // Data source for the grid, presumably an array of order records.
        allowPaging  // Enables pagination of the grid.
        allowSorting  // Allows sorting of the columns in the grid.
        allowExcelExport  // Enables exporting the grid data to Excel.
        allowPdfExport  // Enables exporting the grid data to PDF.
        contextMenuItems={contextMenuItems}  // Defines context menu options available on right-click.
        editSettings={editing}  // Applies the edit settings to allow edits and deletions directly in the grid.
      >
        {/* 'ColumnsDirective' defines the structure of columns in the grid. */}
        <ColumnsDirective>
          {/* Maps over 'ordersGrid' to dynamically create 'ColumnDirective' for each column configuration. */}
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        {/* 'Inject' component introduces necessary services into the grid, enabling features like resizing, sorting, 
          context menu, filtering, pagination, Excel export, editing, and PDF export. */}
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]} />
      </GridComponent>
    </div>
  );
};

// Exports the 'Orders' component as the default export of this module,
// making it reusable in other parts of the application.
export default Orders;

