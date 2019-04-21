'use sctrict';
//второй пункт 
let money = prompt('Ваш бюджет на месяц?','');
let time = prompt('Введите дату в формате YYYY-MM-DD','');

//третий пункт
let appData = {
    money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
}

//четвертый пункт
let a= prompt('Введите обязательную статью расходов в этом месяце');
let b= prompt('Во сколько обойдется?');
let c= prompt('Введите обязательную статью расходов в этом месяце');
let d= prompt('Во сколько обойдется?');

//пятое задание
alert((money-b-d)/30);

 //шестое задание - проверила в консоли, все работает
 //седьмое задание, выкладываю на гит
 
 //ответы к заданию
 //1) существует 6 простых типов данный и объекты
 //к простым типам данных относятся: null, undefined, symbol, numbers, boolean, true/false
 //2)console.log()
 //3) || - or   && - and


