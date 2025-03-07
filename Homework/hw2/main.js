let userInput = prompt(
  "1. task1 \n2. task2 \n3. task3 \n4. task4 \n5. task5 \n6. task6 \n7. task7 \n8. task8 \n9. task9 \n10. task10 \nEnter task number to test :"
);
switch (userInput) {
  case "1":
    let userAge = prompt("1. Enter your age : ");
    if (userAge < 12) {
      document.write("you're a child <br>");
    } else if (userAge < 18) {
      document.write("you're a teenager <br>");
    } else if (userAge <= 60) {
      document.write("you're a adult <br>");
    } else if (userAge > 60) {
      document.write("you're a retiree <br>");
    }
    break;
  case "2":
    let userNumber = parseInt(
      prompt("2. Enter your number to output a special character (0-9): ")
    );
    switch (userNumber) {
      case 0:
        document.write("0-) <br>");
        break;
      case 1:
        document.write("1-! <br>");
        break;
      case 2:
        document.write("2-@ <br>");
        break;
      case 3:
        document.write("3-# <br>");
        break;
      case 4:
        document.write("4-$ <br>");
        break;
      case 5:
        document.write("5-% <br>");
        break;
      case 6:
        document.write("6-^ <br>");
        break;
      case 7:
        document.write("7-& <br>");
        break;
      case 8:
        document.write("8-* <br>");
        break;
      case 9:
        document.write("9-( <br>");
        break;
      default:
        document.write("Please enter one digit number.");
    }
    break;
  case "3":
    let threeDigits = parseInt(prompt("3. Enter three digit nubmers : "));
    if (threeDigits > 99 && threeDigits < 1000) {
      let firstNum = parseInt((threeDigits / 100) % 10);
      let secondNum = parseInt((threeDigits / 10) % 10);
      let thirdNum = threeDigits % 10;
      if (
        firstNum == secondNum ||
        firstNum == thirdNum ||
        secondNum == thirdNum
      ) {
        document.write("The numbers contains equals numbers");
      } else {
        document.write("All are differents");
      }
    } else {
      document.write("Please Enter Three-Digit Numbers");
    }
    break;
  case "4":
    let enterYear = parseInt(prompt("4. Enter year to check leap year: "));

    if (
      enterYear % 400 === 0 ||
      (enterYear % 4 === 0 && enterYear % 100 !== 0)
    ) {
      document.write(enterYear + " is a leap year.");
    } else {
      document.write(enterYear + " is not a leap year.");
    }
    break;
  case "5":
    let userInput = parseInt(
      prompt("5. Enter a five-digit number to check palindrome:")
    );
    if (userInput > 9999 && userInput < 100000) {
      let first = Math.floor(userInput / 10000);
      let second = Math.floor((userInput / 1000) % 10);
      let fourth = Math.floor((userInput / 10) % 10);
      let fifth = userInput % 10;

      if (first == fifth && second == fourth) {
        document.write("The number is a palindrome.");
      } else {
        document.write("The number is not a palindrome.");
      }
    } else {
      document.write("Please Enter 5 Digit numbers");
    }
    break;
  case "6":
    let usdMoney = prompt("6. Enter your amount of USD : ");
    let currencyChange = prompt(" 1. EUR \n 2. UAN \n 3. AZN");
    switch (currencyChange) {
      case "1":
        usdMoney = usdMoney * 0.96;
        document.write("You got : " + usdMoney + "EUR");
        break;
      case "2":
        usdMoney = usdMoney * 41.37;
        document.write("You got : " + usdMoney + "UAN");

        break;
      case "3":
        usdMoney = usdMoney * 1.7;
        document.write("You got : " + usdMoney + "AZN");
        break;
    }
    break;
  case "7":
    let purchaseAmount = parseFloat(prompt("Enter your amount of purchase: "));
    let discountAmount;
    let finalAmount;
    if (purchaseAmount > 200 && purchaseAmount < 300) {
      discountAmount = purchaseAmount * (3 / 100);
    } else if (purchaseAmount > 300 && purchaseAmount < 500) {
      discountAmount = purchaseAmount * (5 / 100);
    } else if (purchaseAmount >= 500) {
      discountAmount = purchaseAmount * (7 / 100);
    } else {
      discountAmount = 0;
    }
    finalAmount = purchaseAmount - discountAmount;
    document.write("Last Price After discount : " + finalAmount);
    break;
  case "8":
    let circleLength = parseFloat(prompt("Enter circle length : "));
    let squareParimeter = parseFloat(prompt("Enter square parimeter : "));
    const PI = 3.14;
    // If the diameter of the circle is less than or equal to the side length of the square, the circle can fit inside the square.
    let diameter = circleLength / PI;
    let side = squareParimeter / 4;
    if (diameter <= side) {
      document.write("The circle can fit into the specified square.");
    } else {
      document.write("The circle can't fit into the specified square.");
    }
    break;
  case "9":
    let score = 0;
    let q1 = prompt(
      "Q1. What is the capital city of Cambodia? \n 1. Phnom Penh \n 2. Siem Reap \n 3. Poi Pet \n (Enter Number)"
    );
    let q2 = prompt(
      "Q2. Which famous ancient temple complex is located in Cambodia? \n 1. Pyramid \n 2.Akshardham \n 3. Angkor Wat \n (Enter Number)"
    );
    let q3 = prompt(
      "Q3. What is the official currency of Cambodia? \n 1.BAHT \n 2. RIEL \n 3. DONG \n (Enter Number)"
    );
    if (q1 == "1") {
      score += 2;
    }
    if (q2 == "3") {
      score += 2;
    }
    if (q3 == "2") {
      score += 2;
    }
    document.write(
      score > 3
        ? "Congrats, you got " + score + " points!"
        : "You only get " + score + "points, goodluck next time!"
    );
    break;
  case "10":
    let day = prompt("Enter Day : ");
    let month = prompt("Enter Month : ");
    let Year = prompt("Enter Year : ");

    let isLeapYear = false;
    let is31days = false;
    let is30days = false;
    document.write("Currect Date : " + day + "," + month + "," + Year);
    ++day;

    if (
      month == 1 ||
      month == 3 ||
      month == 5 ||
      month == 7 ||
      month == 8 ||
      month == 10 ||
      month == 12
    ) {
      is31days = true;
    }
    if (month == 4 || month == 6 || month == 9 || month == 11) {
      is30days = true;
    }
    if (Year % 400 === 0 || (Year % 4 === 0 && Year % 100 !== 0)) {
      isLeapYear = true;
    }

    if (month == 2 && day > 29 && isLeapYear) {
      day = 1;
      ++month;
    } else if (month == 2 && day > 28 && !isLeapYear) {
      day = 1;
      ++month;
    }

    if (is30days && day > 30) {
      day = 1;
      month++;
    }
    if (is31days && day > 31) {
      day = 1;
      month++;
    }
    if (month > 12) {
      day = 1;
      month = 1;
      Year++;
    }
    document.write("<br> Next Date : " + day + "," + month + "," + Year);
    break;
}
///1
/*
let userAge = prompt("1. Enter your age : ");
if (userAge <= 12) {
  document.write("you're a child <br>");
} else if (userAge <= 18) {
  document.write("you're a teenager <br>");
} else if (userAge <= 60) {
  document.write("you're a adult <br>");
} else if (userAge > 60) {
  document.write("you're a retiree <br>");
}
*/
///2
/*
let userNumber = parseInt(
  prompt("2. Enter your number to output a special character : ")
);
switch (userNumber) {
  case 0:
    document.write("0-) <br>");
    break;
  case 1:
    document.write("1-! <br>");
    break;
  case 2:
    document.write("2-@ <br>");
    break;
  case 3:
    document.write("3-# <br>");
    break;
  case 4:
    document.write("4-$ <br>");
    break;
  case 5:
    document.write("5-% <br>");
    break;
  case 6:
    document.write("6-^ <br>");
    break;
  case 7:
    document.write("7-& <br>");
    break;
  case 8:
    document.write("8-* <br>");
    break;
  case 9:
    document.write("9-( <br>");
    break;
  default:
    document.write("Please enter one digit number.");
}
*/
///3
/*
let threeDigits = parseInt(prompt("3. Enter three digit nubmers : "));
if (threeDigits > 99 && threeDigits < 1000) {
  let firstNum = parseInt((threeDigits / 100) % 10);
  let secondNum = parseInt((threeDigits / 10) % 10);
  let thirdNum = threeDigits % 10;
  if (firstNum == secondNum || firstNum == thirdNum || secondNum == thirdNum) {
    document.write("The numbers contains equals numbers");
  } else {
    document.write("All are differents");
  }
} else {
  document.write("Please Enter Three-Digit Numbers");
}
*/

