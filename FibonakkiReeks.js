const numbers = [0 , 1];
for (i=0; i < 19; i++){
    var nieuw = numbers[i]+ numbers[i +1];
    console.log(numbers[i] +" + "+ numbers[i+1]+ " = "+ nieuw)
    numbers.push(nieuw);
}