let body = document.querySelector('body')
let p = document.createElement('p')

// 1 задание
// let s = 0;

// for (let i = 1; i < 1000; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//         s += i;
//     }
// }
// p.textContent = s
// body.appendChild(p);
// console.log(s);



// 2 задание
// let s = 0;
// let n = 1;

// for (let i = 2; i <= 4000000;) {
//     if (i % 2 === 0) {
//         s += i;
//        }
//     let summ = n + i;
//     n = i;
//     i = summ;
//     console.log(summ)
// }

// p.textContent = s
// body.appendChild(p);
// console.log(s);


// 3 задание -----
// let start = performance.now()
// function myName(number) {
//     let p = 2;
//     while (p <= number) {
//         if (number % p === 0) {
//             if (number === p) {
//                 return number; 
//             }
//             number = number / p;
//         } else {
//             p++;
//         }
//     }
// }

// let s = myName(600851475143);
// let end = performance.now();
// console.log(s);

// 3 задание++
// let start=performance.now();
// let del;
// let supNum = 600851475143;
// let num =Math.round(Math.sqrt(supNum));
// for (let i=3; i<num; i++){
//     if (supNum%i==0){
//         let isSimple = true;
//         for (let j = 2; j<i; j++){
//             if (i%j==0){
//                 isSimple = false;
//                 break;
//             }
//         }
//         if (isSimple){
//             del=i;
           
//         }
//     }
// }
// let end=performance.now();
// console.log(del);
// console.log(end-start+'ms');
  
     
// let largestPalindrome = 0;

// for ( let i = 999; i >= 100; i--){
//     for (let j = 999; j >= 100; j--){
//         let product = i * j;
//         if (product > largestPalindrome){
//             largestPalindrome = product;
//             break;
//         }

//     }
    
// }
// console.log( largestPalindrome);






// 4 задание  палендром ++
// function isPalindrome(a) {
//     let b =String(a).split('').reverse().join('');
//     if (a==b)
//         return true;
//   }
  
//     findPalindrome =  function() {
//     let Palindrome = 0;
//     let product;
//     for (let i = 999; i >= 100; i--) {
//       for (let j = 999; j >= 100; j--) {
//             product = i * j;
//         if (isPalindrome(product)) {
//             if (product > Palindrome)
//                 Palindrome = product;
//         }
//       }
//     }
  
//     return Palindrome;
//   }
  
//   let Palindrome = findPalindrome();
//   console.log(Palindrome);






 
// 5 задание ++
// function isNan() {
//   let nan = 1;
  
//   for (let i = 2; i <= 20; i++) {
//     nan = fun(nan, i);
//   } 
 
//   return nan;
// }

// function nod(a, b) {
//   for (a ;b !== 0;) {
//     let temp = b;
//     b = a % b;
//     a = temp;
//   }
  
//   return a;
// }

// function fun(a, b) {
//   return (a / nod(a, b))*b;
// }

// console.log(isNan());


function primeFactors(n)
{
  let arr = [];
  let i = 2;
  while(i<=n)
  {
    if(n%i == 0)
    {
      n = n/i;
      arr.push(i);
    } 
    else
    {
      i++;
    }
  }
  return arr;
}

console.log(primeFactors(84, 6, 48, 7, 143));