///4
/*
let enterYear = parseInt(prompt("4. Enter year : "));

if (enterYear % 400 === 0 || (enterYear % 4 === 0 && enterYear % 100 !== 0)) {
  document.write(enterYear + " is a leap year.");
} else {
  document.write(enterYear + " is not a leap year.");
}
  */

///5
/*
let userInput = parseInt(prompt("5. Enter a five-digit number:"));
if (userInput > 9999 && userInput < 100000) {
  let first = Math.floor(userInput / 10000);
  let second = Math.floor((userInput / 1000) % 10);
  let fourth = Math.floor((userInput / 10) % 10);
  let fifth = userInput % 10;

  if (first == fifth && second == fourth) {
    document.write("The number is a palindrome.");
  } else {
    document.write("The number is not a palindrome.");
  }
} else {
  document.write("Please Enter 5 Digit numbers");
}*/

//6
/*
let usdMoney = prompt("6. Enter your amount of USD : ");
let currencyChange = prompt(" 1. EUR \n 2. UAN \n 3. AZN");
switch (currencyChange) {
  case "1":
    usdMoney = usdMoney * 0.96;
    document.write("You got : " + usdMoney + "EUR");
    break;
  case "2":
    usdMoney = usdMoney * 41.37;
    document.write("You got : " + usdMoney + "UAN");

    break;
  case "3":
    usdMoney = usdMoney * 1.7;
    document.write("You got : " + usdMoney + "AZN");
    break;
}
*/
//7
/*
let purchaseAmount = parseFloat(prompt("Enter your amount of purchase: "));
let discountAmount;
let finalAmount;
if (purchaseAmount > 200 && purchaseAmount < 300) {
  discountAmount = purchaseAmount * (3 / 100);
} else if (purchaseAmount > 300 && purchaseAmount < 500) {
  discountAmount = purchaseAmount * (5 / 100);
} else if (purchaseAmount >= 500) {
  discountAmount = purchaseAmount * (7 / 100);
}
finalAmount = purchaseAmount - discountAmount;
document.write("Last Price After discount : " + finalAmount);
*/

