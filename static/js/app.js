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