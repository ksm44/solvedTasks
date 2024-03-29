/* FizzBuzz. Напишите программу, которая выводит через console.log
все числа от 1 до 100, с двумя исключениями. Для чисел, нацело делящихся на 3,
она должна выводить ‘Fizz’, а для чисел, делящихся на 5 (но не на 3) – ‘Buzz’.
Когда сумеете – исправьте её так, чтобы она выводила «FizzBuzz» для всех чисел,
которые делятся и на 3 и на 5. */

console.clear();
let FizzBuzz = function () {
  for (let i = 1; i <= 100; i++) {
    if (!(i%3) && !(i%5)){
      console.log("FizzBuzz");
      continue;
    }
    if (!(i%3)) {
      console.log("Fizz")
    } else if(!(i%5)) {
      console.log("Buzz")
    } else console.log(i);
    
  }
  
}
FizzBuzz();