//8
/*
let circleLength = parseFloat(prompt("Enter circle length : "));
let squareParimeter = parseFloat(prompt("Enter square parimeter : "));
const PI = 3.14;
// If the diameter of the circle is less than or equal to the side length of the square, the circle can fit inside the square.
let diameter = circleLength / PI;
let side = squareParimeter / 4;
if (diameter <= side) {
  document.write("The circle can fit into the specified square.");
} else {
  document.write("The circle can't fit into the specified square.");
}
*/

//9
/*
let score = 0;
let q1 = prompt(
  "Q1. What is the capital city of Cambodia? \n 1. Phnom Penh \n 2. Siem Reap \n 3. Poi Pet \n (Enter Number)"
);
let q2 = prompt(
  "Q2. Which famous ancient temple complex is located in Cambodia? \n 1. Pyramid \n 2.Akshardham \n 3. Angkor Wat \n (Enter Number)"
);
let q3 = prompt(
  "Q3. What is the official currency of Cambodia? \n 1.BAHT \n 2. RIEL \n 3. DONG \n (Enter Number)"
);
if (q1 == "1") {
  score += 2;
}
if (q2 == "3") {
  score += 2;
}
if (q3 == "2") {
  score += 2;
}
document.write(
  score > 3
    ? "Congrats, you got " + score + " points!"
    : "You only get " + score + "points, goodluck next time!"
);
*/

//10
/*
let day = prompt("Enter Day : ");
let month = prompt("Enter Month : ");
let Year = prompt("Enter Year : ");

let isLeapYear = false;
let is31days = false;
let is30days = false;
document.write("Currect Date : " + day + "," + month + "," + Year);
++day;

if (
  month == 1 ||
  month == 3 ||
  month == 5 ||
  month == 7 ||
  month == 8 ||
  month == 10 ||
  month == 12
) {
  is31days = true;
}
if (month == 4 || month == 6 || month == 9 || month == 11) {
  is30days = true;
}
if (Year % 400 === 0 || (Year % 4 === 0 && Year % 100 !== 0)) {
  isLeapYear = true;
}

if (month == 2 && day > 29 && isLeapYear) {
  day = 1;
  ++month;
} else if (month == 2 && day > 28 && !isLeapYear) {
  day = 1;
  ++month;
}

if (is30days && day > 30) {
  day = 1;
  month++;
}
if (is31days && day > 31) {
  day = 1;
  month++;
}
if (month > 12) {
  day = 1;
  month = 1;
  Year++;
}
document.write("<br> Next Date : " + day + "," + month + "," + Year);
*/
