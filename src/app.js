var chocolates = [
  'green',
  'green',
  'green',
  'silver',
  'blue',
  'crimson',
  'purple',
  'red',
  'crimson',
  'purple',
  'purple',
  'green',
  'pink',
  'blue',
  'red',
  'silver',
  'crimson',
  'purple',
  'silver',
  'silver',
  'red',
  'green',
  'red',
  'silver',
  'pink',
  'crimson',
  'purple',
  'green',
  'red',
  'silver',
  'crimson',
  'pink',
  'silver',
  'blue',
  'pink',
  'crimson',
  'crimson',
  'crimson',
  'red',
  'purple',
  'purple',
  'green',
  'pink',
  'blue',
  'red',
  'crimson',
  'silver',
  'purple',
  'purple',
  'purple',
  'red',
  'purple',
  'red',
  'blue',
  'silver',
  'green',
  'crimson',
  'silver',
  'blue',
  'crimson',
  'purple',
  'green',
  'pink',
  'green',
  'red',
  'silver',
  'crimson',
  'blue',
  'green',
  'red',
  'red',
  'pink',
  'blue',
  'silver',
  'pink',
  'crimson',
  'purple',
  'green',
  'red',
  'blue',
  'red',
  'purple',
  'silver',
  'blue',
  'pink',
  'silver',
  'crimson',
  'silver',
  'blue',
  'purple',
  'purple',
  'green',
  'blue',
  'blue',
  'red',
  'red',
  'silver',
  'purple',
  'silver',
  'crimson',
];

// x and y ==> can take any of the values from the below list-
// [ green, red, purple, blue, crimson, silver, pink ]
// z ==> can take a number from 0<=a<=100

//Progression 1: Add z chocolates of x color

function addChocolates(chocolates, color, count) {
  if (count <= 0 || count >= 100) {
    return "Number cannot be zero/negative"
  } else {
    for (let i = 0; i < count; i++) {
      chocolates.unshift(color)
    }
    return chocolates
  }
}

//Progression 2: Remove z chocolates from the top of the dispenser


function removeChocolates(chocolates, count) {
  let removedChocolates = []
  let numOfChocolates = chocolates.length
  if (count <= 0) {
    return "Number cannot be zero/negative"
  } else if (numOfChocolates < count) {
    return "Insufficient chocolates in the dispenser"
  } else {
    for (let i = 0; i < count; i++) {
      removedChocolates.push(chocolates.shift())
    }
    return removedChocolates
  }
}

//Progression 3: Dispense z chocolates

function dispenseChocolates(chocolates, count) {
  let dispensedChocolates = [];
  let numOfChocolates = chocolates.length
  if (count <= 0) {
    return "Number cannot be zero/negative"
  } else if (numOfChocolates < count) {
    return "Insufficient chocolates in the dispenser"
  } else {
    for (let i = 0; i < count; i++) {
      dispensedChocolates.push(chocolates.pop())
    }
    return dispensedChocolates
  }
}

//Progression 4: Dispense z chocolates of x color

function dispenseChocolatesOfColor(chocolates, count, color){
  let numOfChocolates = chocolates.length
  let colorArray = []
  let colorChocoDispense = []
  console.log(chocolates,count,color)
  chocolates.forEach((col)=>{
    if (color === col){
      colorArray.push(col)
    }
  })
  if (count<=0){
    return "Number cannot be zero/negative"
  }else if (count>colorArray.length){
    return "Insufficient chocolates in the dispenser"
  }else{
    for(let i = numOfChocolates-1; i>=0; i--){
      if (color === chocolates[i]){
        colorChocoDispense.push(chocolates.pop(chocolates[i]))
        console.log(colorChocoDispense)
      }
    }
    return colorChocoDispense
  }
}

//Progression 5: Display z chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]

let arrayColors = ['green', 'silver', 'blue', 'crimson', 'purple', 'red', 'pink']
let check = [];
let checker = 0;

function noOfChocolates(chocolates) {
  check = [];
  arrayColors.forEach((el) => {
    checker = 0;
    chocolates.forEach((ele) => {
      if (ele == el) {
        checker += 1;
      }
    })
    if (checker > 0) {
      check.push(checker)
    }
  })
  return check;
}

//Progression 6: Sort chocolates based on count in each color. Return array of colors

let countObject = {}
let sortedObjectArray = []
let sortedColors
function sortChocolateBasedOnCount(chocolates) {
  sortedColors = []
  countObject = {}
  sortedObjectArray = {}
  arrayColors.forEach((el) => {
    colorCount = 0
    chocolates.forEach((e) => {
      if (el == e) {
        colorCount++
      }
    })
    if (colorCount > 0) {
      countObject[`${el}`] = `${colorCount}`
    }
  })
  sortedObjectArray = Object.entries(countObject).sort().sort((a, b) => b[1] - a[1])
  sortedObjectArray.forEach((el) => {
    for (let i = 0; i < (el[1]); i++) {
      sortedColors.push(el[0])
    }
  })
  return sortedColors
}

//Progression 7: Change z chocolates of x color to y color

let checkColor = 0;

function changeChocolateColor(chocolates, number, color, finalColor) {
  if (number <= 0) {
    return "Number cannot be zero/negative";
  }
  if (color == finalColor) {
    return "Can't replace the same chocolates";
  }
  for (let i = 0; i < chocolates.length; i++) {
    if (chocolates[i] == color) {
      chocolates[i] = finalColor;
    }
  }
  return chocolates;
}

//Progression 8: Change all chocolates of x color to y color and return [countOfChangedColor, chocolates]

let countOfChangedColor;

function changeChocolateColorAllOfxCount(chocolates, color, finalColor) {
  countOfChangedColor = 0;
  if (color == finalColor) {
    return "Can't replace the same chocolates";
  }
  for (let i = 0; i < chocolates.length; i++) {
    if (chocolates[i] == color) {
      chocolates[i] = finalColor;
    }
  }
  chocolates.forEach((el) => {
    if (el == finalColor) {
      countOfChangedColor++
    }
  })
  return [countOfChangedColor, chocolates]
}

//Challenge 1: Remove one chocolate of x color from the top

function removeChocolateOfColor(chocolates, color) {
  for (let i = 0; i < chocolates.length; i++) {
    if (chocolates[i] == color) {
      chocolates.splice(i, 1);
      break;
    }
  }
  return chocolates
}

//Challenge 2: Dispense 1 rainbow colored chocolate for every 3 chocolates of the same color dispensed

function dispenseRainbowChocolates(chocolates) {

  let countMap = [];
  chocolates.forEach((currChoco) => {
    countMap[currChoco] = (countMap[currChoco] || 0) + 1;
  });

  let countofEachChoco = Object.values(countMap);

  let total = 0;

  console.log(countofEachChoco);
  countofEachChoco.forEach((count) => {
    if (count >= 3) {
      total += Math.floor(count / 3)
    }
  })
  console.log(total)
  return total
}