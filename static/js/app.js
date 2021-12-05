// 11.2.4
// import data from data.js
const tableData = data;

// reference the HTML table using d3
var tbody = d3.select("tbody");

// 11.5.1
function buildTable(data) {
    // 11.5.1 - clear data
    tbody.html(" ");

    // 11.5.2 - loop through each object in data
    // & append a row and cells for each value in the row
    data.forEach((dataRow) >= {
        // append a row to the table body
        let row = tbody.append("tr");

        // loop through each field in dataRow & add
        // each value as table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.apend("td");
            cell.text(val);
            }
        );
    });
}

// 11.5.3 -
function handleClick() {
    // grab datetime value from filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    // check if data was entered and filter the data using that date
    if (date) {
        // apply filter to table data - datetime
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // rebuild table using filtered data
    buildTable(filteredData);
};

// 11.5.4 - attach event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);


// 11.5.4 - build table when the page loads
buildTable(tableData);
