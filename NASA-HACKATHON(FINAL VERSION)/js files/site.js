let questions = [{
        id: 1,
        question: "What is a cause of air pollution?",
        answer: "Burning fossil fuels",
        options: [
            "Litter found on the side of the road",
            "Water used as a coolant by power plant",
            "burning fossil fuels",
            "None of these"
        ]
    },
    {
        id: 2,
        question: "What is a main cause of water pollution?",
        answer: "marine dumping",
        options: [
            "marine dumping",
            "illegal dumping in natural habitats",
            "use of water as a coolant for power-plants",
            "None of these"
        ]
    },
    {
        id: 3,
        question: "Main cause(s) of deforestation is(are):",
        answer: "All of the above",
        options: [
            "Agricultural croplands",
            "Urbanization ",
            "Mining activities",
            "All of the above"
        ]
    },
    {
        id: 4,
        question: "Which green-house gas has the highest contribution to Global warming?",
        answer: "CO2 (Carbon-di-oxide)",
        options: [
            "CH4 (Methane)",
            "CO2 (Carbon-di-oxide)",
            "CFCs (Chloro-Fluro-Carbon)",
            "None of these"
        ]
    },
    {
        id: 5,
        question: "Causes of loss of biodiversity",
        answer: " All of the above",
        options: [
            "Climate change",
            " Deforestation",
            "Over-exploitation",
            " All of the above"
        ]
    }


];

let question_count = 0;
let points = 0;

window.onload = function() {
    show(question_count);

};

function next() {


    // if the question is last then redirect to final page
    if (question_count == questions.length - 1) {

        location.href = "end.html";
    }
    console.log(question_count);

    let user_answer = document.querySelector("li.option.active").innerHTML;
    // check if the answer is right or wrong
    if (user_answer == questions[question_count].answer) {
        points += 10;
        sessionStorage.setItem("points", points);
    }
    console.log(points);

    question_count++;
    show(question_count);
}

function show(count) {
    let question = document.getElementById("questions");
    let [first, second, third, fourth] = questions[count].options;

    question.innerHTML = `
<h2>Q${count + 1}. ${questions[count].question}</h2>
<ul class="option_group">
<li class="option">${first}</li>
<li class="option">${second}</li>
<li class="option">${third}</li>
<li class="option">${fourth}</li>
</ul> 
`;
    toggleActive();
}

function toggleActive() {
    let option = document.querySelectorAll("li.option");
    for (let i = 0; i < option.length; i++) {
        option[i].onclick = function() {
            for (let i = 0; i < option.length; i++) {
                if (option[i].classList.contains("active")) {
                    option[i].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        };
    }
}