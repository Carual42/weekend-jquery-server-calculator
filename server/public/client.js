$(document).ready(handleReady);

function handleReady() {
  console.log("jquery is loaded!")
  $('#plus').on('click', getPlus);
  $('#minus').on('click', getMinus);
  $('#times').on('click', getTimes);
  $('#divide').on('click', getDivide);
  sendMath();
}

// functions to get math operator
let mathOp = ''
function getPlus() {
    mathOp = a + b;
    return mathOp;
}
function getMinus() {
    mathOp = a - b;
    return mathOp;
}
function getTimes() {
    mathOp = a * b;
    return mathOp;
}
function getDivide() {
    mathOp = a / b;
    return mathOp;
}


function sendMath() {
    console.log('in sendMath');
  $.ajax({
    type:'POST',
    url: '/math',
    data: {
      num1: $('#var-A').val(),
      num2: $('#var-B').val(),
      equation: mathOp
    }
  }).then(function (response) {
    console.log(response);
    ;
  });
  
  }