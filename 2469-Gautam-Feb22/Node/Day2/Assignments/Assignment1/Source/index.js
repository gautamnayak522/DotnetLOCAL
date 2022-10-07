const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});
var fs = require('fs');

let value1 = 0;
let value2 = 0;
let result;

const number1 = () => {
    return new Promise((resolve, reject) => {
        rl.question('Enter Num1 :  ', (num1) => {
            value1 = parseInt(num1);
            resolve()
        })
    })
}

const number2 = () => {
    return new Promise((resolve, reject) => {
        rl.question('Enter Num2 :  ', (num2) => {
            value2 = parseInt(num2);
            resolve()
        })
    })
}  
function add() {
    result = value1 + value2;
  }
  function sub() {
    result = value1 - value2;
  }
  function mul() {
    result = value1 * value2;
  }
  function div() {
    result = value1 / value2;
  }

const op = () => {
    return new Promise((resolve, reject) => {
        rl.question('Select 1-Add,2-Sub,3-Mul,4-Div  : ', (select) => {

            switch (parseInt(select)) {
                case 1:
                    console.log("Addition");
                    add();
                    break;
                case 2:
                    console.log("Subtraction");
                    sub();
                    break;
                case 3:
                    console.log("Multiplication");
                    mul()
                    break;
                case 4:
                    console.log("Division");
                    div()
                    break;
                default:
                    console.log("Wrong Input");
            }
            resolve()
        })
    })
}

const main = async () => {
    await number1()
    await number2()
    await op()
    rl.close()
    console.log(result);
    fs.writeFile('result.txt', `Result : ${result}`, function (err) {
        if (err) {
            console.log(err);
        }
        else {
            console.log("Write operation of result completed.");
        }
    });

    fs.readFile('result.txt', function (err, data) {
        if (err) throw err;
        console.log("Reading data from file..");
        console.log(data.toString());
    });
}
main()


