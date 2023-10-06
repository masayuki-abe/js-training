const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

let myVariable;
myVariable = 'Bob';

// 関数
// https://developer.mozilla.org/ja/docs/Learn/Getting_started_with_the_web/JavaScript_basics#%E9%96%A2%E6%95%B0
function multiply(num1, num2) {
  let result = num1 * num2;
  return result;
}
console.log(multiply(4, 7));
console.log(multiply(20, 20));
console.log(multiply(0.5, 3));

// イベント
// https://developer.mozilla.org/ja/docs/Learn/Getting_started_with_the_web/JavaScript_basics#%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88
document.querySelector('html').addEventListener('click', () => {
  alert('click!');
});