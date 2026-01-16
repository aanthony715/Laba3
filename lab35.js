const fs = require('fs');
const log = console.log;

const students = require('./student.json');

const totalAvg = students
    .reduce((sum, student) => sum + student.avg, 0) / students.length;

const aboveAverageStudents = students
    .filter(student => student.avg > totalAvg)
    .sort((a, b) => a.avg - b.avg);

log("=== Общий средний балл группы ===");
log(`Средний балл группы: ${totalAvg.toFixed(2)}`);

log("\n=== Студенты с баллом выше среднего ===");
log(JSON.stringify(aboveAverageStudents, null, 4));
