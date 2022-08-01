$(handleReady)

function handleReady() {
  console.log("jquery is loaded!")
  $('#plus').on('click', getPlus);
  $('#minus').on('click', getMinus);
  $('#times').on('click', getTimes);
  $('#divide').on('click', getDivide);
  $('#equal').on('click', sendMath);
}

// functions to get math operator
let mathOp = ''
function getPlus(a, b) {
    mathOp = '+';
    return mathOp;
}
function getMinus(a, b) {
    mathOp = '-';
    return mathOp;
}
function getTimes(a, b) {
    mathOp = '*';
    return mathOp;
}
function getDivide(a, b) {
    mathOp = '/';
    return mathOp;
}

// //function to get variables
// function getVar() {
//     let A = $('#var-A').val()
//     let B = $('#var-B').val()
//     console.log(A 'and' B)
// }


function sendMath() {
    console.log('in sendMath', mathOp);
  $.ajax({
    type:'POST',
    url: '/math',
    data: {
      num1: Math($('#var-A').val()),
      num2: Math($('#var-B').val()),
      equation: Math(mathOp)
    }
  }).then(function (response) {
    console.log(response);
    displayMath();
  });
  }

  function displayMath() {
    $.ajax({
        type: 'GET',
        url: '/mathProblem'
    }).then(function (response) {
      $('#math-history').empty();
      $('#math-history').append(`
      <h3>Calculator History</h3>
      `)
      for (let i = 0; i < response.length; i++) {
        $('#content').append(`
          <h2>Meaghan's Guess: ${response[i]}</h2>
        `);
      }
    });
  }