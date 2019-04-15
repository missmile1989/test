'use strict';
let money = prompt("Ваш бюджет на месяц?",'');
let time = prompt("ведите дату в формате YYYY-MM-DD",'');

let appData = {
    money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
}
let a1 = prompt("Введите обязательную статью расходов в этом месяце",'');
let a2 = prompt("Во сколько обойдется?",'');
let a3 = prompt("Введите обязательную статью расходов в этом месяце",'');
let a4 = prompt("Во сколько обойдется?",'');
alert((money-a2-a4)/30);