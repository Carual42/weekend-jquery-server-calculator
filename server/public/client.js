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


function sendMath() {
    console.log('in sendMath', mathOp);
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
    displayMath();
  });
  }

  function displayMath() {
    $.ajax({
        type: 'GET',
        url: '/math'
    }).then(function (response) {
      $('#math-history').empty();
      $('#math-history').append(`
      <h3>Calculator History</h3>
      `)
      for (let i = 0; i < response.length; i++) {
        $('#math-history').append(`
          <h2>${response[i].A} ${response[i].X} ${response[i].B} = ${response[i].answer}</h2>
        `);
      }
    });
  }