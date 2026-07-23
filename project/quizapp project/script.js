let Questions = [
    {
        questions: "Which keyword is used to declare a variable in JavaScript?",
        option: ["int",
            "var",
            "define",
            "string"
        ],
        answer: "var"
    },

    {
        questions: "Which symbol is used for single-line comments in JavaScript?",
        option: ["/*/",
            "/* */",
            "//",
            "#"
        ],
        answer: "//"
    },

    {
        questions: "Which method is used to display a popup alert?",
        option: ["print()",
            "console.log()",
            "alert()",
            "prompt()"
        ],
        answer: "alert()"
    },

    {
        questions: "Which loop is guaranteed to execute at least once?",
        option: ["for loop",
            "while loop",
            "do...while loop",
            "foreach loop"
        ],
        answer: "do...while loop"
    },
    
    {
        questions: "Which method adds an element to the end of an array?",
        option: ["pop()",
            "shift()",
            "push()",
            "unshift()"
        ],
        answer: "push()"
    },
    
    {
        questions: "Which function converts a string to an integer?",
        option: ["parseInt()",
            "NumberToInt()",
            "stringToInt()",
            "convertInt()"
        ],
        answer: "parseInt()"
    },

    {
        questions: "Which event occurs when a user clicks on an HTML element?",
        option: ["onhover",
            "onchange",
            "onclick",
            "onsubmit"
        ],
        answer: "onclick"
    },
    
    {
        questions: "Which operator is used for strict equality?",
        option: ["=",
            "==",
            "===",
            "!="
        ],
        answer: "==="
    },

    {
        questions: "What will typeof null return in JavaScript?",
        option: ["null",
            "object",
            "undefined",
            "string"
        ],
        answer: "object"
    },

    {
        questions: "Which method is used to write a message to the browser console?",
        option: ["document.write()",
            "alert()",
            "console.log()",
            "print()"
        ],
        answer: "console.log()"
    },

];

document.querySelector(".start-btn").onclick = function () {

    document.querySelector(".wrapper").classList.remove("none");
    document.querySelector(".start").style.display = "none";

    getQuestion(index);
    Timer();

};

let index = 0;
let score = 0;
let timer;
var skipQuestions = [];
let tempindex = 0;
let flage;
let correct = 0;
let wrong = 0;
let notAttempted = 0;
let userAnswers = [];

function Timer() {

    clearInterval(timer);

    let minit = 1;
    let second = 0;

    document.querySelectorAll(".timer span")[0].innerText = minit;
    document.querySelectorAll(".timer span")[1].innerText = "00";

    timer = setInterval(() => {

        if (second == 0) {

            if (minit == 0) {

                clearInterval(timer);

                skipQuestions.push(index);

                if (index < Questions.length - 1) {

                    index++;
                    getQuestion(index);
                    Timer();

                } else {

                    document.querySelector("#quiz-form").submit();

                }

                return;
            }

            minit--;
            second = 59;

        } else {

            second--;

        }

        document.querySelectorAll(".timer span")[0].innerText = minit;
        document.querySelectorAll(".timer span")[1].innerText = second < 10 ? "0" + second : second;

    }, 1000);

}
function getQuestion(index) {
    if (index >= Questions.length) {
        document.querySelector(".submit-btn").classList.add("none");
        return;
    }
    document.querySelector(".submit-btn").classList.remove("none");

    if (index == 0) {
        document.querySelector(".pre").disabled = true;
        document.querySelector(".pre").classList.add('no-curser');
    }
    else {
        document.querySelector(".pre").disabled = false;
        document.querySelector(".pre").classList.remove('no-curser');
    }

    if (index == Questions.length - 1) {
        document.querySelector(".next").disabled = true;
        document.querySelector(".next").classList.add('no-curser');
    }

    else {
        document.querySelector(".next").disabled = false;
        document.querySelector(".next").classList.remove('no-curser');
    }


    document.querySelector("form").innerHTML = `
    <section>
    <h2>${Questions[index].questions}</h2>
    <article>
    <aside><input type="radio" name = "ans" id = "id1" value = "${Questions[index].option[0]}"><label for="id1">${Questions[index].option[0]}</label></aside>
    <aside><input type="radio" name = "ans" id = "id2" value = "${Questions[index].option[1]}"><label for="id2">${Questions[index].option[1]}</label></aside>
    <aside><input type="radio" name = "ans" id = "id3" value = "${Questions[index].option[2]}"><label for="id3">${Questions[index].option[2]}</label></aside>
    <aside><input type="radio" name = "ans" id = "id4" value = "${Questions[index].option[3]}"><label for="id4">${Questions[index].option[3]}</label></aside>
    </article>
    </section>
    `;

    if (userAnswers[index]) {

        let inputs = document.querySelectorAll("input");

        for (let i = 0; i < inputs.length; i++) {

            if (inputs[i].value == userAnswers[index]) {
                inputs[i].checked = true;
            }

        }

    }
    document.querySelector(".submit-btn").classList.remove("none");

}

getQuestion(index);

document.querySelector(".next-btn").onclick = function () {

    for (let i = 0; i < Questions[index].option.length; i++) {
        if (document.querySelectorAll("input")[i].checked) {
            userAnswers[index] = document.querySelectorAll("input")[i].value;
            break;
        }
    }

    clearInterval(timer);
    getQuestion(++index);
    Timer();

};

document.querySelector(".previous-btn").onclick = function () {
    for (let i = 0; i < Questions[index].option.length; i++) {
        if (document.querySelectorAll("input")[i].checked) {
            userAnswers[index] = document.querySelectorAll("input")[i].value;
            break;
        }
    }

    clearInterval(timer);
    getQuestion(--index);
    Timer();
};
document.querySelector("#quiz-form").onsubmit = function (e) {
    e.preventDefault();


    let selected = false;

    for (let i = 0; i < Questions[index].option.length; i++) {

        if (document.querySelectorAll("input")[i].checked) {

            userAnswers[index] = document.querySelectorAll("input")[i].value;
            selected = true;
            break;
        }
    }

    if (!selected) {
        userAnswers[index] = undefined;
    }

    if (!selected) {
        alert("Please select an answer.");
        return;
    }

    clearInterval(timer);

    if (index == Questions.length - 1) {

        correct = 0;
        wrong = 0;
        notAttempted = 0;

        for (let i = 0; i < Questions.length; i++) {

            if (userAnswers[i] == undefined) {
                notAttempted++;
            }
            else if (userAnswers[i] == Questions[i].answer) {
                correct++;
            }
            else {
                wrong++;
            }
        }

        showResult();
        return;
    }
    index++;
    getQuestion(index);
    Timer();
};



function showResult() {
    document.querySelector(".wrapper").classList.add("none");
    document.querySelector(".footer").classList.remove("none");

    document.querySelector(".footer").innerHTML = `
    <h1>Quiz Result</h1>

    <h2>Total Questions : ${Questions.length}</h2>

    <h2>Correct Answers : ${correct}</h2>

    <h2>Wrong Answers : ${wrong}</h2>

    <h2>Not Attempted : ${notAttempted}</h2>

    <h2>Final Score : ${correct} / ${Questions.length}</h2>
`;
}