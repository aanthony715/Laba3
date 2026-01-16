const fs = require('fs');
const log = console.log;

// Чтение и сортировка по двум параметрам
const sortedStudents = require('./student.json')
    .sort((a, b) => {
        // Сначала сравниваем по рейтингу (по убыванию)
        if (b.avg !== a.avg) {
            return b.avg - a.avg;
        }
        // Если рейтинг одинаковый - по фамилии (по возрастанию)
        return a.lastName.localeCompare(b.lastName);
    });

// Вывод результата
log("=== ОТСОРТИРОВАННЫЙ СПИСКОК СТУДЕНТОВ ===");
log(JSON.stringify(sortedStudents, null, 4));