// To genrate tables on basis of Overs
function GetOvers() {
  var input = document.querySelector("input[type='number']");
  var overs = parseFloat(input.value);

  // To check overs are right or not
  if (!isNaN(overs) && Number.isInteger(overs)) {
    localStorage.setItem('overs', overs);
  } else {
    alert("Enter a valid integer");
  }

  // Create and append tables inside the respective container
  var container = document.getElementById('firstContainer'); // Change 'firstContainer' to 'secondContainer' for the second div
  for (let i = 1; i < overs; i++) {
    var clonedTable = document.createElement('table');
    clonedTable.className = 'table table-hover table-bordered';
    clonedTable.innerHTML = `
      <tr>
        <th>Balls</th>
        <th>Runs</th>
      </tr>
      <tr>
        <td>1</td>
        <td><input type="number" class="Score"></td>
      </tr>
      <tr>
        <td>2</td>
        <td><input type="number" class="Score"></td>
      </tr>
      <tr>
        <td>3</td>
        <td><input type="number" class="Score"></td>
      </tr>
      <tr>
        <td>4</td>
        <td><input type="number" class="Score"></td>
      </tr>
      <tr>
        <td>5</td>
        <td><input type="number" class="Score"></td>
      </tr>
      <tr>
        <td>6</td>
        <td><input type="number" class="Score"></td>
      </tr>
    `;
    container.appendChild(clonedTable);
  }
}


// to get total score
function Total() {
  var TotalScore = 0;
  var scoreInputs = document.querySelectorAll(".Score");
  var scoreArray = Array.from(scoreInputs).map(input => {
    const value = parseInt(input.value);
    if (!isNaN(value)) {
      return value;
    } else {
      return 0; // Ignore non-integer values
    }
  });
  for (const score of scoreArray) {
    TotalScore += score;
  }
  TotalScore = TotalScore + numberValue;
  var Target = TotalScore + 1;
  localStorage.setItem('Target', Target);

  //to display total score
  var sumResult = document.getElementById("sumResult");
  sumResult.textContent = "Total Score is " + TotalScore;
}

// Get the div element by its id
var ExtraRunBoard = document.getElementById("ExtraRunBoard");
var numberValue = parseInt(ExtraRunBoard.innerHTML);


function oneRunSub() {
  numberValue--;
  ExtraRunBoard.innerHTML = numberValue;
}
// Function to add +1 to the Extra Score
function oneRunAdd() {
  numberValue++;
  ExtraRunBoard.innerHTML = numberValue;
}

function twoRunAdd() {
  numberValue = numberValue + 2;
  ExtraRunBoard.innerHTML = numberValue;
}

function threeRunAdd() {
  numberValue = numberValue + 3;
  ExtraRunBoard.innerHTML = numberValue;
}

function fiveRunAdd() {
  numberValue = numberValue + 5;
  ExtraRunBoard.innerHTML = numberValue;
}

function sevenRunAdd() {
  numberValue = numberValue + 7;
  ExtraRunBoard.innerHTML = numberValue;
}

function GetTables() {
  // Get the number of overs from local storage
  var overs = parseFloat(localStorage.getItem('overs'));

  // Get the container where tables will be appended
  var container = document.getElementById('firstContainer');

  // Loop to create and append tables
  for (let i = 1; i < overs; i++) {
    // Clone the table
    var first_table = document.getElementById('Primary_table');
    var clonedTable = first_table.cloneNode(true);

    // Append the cloned table to the container
    container.appendChild(clonedTable);
  }

  // Set the Target runs
  var Target = parseFloat(localStorage.getItem('Target'));
  var TargetRuns = document.getElementById("Target");
  TargetRuns.innerHTML = Target;
}


function SecondTotal() {
  var SecondTotalScore = 0;
  var SecondscoreInputs = document.querySelectorAll(".Score");
  var SecondscoreArray = Array.from(SecondscoreInputs).map(input => {
    const value = parseInt(input.value);
    if (!isNaN(value)) {
      return value;
    } else {
      return 0; // Ignore non-integer values
    }
  });
  for (const score of SecondscoreArray) {
    SecondTotalScore += score;
  }
  SecondTotalScore = SecondTotalScore + numberValue;

  var sumResult = document.getElementById("sumResult");
  sumResult.textContent = "Total Score is " + SecondTotalScore;
}


function RemainigScore() {
  var Targetscore = document.getElementById("Target");
  var TargetNum = parseInt(Targetscore.innerHTML);

  var TotalRuns = document.getElementById("sumResult");
  var currentScore = parseInt(TotalRuns.textContent.match(/\d+/)[0]);

  var Remainig = TargetNum - currentScore
  var RemainigScoreBoard =document.getElementById("Required")
  RemainigScoreBoard.innerHTML = Remainig
}

function submit(){
  Total();
  window.location.href ="SecondInning.html";
  
}
