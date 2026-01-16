const fs = require('fs');
const log = console.log;

// Чтение и обработка данных
const students = require('./student.json')
    .sort((a, b) => b.avg - a.avg);  // сортировка по убыванию рейтинга

// Поиск первого объекта с рейтингом ниже 4.0
const firstBelow40 = students.find(student => student.avg < 4.0);

// Поиск последнего объекта с рейтингом >= 4.0
const lastAbove40 = students
    .filter(student => student.avg >= 4.0)
    .slice(-1)[0];  // берем последний элемент

// Вывод результатов
log("=== ПЕРВЫЙ СТУДЕНТ С РЕЙТИНГОМ НИЖЕ 4.0 ===");
log(JSON.stringify(firstBelow40, null, 4));

log("\n=== ПОСЛЕДНИЙ СТУДЕНТ С РЕЙТИНГОМ >= 4.0 ===");
log(JSON.stringify(lastAbove40, null, 4));