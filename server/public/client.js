$(handleReady)

function handleReady() {
  console.log("jquery is loaded!")
  $('#plus').on('click', getPlus);
  $('#minus').on('click', getMinus);
  $('#times').on('click', getTimes);
  $('#divide').on('click', getDivide);
  $('#equal').on('click', sendMath);
  $('#clear').on('click', clearFields);
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

// bundles data from client side into object to server
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

  //appends dom with answer and updates calc history
  function displayMath() {
    $.ajax({
        type: 'GET',
        url: '/math'
    }).then(function (response) {
        console.log(response)
        let latestAnswer = 0;
      $('#math-history').empty();
      $('#math-history').append(`
      <h3>Calculator History</h3>
      <h3>${response[latestAnswer].answer}<h3>
      `);
      // cant figure out why the answer wont update.
      // seems liket the .empty() isnt working
      for (let i = 0; i < response.length; i++) {
        $('#math-history').append(`
          <h2>${response[i].A} ${response[i].X} ${response[i].B} = ${response[i].answer}</h2>
        `);
        latestAnswer++;
      }
        console.log(latestAnswer)
    });
  }

  //function to clear input fields
  function clearFields() {
    $('#var-A').val('');
    $('#var-B').val('');
  }