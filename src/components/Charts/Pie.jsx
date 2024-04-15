import React from 'react';
// Import necessary components from the Syncfusion library.
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationLegend, PieSeries, AccumulationDataLabel, Inject, AccumulationTooltip } from '@syncfusion/ej2-react-charts';

// Import the context to access global state, such as the current theme mode.
import { useStateContext } from '../../contexts/ContextProvider';

// Define the 'Doughnut' functional component with props for customization.
const Doughnut = ({ id, data, legendVisiblity, height }) => {
  // Access the current mode (Dark or Light) from the context.
  const { currentMode } = useStateContext();

  // Render the AccumulationChartComponent configured to display a doughnut chart.
  return (
    <AccumulationChartComponent
      id={id} // Unique identifier for the chart component.
      legendSettings={{ visible: legendVisiblity, background: 'white' }} // Configure the legend visibility and background.
      height={height} // Set the height of the chart.
      background={currentMode === 'Dark' ? '#33373E' : '#fff'} // Set the background color based on the current mode.
      tooltip={{ enable: true }} // Enable tooltips for interactive data points.
    >
      {/*  Inject necessary services for the chart, such as legend, pie series, data labels, and tooltips. */}
      <Inject services={[AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip]} />
      {/* Define the collection of series to be rendered in the chart. */}
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective
          name="Sale" // Series name.
          dataSource={data} // Data source for the series.
          xName="x" // Define the property name that contains x-values in the data source.
          yName="y" // Define the property name that contains y-values in the data source.
          innerRadius="40%" // Set the inner radius to create the doughnut effect.
          startAngle={0} // Starting angle for the series.
          endAngle={360} // Ending angle for the series.
          radius="70%" // Radius of the pie/doughnut.
          explode // Allow segments to be exploded.
          explodeOffset="10%" // Offset distance for exploded segments.
          explodeIndex={2} // Index of the segment to be exploded initially.
          dataLabel={{
            visible: true, // Enable data labels.
            name: 'text', // Define the property name that contains label text in the data source.
            position: 'Inside', // Position labels inside the segments.
            font: {
              fontWeight: '600', // Font weight for the data labels.
              color: '#fff', // Font color for the data labels.
            },
          }}
        />
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  );
};

// Export the Doughnut component so it can be used elsewhere in the application.
export default Doughnut;

