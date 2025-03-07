//1
let userName = prompt("Enter your name : ");
alert("Hello " + userName);

//2
let userBOD = parseInt(prompt("Enter year of birth : "));
const CURRENT_YEAR = 2025;
let age = CURRENT_YEAR - userBOD;
alert("You are " + age);

//3
let squareLength = parseFloat(prompt("Enter the length of the square side : "));
let perimeter = 4 * squareLength;
alert("The perimeter of the square is: " + perimeter);

//4
let circleRadius = parseFloat(prompt("Enter the radius of the circle : "));
const PI = 3.14;
let area = PI * Math.pow(circleRadius, 2);
alert("The area of the circle is : " + area);

//5
let distance = parseFloat(
  prompt("Enter the distance from your cities to Phnom Penh(km) : ")
);
let time = parseFloat(prompt("Enter how many hour you want to get there : "));
let speed = distance / time;
alert("required speed to get there is : " + speed + "km/h");

//6
let dollars = parseFloat(prompt("Enter dollars to convert to euros : "));
const EXCHANGE_RATE_EUR = 0.96;
alert(dollars + "$ convert to euros is : " + dollars * EXCHANGE_RATE_EUR);

//7
let storageDriveSize = parseFloat(
  prompt("Enter the amount of flash drive (GB) : ")
);
//1gb = 1024mb
let eachFile = 820;
let filesStore = (storageDriveSize * 1024) / eachFile;
alert("This USB flash drive can store : " + parseInt(filesStore) + " files");

//8
let userAmountOfMoney = parseFloat(prompt("Enter your amount of money : "));
let priceOfChocolatebar = parseFloat(
  prompt("Enter the price of chocolate bar : ")
);
let userCanBuy = parseInt(userAmountOfMoney / priceOfChocolatebar);
let change = userAmountOfMoney - userCanBuy * priceOfChocolatebar;
alert(
  "User can buy : " + userCanBuy + " chocolate bars \n Change : " + change + "$"
);

//9
let threeDigit = parseInt(prompt("Enter three-digit numbers : "));
let firstNum = parseInt((threeDigit / 100) % 10);
let secondNum = parseInt((threeDigit / 10) % 10);
let thirdNum = parseInt(threeDigit % 10);
alert("Backwards of three-digit numbers : " + thirdNum + secondNum + firstNum);

//10

let num = parseInt(prompt("Enter an integer:"));
//let isEven = (num % 2 == 0) ? "Even number" : "Not an even number";
let isEven = (num % 2 == 0 && "Even number") || "Not an even number";
alert(isEven);
