//Bananas
//"https://www.codewars.com/kata/5917fbed9f4056205a00001e/train/javascript"

var bananas = function(s) {
  let result = []
  , letters = ['b', 'a', 'n', 'a', 'n', 'a']
  , lettersPos = 0;
  s = s.split('');
  
  for (let i = 0; i < s.length; i++) {
    if (s[i] === letters[lettersPos]) {
      lettersPos++;
          
      //call main function recursively with new string,
      //where matchinng letter is replaced by '-'
      let newS = s.slice();
      newS[i] = '-';
      result = result.concat(bananas(newS.join("")));
          
    } else s[i] = '-';
  }
  
  if(lettersPos === letters.length) result.push(s.join(''));
  
  //remove duplicates
  return Array.from(new Set(result));
}

//"Barista Manager"
//"https://www.codewars.com/kata/624f3171c0da4c000f4b801d/train/javascript"

function barista(coffees, cMachines){
  if (coffees.length === 0) return 0;

  coffees.sort((a, b) => a - b);
  let nextOrder = 0
    , workingTime = -2 
    , machinesArray = [];
  for (let i = 0; i < cMachines; i++) {
    machinesArray.push({ sum: 0, orderTime: -2 });
  }
  
/*  While there are orders in coffees array, every second
    we check if any machine is already made a coffee to add
    new order.
  
    orderTime = coffee preparation time for a new customer 
    since the start of the machine
  
    sum = the sum of the times of all clients for this machine */
  
  while (nextOrder < coffees.length) {
    
    if (coffees[nextOrder] === 0) {
      nextOrder++;
      continue;
    }
    
    for (let machine of machinesArray) {      
      if (machine.orderTime === workingTime && coffees[nextOrder]) {
        machine.orderTime += coffees[nextOrder++] + 2;
        machine.sum += machine.orderTime;
      }
    }

    workingTime++;
  }

  return machinesArray.reduce((accum, {sum}) => accum + sum, 0);
}