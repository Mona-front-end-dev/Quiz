
const students = [
    {
        name:"Mona Khorasani",
        image:"images/mona-khorasani.jpg"
    },
    {
        name:"Marko Zdravkovski",
        image:"images/marko-zdravkovski.jpg"
    },
    {
        name:"Mehmet Yazgan",
        image:"images/mehmet-yazgan.jpg"
    },
    {
        name:"Mikaela Norrelokke",
        image:"images/mikaela-norrelokke.jpg"
    },
    {
        name:"Miranda Trang",
        image:"images/miranda-trang.jpg"
    },
    {
        name:"Oliver Kellgren",
        image:"images/oliver-kellgren.jpg"
    },
    {
        name:"Oskar Anderberg",
        image:"images/oskar-anderberg.jpg"
    },
    {
        name:"Pernilla Lundahl",
        image:"images/pernilla-lundahl.jpg"
    },
    {
        name:"Pucha Sayerz Olsen",
        image:"images/pucha-sayerz-olsen.jpg"
    },
    {
        name:"Saga Swahn",
        image:"images/saga-swahn.jpg"
    },
    {
        name:"Sara Mattisson",
        image:"images/sara-mattisson.jpg"
    },
    {
        name:"Sebastian Mineur",
        image:"images/sebastian-mineur.jpg"
    },
    {
        name:"Simon Bergstrand",
        image:"images/simon-bergstrand.jpg"
    },
    {
        name:"Susanne Eneroth",
        image:"images/susanne-eneroth.jpg"
    },
    {
        name:"Svitlana Rybakova",
        image:"images/svitlana-rybakova.jpg"
    }
];

const studentContainer = document.querySelector('.quiz-form #student-container');
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

const generateRandomAnswersFor = student => {
    
    const WrongRandomStudentName = () => {
        const index = Math.floor(Math.random() * students.length);
        return students[index].name;      
    };

    const userAnsweres = [student.name];

    while(userAnsweres.length < 4){
        const wrongAnswer = WrongRandomStudentName();

        if (wrongAnswer !== student.name)
            userAnsweres.push(wrongAnswer);
    }
    userAnsweres.sort();

    const htmlAnswers = userAnsweres.map(studentName => 
        `<div class="form-check my-2">
            <input type="radio" name="${student.name}" value="${studentName}">
            <lable class="form-checked-lable">${studentName}</lable>
        </div>`
    ).join("");

    return htmlAnswers;
}

const renderStudents = () => {
    let html = "";

    students.forEach(student => {
        const answers = generateRandomAnswersFor(student);

        html += ` 
        <div class="col-md-6 col-xl-4 mb-2">
            <div class="row border rounded m-0">
                <div class="col-sm-4 col-xl-12">
                    <img class="img-thumbnail" src="${student.image}" alt="Face of ${student.name}">
                </div>
                <div class="col-sm-8 col-xl-12">    
                    ${answers}
                </div>
            </div>
        </div>
            `;
    });
    var x = document.querySelectorAll
    studentContainer.innerHTML = html;
}

form.addEventListener('submit', e => {
    e.preventDefault();

    const filteredCorrectAnsweres = students.filter(student => {
        const chosenAnswere = form[student.name].value;
        return chosenAnswere === student.name;
    });

    result.querySelector('p').innerHTML = `You chose <span class="font-weight-bold text-success">${filteredCorrectAnsweres.length}</span> correct answer(s) vs<span class="font-weight-bold text-danger"> ${(students.length)-(filteredCorrectAnsweres.length)} </span>wrong answere(s) of <span class = "font-weight-bold">${(students.length)}</span> questions!`;
    result.classList.remove('d-none')
    scrollTo(0,0);
});

renderStudents();

