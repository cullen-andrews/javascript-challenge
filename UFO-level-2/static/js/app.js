// Hook to the table in the html
let tbody = d3.select("tbody");

// Naming the data "ufos", hooking to the button and form in the html.
// Credit to writer of class activity Par_Form_Filter
let ufos = data,
  button = d3.select('#filter-btn'),
  form = d3.select('#form')

// Initially displaying all the data in the table.
// Credit to writer of class activity Evr_D3_Table
ufos.forEach(sighting => {
  let row = tbody.append("tr");
  Object.values(sighting).forEach(value => {
    // Append a cell to the row for each value
    // in the weather report object
    var cell = row.append("td");
    cell.text(value);
  });
});

// Code for what happens when <enter> is hit from the date filter field,
// or the 'filter' button is clicked.
// Credit to writer of class activity Par_Form_Filter
const runEnter = () => {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    // Get the value property of the input element
    let inputElement = d3.select("#datetime"), 
        inputValue = inputElement.property("value");
  
    console.log(inputValue);
    console.log(ufos);
  
    let filteredData = ufos.filter(sighting => sighting.datetime === inputValue);
  
    console.log(filteredData);

    // remove sightings from the table
    tbody.html("")

    filteredData.forEach(sighting => {
        let row = tbody.append("tr");
        Object.values(sighting).forEach(value => {
          // Append a cell to the row for each value
          // in the weather report object
          var cell = row.append("td");
          cell.text(value);
        });
      }); 
  };
  
  // Create event handlers 
  button.on("click", runEnter);
  form.on("submit",runEnter);
  