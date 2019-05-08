'use sctrict';
//второй пункт 
let money = prompt('Ваш бюджет на месяц?','');
let time = prompt('Введите дату в формате YYYY-MM-DD','');

//третий пункт
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
}

//четвертый пункт
//let a= prompt('Введите обязательную статью расходов в этом месяце', '');
//let b= prompt('Во сколько обойдется?', '');
//let c= prompt('Введите обязательную статью расходов в этом месяце', '');
//let d= prompt('Во сколько обойдется?', '');

//appData.expenses.a = b;
//appData.expenses.c = d;

// for (let i = 0; i < 2; i++){
//     let a, b;  
//     do {
//         a = prompt('Введите обязательную статью расходов в этом месяце', '');
//         if (typeof(a) !== 'string' || !a.length || a.length >=50) {
//             continue;
//         }

//         b = prompt('Во сколько обойдется?', '');
//         b = parseInt(b);
//         if (isNaN(b)){
//             continue;
//         }
//     } while (false);
// }




// for (let i = 0; i < 2; i++){
//     let a, b;  
//     do {
//         a = prompt('Введите обязательную статью расходов в этом месяце', '');
    
//         b = prompt('Во сколько обойдется?', '');
//         b = parseInt(b);
       
//     } while ((typeof(a) !== 'string' || !a.length || a.length >=50) || isNaN(b));
// }




for (let i = 0; i < 2; i++){
    let a, b;  
     while ((typeof(a) !== 'string' || !a.length || a.length >=50) || isNaN(b)){
       
            a = prompt('Введите обязательную статью расходов в этом месяце', '');
        
            b = prompt('Во сколько обойдется?', '');
            b = parseInt(b);
           
     }
}




appData.moneyPreDay = appData.budget / 30;
alert ("Everyday budget: " + appData.moneyPreDay);

if(appData.moneyPreDay < 1000) {
    console.log("Minimalniy uroven dostatka")
} else if (appData.moneyPreDay > 100 && appData.moneyPreDay < 2000){
    console.log('middle');
} else if (appData.moneyPreDay > 2000){
    console.log('High');
}else{
    console.log('Was mistake')
}


//пятое задание
//alert(appData.budget/30);

 


//console.log(0 || "" || 2 || undefined || true || falsе)