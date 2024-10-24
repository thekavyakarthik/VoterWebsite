function myPlot() { 
  // Data for the plot
  let trace1 = {
    x: [1, 2, 3, 4, 5],
    y: [10, 15, 13, 17, 12],
    mode: 'lines',
    name: 'Line Plot'
  };

  let data = [trace1];

  // Layout configuration
  let layout = {
    title: 'Simple Line Plot',
    xaxis: { title: 'X Axis Label' },
    yaxis: { title: 'Y Axis Label' }
  };

  // Plot the graph in the 'myPlot' div
  Plotly.newPlot('myPlot', data, layout);
}