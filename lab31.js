const fs = require('fs');
const log = console.log;

const getRndInt = (max) => Math.floor(Math.random() * max);

const getAlphabet = (start = 1072) => Array(32)
    .fill('')
    .map((_, i) => String.fromCharCode(start + i))
    .join('');

const getLastName = () => {
    const alph = getAlphabet();
    const len = 3 + getRndInt(10); /
    return alph[getRndInt(alph.length)].toUpperCase() +
        Array(len - 1)
            .fill('')
            .map(() => alph[getRndInt(alph.length)])
            .join('');
};

const getAvg = () => parseFloat((2 + getRndInt(31) / 10).toFixed(1)); 


const getStudent = (id) => ({
    id: id,
    lastName: getLastName(),
    avg: getAvg()
});


const generateStudents = (amount = 10) => Array
    .from({ length: amount }, (_, i) => getStudent(i + 1));

const students = generateStudents(5); 


log('Сгенерированный массив студентов:');
log(JSON.stringify(students, null, 4));


const jsonString = JSON.stringify(students, null, 4);
fs.writeFileSync('./student.json', jsonString, 'utf-8');
log('\nДанные сохранены в файл student.json');


log('\n--- Дополнительные операции с массивом ---');


const goodStudents = students.filter(student => student.avg >= 4.0);
log(`Студенты с avg >= 4.0: ${JSON.stringify(goodStudents, null, 2)}`);


const bestStudent = students.reduce((max, student) =>
    student.avg > max.avg ? student : max, students[0]);
log(`Лучший студент: ${bestStudent.lastName} (avg: ${bestStudent.avg})`);


const sortedByLastName = [...students].sort((a, b) =>
    a.lastName.localeCompare(b.lastName));
log('Студенты отсортированные по фамилии:');
log(JSON.stringify(sortedByLastName, null, 2));


const hasExcellentStudents = students.some(student => student.avg >= 4.5);
const allHaveGoodAvg = students.every(student => student.avg >= 2.0);

log(`Есть ли отличники (avg >= 4.5): ${hasExcellentStudents}`);
log(`Все ли студенты имеют avg >= 2.0: ${allHaveGoodAvg}`);
