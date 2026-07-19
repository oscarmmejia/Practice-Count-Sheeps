function countSheeps(list) {
  let sheepCounter = 0;

  for (let animal of list) {
    if (animal === true) sheepCounter++;
  }

  if (sheepCounter > 0) return `There are ${sheepCounter} sheeps in total`;
  if (sheepCounter === 0) return "UPS!!! Wolves ate Sheeps";
}

const list1 = [ true, true, true, false, true, true, true, true, true, false, true, false, true, false, false, true, true, true, true, true, false, false, true, true ];
const list2 = [ false, false, false ];

console.log(countSheeps(list1));
console.log(countSheeps(list2));