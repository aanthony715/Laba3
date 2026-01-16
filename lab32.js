const fs = require('fs');
const log = console.log;

require('./student.json')
    .sort((a, b) => b.avg - a.avg)
    .slice(0, 5)
    .forEach((student, index) =>
        log(`${index + 1}. ${student.lastName} - ${student.avg}`)
    );
