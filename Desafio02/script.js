class Student {
    constructor(name, grade1, grade2, grade3,grade4,grade5) {
        this.name = name;
        this.grade1 = grade1;
        this.grade2 = grade2;
        this.grade3 = grade3;
        this.grade4 = grade4;
        this.grade5 = grade5;
    }
}
const listOfStudents = [];

const student1 = listOfStudents.push(new Student("Fernando", 5, 6, 8, 8, 9));
const student2 = listOfStudents.push(new Student("Luis", 7, 8, 6, 8, 6));
const student3 = listOfStudents.push(new Student("Caio", 9, 9, 8, 10, 9));
const student4 = listOfStudents.push(new Student("Felipe", 5, 5, 4, 3, 4));
const student5 = listOfStudents.push(new Student("Ana", 5, 6, 5, 7, 9));

for (const student of listOfStudents) {
    let sum = 0;
    for (const property in student) { 
        if (typeof(student[property]) === "number"){sum += student[property]}
    }
    const average = sum/(Object.keys(student).length-1);

    average >= 7 ?
    alert(`    Parabéns, ${student.name}! Você foi aprovado(a) no concurso.
    Sua média foi de ${average}.
    `) : 
    alert(`    Não foi dessa vez, ${student.name}. Estude mais e tente novamente.
    Sua média foi de ${average}.`)
}