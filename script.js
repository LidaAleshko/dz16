//1. Дана строка 'aaa@bbb@ccc'. Замените все @ на ! с помощью глобального поиска и замены.


let str = 'aaa@bbb@ccc';
console.log(str)
console.log(str.match(/@/g))
console.log('aaa@bbb@ccc'.replace(/@/g, '!'))

//В переменной date лежит дата в формате 2025-12-31. Преобразуйте эту дату в формат 31/12/2025. 


 let str1 = '2025-12-31';
 console.log(str1);
 console.log(str1.replace(/-/g, '\/').split("\/").reverse())
 

 //3. Дана строка «Я учу javascript!». Вырежете из нее слово «учу» и слово «javascript» тремя разными способами (через substr, substring, slice).

//1
 let str2 = "Я учу javascript!";
 console.log(str2.length-1)
 sub = str2.substr(0, 1) + str2.substr(16);
 console.log(sub);
 //2
 sub = str2.substring(0, 1) + str2.substring(16)
 console.log(sub)
 //3
 sub = str2.slice(0, 1) + str2.slice(16)
 console.log(sub)

 //4. Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень из суммы кубов его элементов. Для решения воспользуйтесь циклом for.

 let arr = [4, 2, 5, 19, 13, 0, 10];
 let sum = 0;
 for(let i = 0; i < arr.length; i++){
    sum += arr[i] ** 3;
            console.log(sum);
 }
 sum1 = Math.sqrt(sum)
 console.log(sum1)

 //5. Даны переменные a и b. Отнимите от a переменную b и результат присвойте переменной c. Сделайте так, чтобы в любом случае в переменную c записалось положительное значение. Проверьте работу скрипта при a и b, равных соответственно 3 и 5, 6 и 1.

 let a = 3//6;
 let b = 5//1;
 let c = a-b; 
 if(c < 0) {console.log (-(c))}
  else {
    console.log(c)
 }

 //6. Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014. Для решения этой задачи напишите функцию, которая будет добавлять 0 перед днями и месяцами, которые состоят из одной цифры (из 1.9.2014 сделает 01.09.2014).
  //let date = new Date ();
  //console.log(date)
  let date = new Date();
 
  function newDate(num){
      if (num > 0 && num < 10) { 
          return '0' + num;
      } else {
          return num;
      }
  }
   
  console.log(date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + ' ' + newDate(date.getDate()) + '.' + newDate(date.getMonth() + 1) + '.' + date.getFullYear());

  //7. Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая найдет строки aba, abba, abbba по шаблону: буква 'a', буква 'b' любое количество раз, буква 'a'.

  let str3 = 'aa aba abba abbba abca abea';
  let res1 = str3.replace(/aba/g, '!')
  console.log(res1)
  let res2 = str3.replace(/abba/g, '!')
  console.log(res2)
  let res3 = str3.replace(/abbba/g, '!')
  console.log(res3)
  let res4 = str3.replace(/a/g, '!')
  console.log(res4)
  let res5 = str3.replace(/b/g, '!')
  console.log(res5)
  let res6 = str3.replace(/a*a/g, '!')
  console.log(res6)
  
  //8. Напишите ф-цию строгой проверки ввода номер телефона в международном формате (<код страны> <код города или сети> <номер телефона>). Функция должна возвращать true или false. Используйте регулярные выражения.
  ///
  
  //(\+?[0-9-]{12,15})


 







