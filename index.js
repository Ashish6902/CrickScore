function GetOvers() {
  var input = document.querySelector("input[type='number']");
  var overs = parseFloat(input.value);
  // to check overs are wright or not 
  if (!isNaN(overs) && Number.isInteger(overs)) {
    alert(overs);
  } else {
    alert("Enter a valid integer");
  }
  
  //creat tables 
  for (let i = 1; i < overs ; i++) {
    var first_table = document.getElementById('Primary_table');
    var clonedTable = first_table.cloneNode(true);
    document.body.appendChild(clonedTable);
 }
}
function Total() {
  var table = document.getElementById('Primary_table');
  var rows = table.getElementsByTagName('tr');
  var TotalRuns = 0;

  for (var i = 1; i < rows.length; i++) {
    var row = rows[i];
    var select = row.querySelector('select');

    if (select) {
      var selectedIndex = select.selectedIndex;
      var selectedOption = select.options[selectedIndex].value;

      if (!isNaN(selectedOption)) {
        TotalRuns += parseFloat(selectedOption);
      }
    }
  }

  var resultElement = document.getElementById('sumResult');
  resultElement.textContent = 'Total Runs: ' + TotalRuns;
}

