const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5001;

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}))

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

let mathProblems = []
//for guess
app.get('/mathProblem', (req, res) => {
    solveMath(mathProblems)
  res.send(mathAnswers);
});

app.post('/math', (req, res) => {
  let mathProb = req.body;
  console.log('maaaatttthhh:', mathProb);
  mathProblems.push(mathProb)
  res.sendStatus(200);
});


// function to solve math
mathAnswers = []
function solveMath(array) {
    for (let i = 0; i < array.length; i++) {
let answer = (array[i].num1, array[i].equation, array[i].num2);
console.log(answer);
mathAnswers.push(answer);
    }
}
app.listen(PORT, () => {
    console.log ('Server is running on port', PORT)
  })
