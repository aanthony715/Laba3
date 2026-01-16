const fs = require('fs');
const log = console.log;

const students = require('./student.json')
    .sort((a, b) => b.avg - a.avg);  

const firstBelow40 = students.find(student => student.avg < 4.0);

const lastAbove40 = students
    .filter(student => student.avg >= 4.0)
    .slice(-1)[0];  

log("=== Первый студент с рейтингом ниже  4.0 ===");
log(JSON.stringify(firstBelow40, null, 4));

log("\n=== Последний студент с рейтингом >= 4.0 ===");
log(JSON.stringify(lastAbove40, null, 4));
