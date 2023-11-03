const axios = require('axios');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');

const serverUrl = 'http://localhost:1225';

async function main(name) {
  // How do we prove to the server we're on the nice list? 
  const merkleTree = new MerkleTree(niceList);
  const index = niceList.findIndex(n => n === name);
  const proof = merkleTree.getProof(index);

  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    name: name,
    proof: proof
  });

  return gift;
}
// Use 'node client/index "My Name"' to check if you'll receive a gift
if (process.argv.length == 3)
  main(process.argv[2]).then(result => {
    console.log(result);
});

module.exports = main;