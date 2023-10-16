// To genrate tables on basis of Overs
function GetOvers() {
  var input = document.querySelector("input[type='number']");
  var overs = parseFloat(input.value);
  // to check overs are wright or not 
  if (!isNaN(overs) && Number.isInteger(overs)) {
    localStorage.setItem('overs', overs);
  } else {
    alert("Enter a valid integer");
  }

  //creat tables 
  for (let i = 1; i < overs; i++) {
    var first_table = document.getElementById('Primary_table');
    var clonedTable = first_table.cloneNode(true);
    document.body.appendChild(clonedTable);
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
  //creat tables 
  var overs = parseFloat(localStorage.getItem('overs'));
  for (let i = 1; i < overs; i++) {
    var first_table = document.getElementById('Primary_table');
    var clonedTable = first_table.cloneNode(true);
    document.body.appendChild(clonedTable);
  }
  var Target = parseFloat(localStorage.getItem('Target'));
  var TargetRuns = document.getElementById("Target");
  TargetRuns.innerHTML = Target
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
