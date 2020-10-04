// Hook to the table in the html
let tbody = d3.select("tbody");

// Naming the data "ufos", hooking to the button and form in the html.
// Credit to writer of class activity Par_Form_Filter
let ufos = data,
  button = d3.select('#filter-btn'),
  formDate = d3.select('#formDate'),
  formCity = d3.select('#formCity'),
  formState = d3.select('#formState'),
  formCountry = d3.select('#formCountry'),
  formShape = d3.select('#formShape')

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
    let inputElementDate = d3.select("#datetime"), 
        inputValueDate = inputElementDate.property("value"),
        inputElementCity = d3.select("#city"),
        inputValueCity = inputElementCity.property("value"),
        inputElementState = d3.select("#state"),
        inputValueState = inputElementState.property("value"),
        inputElementCountry = d3.select("#country"),
        inputValueCountry = inputElementCountry.property("value"),
        inputElementShape = d3.select("#shape"),
        inputValueShape = inputElementShape.property("value")
        ;
  
    console.log(inputValueDate);
    console.log(ufos);
  
    let filteredData = ufos.filter(sighting => sighting.datetime === inputValueDate 
      && sighting.city === inputValueCity
      && sighting.state === inputValueState
      && sighting.country === inputValueCountry
      && sighting.shape === inputValueShape
      )
  
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
  formDate.on("submit",runEnter);
  formCity.on("submit",runEnter);
  formState.on("submit",runEnter);
  formCountry.on("submit",runEnter);
  formShape.on("submit",runEnter);