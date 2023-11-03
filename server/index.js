const express = require('express');
const verifyProof = require('../utils/verifyProof');


const port = 1225;

const app = express();
app.use(express.json());

// hardcode a merkle root here representing the whole nice list
const MERKLE_ROOT = 'ea73aa880b659745ff716150a9203cb91e1f730d524b009714c967f3457b8f3e';

app.post('/gift', (req, res) => {
  // grab the parameters from the front-end here
  const name = req.body.name;
  const proof = req.body.proof;

  // prove that a name is in the list
 const isInTheList = verifyProof(proof, name, MERKLE_ROOT);
  
  if(isInTheList) {
    res.send("You got a toy robot!");
  }
  else {
    res.send("You are not on the list :(");
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
