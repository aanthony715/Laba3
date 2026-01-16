const fs = require('fs');
const log = console.log;

// Функция для получения случайного целого числа
const getRndInt = (max) => Math.floor(Math.random() * max);

// Функция для получения русского алфавита
const getAlphabet = (start = 1072) => Array(32)
    .fill('')
    .map((_, i) => String.fromCharCode(start + i))
    .join('');

// Функция для генерации фамилии
const getLastName = () => {
    const alph = getAlphabet();
    const len = 3 + getRndInt(10); // от 3 до 12 символов
    return alph[getRndInt(alph.length)].toUpperCase() +
        Array(len - 1)
            .fill('')
            .map(() => alph[getRndInt(alph.length)])
            .join('');
};

// Функция для генерации среднего балла
const getAvg = () => parseFloat((2 + getRndInt(31) / 10).toFixed(1)); // от 2.0 до 5.0 с точностью до 1 знака

// Функция для создания объекта студента
const getStudent = (id) => ({
    id: id,
    lastName: getLastName(),
    avg: getAvg()
});

// Основная функция для генерации массива студентов
const generateStudents = (amount = 10) => Array
    .from({ length: amount }, (_, i) => getStudent(i + 1));

// Генерация массива студентов
const students = generateStudents(5); // можно изменить количество студентов

// Вывод в консоль
log('Сгенерированный массив студентов:');
log(JSON.stringify(students, null, 4));

// Сохранение в файл
const jsonString = JSON.stringify(students, null, 4);
fs.writeFileSync('./student.json', jsonString, 'utf-8');
log('\nДанные сохранены в файл student.json');

// Дополнительные примеры использования методов массива (для демонстрации)
log('\n--- Дополнительные операции с массивом ---');

// Фильтрация студентов с avg >= 4.0
const goodStudents = students.filter(student => student.avg >= 4.0);
log(`Студенты с avg >= 4.0: ${JSON.stringify(goodStudents, null, 2)}`);

// Поиск студента с максимальным avg
const bestStudent = students.reduce((max, student) =>
    student.avg > max.avg ? student : max, students[0]);
log(`Лучший студент: ${bestStudent.lastName} (avg: ${bestStudent.avg})`);

// Сортировка по фамилии
const sortedByLastName = [...students].sort((a, b) =>
    a.lastName.localeCompare(b.lastName));
log('Студенты отсортированные по фамилии:');
log(JSON.stringify(sortedByLastName, null, 2));

// Проверка условий
const hasExcellentStudents = students.some(student => student.avg >= 4.5);
const allHaveGoodAvg = students.every(student => student.avg >= 2.0);

log(`Есть ли отличники (avg >= 4.5): ${hasExcellentStudents}`);
log(`Все ли студенты имеют avg >= 2.0: ${allHaveGoodAvg}`);