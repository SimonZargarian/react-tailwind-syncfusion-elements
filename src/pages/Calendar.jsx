import React, { useState } from 'react';
import { ScheduleComponent, ViewsDirective, ViewDirective, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';

import { scheduleData } from '../data/dummy';
import { Header } from '../components';

// Defines a simple container component 'PropertyPane' that can be used to wrap other components or content.
// This is a functional component that directly returns JSX including any children it's given.
const PropertyPane = (props) => <div className="mt-5">{props.children}</div>;

// The 'Scheduler' component initializes and manages a schedule/calendar interface.
const Scheduler = () => {
  // State hook for holding a reference to the 'ScheduleComponent'.
  const [scheduleObj, setScheduleObj] = useState();

  // A function 'change' that updates the selected date in the 'ScheduleComponent'
  // and triggers a rebind of data (refreshes the component with new data).
  const change = (args) => {
    scheduleObj.selectedDate = args.value;
    scheduleObj.dataBind();
  };

  // Event handler for drag start event in the scheduler. It enables navigation during dragging.
  const onDragStart = (arg) => {
    // Explicitly enabling navigation for the event's draggable element.
    arg.navigation.enable = true;
  };

  // The returned JSX structure sets up the scheduler layout and behavior.
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      {/*  Header component to display the page title and category. */}
      <Header category="App" title="Calendar" />
      {/* 'ScheduleComponent' from a UI library, configured with various props. */}
      <ScheduleComponent
        height="650px"
        // Ref callback to store the component reference in state.
        ref={(schedule) => setScheduleObj(schedule)}
        selectedDate={new Date(2021, 0, 10)}  // Initial date shown in the scheduler.
        eventSettings={{ dataSource: scheduleData }}  // Data source for events.
        dragStart={onDragStart}  // Drag start event handler.
      >
        {/* Directives to define available views in the scheduler. */}
        <ViewsDirective>
          { ['Day', 'Week', 'WorkWeek', 'Month', 'Agenda'].map((item) => <ViewDirective key={item} option={item} />)}
        </ViewsDirective>
        {/* Inject required services into the scheduler for functionality like drag and drop, resizing. */}
        <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
      </ScheduleComponent>
      {/* PropertyPane used here to house additional UI elements, in this case, a DatePickerComponent. */}
      <PropertyPane>
        <table style={{ width: '100%', background: 'white' }}>
          <tbody>
            <tr style={{ height: '50px' }}>
              <td style={{ width: '100%' }}>
                {/* 'DatePickerComponent' allows for date selection which updates the scheduler's displayed date. */}
                <DatePickerComponent
                  value={new Date(2021, 0, 10)}
                  showClearButton={false}
                  placeholder="Current Date"
                  floatLabelType="Always"
                  change={change}  // Passes the change handler to update the scheduler on date change.
                />
              </td>
            </tr>
          </tbody>
        </table>
      </PropertyPane>
    </div>
  );
};

// Export the 'Scheduler' component as the default export of this module.
export default Scheduler;
