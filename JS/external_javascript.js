//Homework 1 part


var name = ' Petro ',
  time = ' at 17:00 ',
  place = 'somewhere in Milan ';
var events = /^[a-zA-Z]+$/;
do {
  var user = prompt("Please enter what event Petro will have at 17:00 somewhere in Milan?");
}
while (!user.match(events) || user === '' || user === null || user === undefined);
console.log(name + user + time + place);


//Homework 2 part

var dollars_curs = 27.109345;
var euros_curs = 31.831793;
var euro_dollar = euros_curs / dollars_curs;
var euro_dollar = euro_dollar.toFixed(3);
do {
  var dollars = prompt("enter the amount of dollars");
}
while (isNaN(dollars) || dollars === '' || dollars === null || dollars === undefined || dollars < 0);
do {
  var euros = prompt("enter the amount of euros");
}
while (isNaN(euros) || euros === '' || euros === null || euros === undefined || euros < 0);
var dollars_sum = (dollars * dollars_curs).toFixed(2);
  euros_sum = (euros * euros_curs).toFixed(2);
  // Math.abs(dollars_sum);
  // Math.abs(euros_sum);
alert(euros + ' euros are equal ' + euros_sum + ' grns, ' + dollars + ' dollars are equal ' + dollars_sum + ' grns, ' + ' one euro is equal ' + euro_dollar + ' dollars. ');

// dollars_curs 27.109345, euros_curs 31.831793, currensy date: 11.12.2017


// // 1. Create file and add external js file.
// 2. Create variables for person name, time, place and event
// 3. Event should be entered using prompt
// 4. Other variables should be set as you wish
// 5. Join all values in one sentence and show it in console
// example: Petro has a meeting today at 17:00 somewhere in Milan.
// 6. Upload result somewhere(gh-pages, google drive) and give the link to check


// Написати конвертер валют.
// За допомогою prompt користувач вводить кількість євро.
// За допомогою prompt користувач вводить кількість доларів.
// За допомогою alert вивести наступне:
// 100 euros are equal 2900 grns, 52 dollars are equal 1404, one euro is equal 1.074    dollars.
// Числа замінити на введені та обраховані дані
//
// *значення курсу валют використовувати станом на дату виконання роботи.
//
// Результат роботи додати в попереній документ
