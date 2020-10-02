// from data.js
var tableData = data;

// Step 1: Loop Through `data` and console.log each weather report object
// data.forEach(sighting => console.log(sighting));

// Get a reference to the table body (Activity Evr_D3_Table)
const tbody = d3.select("tbody");

// Step 2:  Use d3 to append one table row `tr` for each weather report object
// Don't worry about adding cells or text yet, just try appending the `tr` elements.
// data.forEach(sighting => {
//   console.log(sighting);
//   let row = tbody.append("tr");
// });

// // Step 3:  Use `Object.entries` to console.log each weather report value
// data.forEach(sighting => {
//   let row = tbody.append("tr");
//   console.log(Object.values(sighting))
//   console.log(Object.entries(sighting))
// });

// // Step 4: Use d3 to append 1 cell per weather report value (weekday, date, high, low)
// data.forEach(sighting => {
//   let row = tbody.append("tr");
//   Object.values(sighting).forEach(value => {
//     console.log(value);
//     // Append a cell to the row for each value
//     // in the weather report object
//     let cell = row.append("td");
//   });
// });

// // Step 5: Use d3 to update each cell's text with
// // weather report values (weekday, date, high, low)
data.forEach(sighting => {
  let row = tbody.append("tr");
  Object.values(sighting).forEach(value => {
    // Append a cell to the row for each value
    // in the weather report object
    var cell = row.append("td");
    cell.text(value);
  });
});


// console.log(data)