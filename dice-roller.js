const diceRoller = function(num) {
  let join = '';
  for (let i = 0; i <= num-1; i++) {
    let randomNum = Math.floor(Math.random() * 6)+1;
    if (join) {
      join += ", ";
    }
    join += randomNum;
  }
  return `Rolled ${num} dice: ${join}`;
}