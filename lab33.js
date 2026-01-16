const fs = require('fs');
const log = console.log;

const sortedStudents = require('./student.json')
    .sort((a, b) => {
        if (b.avg !== a.avg) {
            return b.avg - a.avg;
        }
        return a.lastName.localeCompare(b.lastName);
    });

log("=== Отсортированный список студентов ===");
log(JSON.stringify(sortedStudents, null, 4));
