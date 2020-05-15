// from data.js
var tableData = data;
var tbody = d3.select("tbody");
var button = d3.select("#filter-btn")


// BONUS: Refactor to use Arrow Functions!
button.on("click", function(){
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    tbody.html("");
    data.forEach((tableData) => {
        var row = tbody.append("tr");
        // console.log(tableData.datetime);
        if (tableData.datetime == inputValue) 
        {Object.entries(tableData).forEach(([key, value]) => {
          
          var cell = row.append("td");
          cell.text(value);}
        )};
      });

});



  
