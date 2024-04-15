// Import necessary React and Syncfusion chart components.
import React from 'react';
import {
  ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, LineSeries,
  DateTime, Legend, Tooltip
} from '@syncfusion/ej2-react-charts';

// Import data and settings for the chart from a local module.
import { lineCustomSeries, LinePrimaryXAxis, LinePrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

// Define the 'LineChart' functional component.
const LineChart = () => {
  // Retrieve the current theme mode ('Dark' or 'Light') from the application's context.
  const { currentMode } = useStateContext();

  // Render the ChartComponent from Syncfusion with various configurations.
  return (
    <ChartComponent
      id="line-chart" // Unique identifier for the chart.
      height="420px" // Set the height of the chart.
      primaryXAxis={LinePrimaryXAxis} // Configure the x-axis with predefined settings.
      primaryYAxis={LinePrimaryYAxis} // Configure the y-axis with predefined settings.
      chartArea={{ border: { width: 0 } }} // Styling for the chart area to have no border.
      tooltip={{ enable: true }} // Enable tooltips for the chart.
      background={currentMode === 'Dark' ? '#33373E' : '#fff'} // Set background based on theme mode.
      legendSettings={{ background: 'white' }} // Set legend background color.
    >
      {/*  Inject necessary services into the chart for functionality. */}
      <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
      {/* Collection of series to be rendered in the chart. */}
      <SeriesCollectionDirective>
        {/* Map over a collection of series data, spreading each series' settings into a SeriesDirective. */}
        {lineCustomSeries.map((item, index) => (
          <SeriesDirective key={index} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

// Export the LineChart component to make it available for use in other parts of the application.
export default LineChart;
