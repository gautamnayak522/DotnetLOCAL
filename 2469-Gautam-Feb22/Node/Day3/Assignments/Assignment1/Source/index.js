
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


var Xclass = require('./Mobike.js');
const entry = new Xclass.Mobike();

const input1 = () => {
  return new Promise((resolve, reject) => {
    rl.question('Enter Bikenumber :  ', (bn) => {
      entry.bikenumber = bn;
      resolve();
    });
  });
};
const input2 = () => {
  return new Promise((resolve, reject) => {
    rl.question('Enter Phonenumber :  ', (pn) => {
      entry.phonenumber = pn;
      resolve();
    });
  });
};
const input3 = () => {
  return new Promise((resolve, reject) => {
    rl.question('Enter Customer Name :  ', (cn) => {
      entry.customername = cn;
      resolve();
    });
  });
};
const input4 = () => {
  return new Promise((resolve, reject) => {
    rl.question('Enter Number of Days :  ', (nd) => {
      entry.days = nd;
      resolve();
    });
  });
};


const main = async () => {
  await input1();
  await input2();
  await input3();
  await input4();
  rl.close();
  entry.payment = entry.Compute()

  console.log(entry);
}
main();