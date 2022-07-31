$(document).ready(handleReady);

function handleReady() {
  console.log("jquery is loaded!")
}


function sendGuessToServer() {
    console.log('in sendGuessToServer');
    numberOfGuesses++;
    console.log('number of guesses:', numberOfGuesses);
  $.ajax({
    type:'POST',
    url: '/guesses',
    data: {
      meaghan: $('#meaghan-input').val(),
      brianna: $('#brianna-input').val(),
      alex: $('#alex-input').val(),
      holly: $('#holly-input').val(),
      bryn: $('#bryn-input').val()
    }
  }).then(function (response) {
    console.log(response);
    getGuesses();
  });
  
  }