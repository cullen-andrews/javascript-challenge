
let tbody = d3.select("tbody");

let ufos = data,
  button = d3.select('#filter-btn'),
  form = d3.select('#form')

ufos.forEach(sighting => {
  let row = tbody.append("tr");
  Object.values(sighting).forEach(value => {
    // Append a cell to the row for each value
    // in the weather report object
    var cell = row.append("td");
    cell.text(value);
  });
});


/////////////////////////////////////

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




  
    // // BONUS: Calculate summary statistics for the age field of the filtered data
  
    // // First, create an array with just the age values
    // let ages = filteredData.map(person => person.age);
  
    // // Next, use math.js to calculate the mean, median, mode, var, and std of the ages
    // let mean = math.mean(ages), 
    //     median = math.median(ages),
    //     mode = math.mode(ages),
    //     variance = math.var(ages),
    //     standardDeviation = math.std(ages);
  
    // // Then, select the unordered list element by class name
    // let list = d3.select(".summary");
  
    // remove any children from the list
    // list.html("");
  
    // // append stats to the list
    // list.append("li").text(`Mean: ${mean}`);
    // list.append("li").text(`Median: ${median}`);
    // list.append("li").text(`Mode: ${mode}`);
    // list.append("li").text(`Variance: ${variance}`);
    // list.append("li").text(`Standard Deviation: ${standardDeviation}`);
  
    // // var stats = [["mean", mean], ["median", median], ["mode", mode]];
    // // stats.forEach(stat => list.append("li").text(`${stat[0]}: ${stat[1]}`));
  
    // // var stats = {Mean: mean, Median: median, Mode: mode, Variance: variance};
    // // Object.entries(stats).forEach(([stat, value]) => list.append("li").text(`${stat}: ${value}`));
  };
  
  // Create event handlers 
  button.on("click", runEnter);
  form.on("submit",runEnter);
  