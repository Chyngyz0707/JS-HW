                 /*Задача 1
 написать программу: нужно запрашивать у пользователя его имя и фамилию
 (отдельным prompt) и выводит приветствие в виде: Здравствуйте, Имя Фамилия!*/


 let firstname = prompt ("Введите ваше имя:     ");
 let secondname= prompt ("Введите вашу фамилию:     ");

 alert( Здравствуйте, + " " + firstname + " " + secondname);


                   /*Задача2
 Написать программу которая спрашивает у пользователя 2 числа(через prompt) и выводит в консоль какое меньше.
 Если числа равны, то вывести что они равны.*/


 let a = Number(prompt());
 let b = Number(prompt());

if(a < b ) {
     alert(a); 
 }
 else if(b < a  ) {
     alert(b); 
 }
 else if(a===b ) {   
    
    alert("Числа равны"); 
 }

                     /*Задача3  
 написать программу "светофор": программа запрашивает у пользователя цвет в текстовом виде,
 и печатает в консоль действие согласно ПДД. Например: красный : стой! желтый : жди и т.д.*/


 let Trafficlight = prompt("Введите цвет светофора")

 if (Trafficlight === "red") {
     console.log("Стой")
 } else if (Trafficlight === "yellow") {
     console.log("Жди")
 } else if (Trafficlight === "green") {
     console.log("Езжай")
 } else {
     console.log("Error")
 }