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