'use strict';
let money = prompt("Ваш бюджет на месяц?",'');
let time = prompt("Введите дату в формате YYYY-MM-DD",'');

let appData = {
    money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let a1 = prompt('Введите обязательную статью расходов в этом месяце','');
let a2 = prompt('Во сколько обойдется?','');
appData.expenses[a1] = a2;
a1 = prompt('Введите обязательную статью расходов в этом месяце','');
a2 = prompt('Во сколько обойдется?','');
appData.expenses[a1] = a2;
alert((appData.money-appData.expenses[a1]-appData.expenses[a2])/30);