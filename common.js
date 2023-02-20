'use strict'

// /* Перша функція */
//
// const arrMix = [5 , 'wegwegwe', '24',34, {}, 123]
// alert(`Дан массив:  ${arrMix.join(',  ')}`);
//
// const getAverage = (arrMix) => {
//
//     const arrFilterNumber = arrMix.filter(item =>typeof item === 'number' );
//     let sum = 0;
//     for (let i = 0; i < arrFilterNumber.length; i++) {
//         sum += arrFilterNumber[i];
//     }
//     return sum /arrFilterNumber.length;
// };
//
// alert(`Cереднє арифметичне числових елементів масиву =  ${getAverage(arrMix)}`);
//

// /* Друга функція */
//
// function doMath(x, znak, y) {
//     if (~znak.search(/[^+\-*/%^]/) || znak.length !== 1 ) return 'Ви ввелі не валідні дані.';
//     return eval(x + znak.replace('^', '**') + y)
// }
// const x = +prompt('Введите x');
// const y = +prompt('Введите y');
// const znak = prompt('Введите знак');
//
// console.log(x,y,znak)
//
// if(!Number.isNaN(x) && !Number.isNaN(y) && znak){
//     alert(doMath(x, znak, y))
// }else {
//     alert('Ви ввелі не валідні дані.')
// }


/* Третя функція */
// const mainN = +prompt('Введите длину главного массива');
// const subN = +prompt('Введите длину внутренних массивов');
//
// new Array(+mainN).fill(0)
//     .map((_, ind) =>
//         new Array(+subN).fill(0)
//             .map((_, i) => prompt(`Введите элемент ${i} в подмассиве ${ind}`)));
//
//
//     if(mainN > 0 && subN > 0){
//         Array.map(subArr => + subArr)
//
//     }else {
//          alert('Ви ввелі не валідні дані.')
//     }


const M = 3, N = 4;

let arr = Array(M).fill().map(() => Array(N));
console.log(arr);


// console.log(Array)
// alert(`Ваш массив: + ${Array}`);






// /* Четверта функція */
//
//
// function userQuestion (question) {
//     let userResponse = prompt(`Введить строку.`);
//     while (userResponse < 1  ) {
//         userResponse = prompt('Будь ласка повторіть, введить строку');
//     }
//     return userResponse;
// }
//
//
// function inputArrayBySpace(){
//     let array = prompt('Що ви хочете удалити зі строки?')?.split('');
//     while (!array?.length || array[0] ===''){
//         array = prompt('Будь ласка повторіть, що ви хочете удалити зі строки?')?.split('');
//     }
//
//     return array
// }
//
//
// function removeSymbol(string,array){
//     for(const elem of array){
//         string= string.split(elem).join('');
//     }
//     return string;
// }
//
// alert(`Результат:    ${removeSymbol(userQuestion(),inputArrayBySpace())}`)
//
