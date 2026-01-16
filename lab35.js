const fs = require('fs');
const log = console.log;

// Чтение и обработка данных
const students = require('./student.json');

// Нахождение общего среднего балла с помощью reduce()
const totalAvg = students
    .reduce((sum, student) => sum + student.avg, 0) / students.length;

// Студенты с баллом выше среднего, отсортированные по возрастанию рейтинга
const aboveAverageStudents = students
    .filter(student => student.avg > totalAvg)
    .sort((a, b) => a.avg - b.avg);

// Вывод результатов
log("=== ОБЩИЙ СРЕДНИЙ БАЛЛ ГРУППЫ ===");
log(`Средний балл группы: ${totalAvg.toFixed(2)}`);

log("\n=== СТУДЕНТЫ С БАЛЛОМ ВЫШЕ СРЕДНЕГО ===");
log(JSON.stringify(aboveAverageStudents, null, 4));