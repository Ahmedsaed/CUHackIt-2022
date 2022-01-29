var questions_body = document.getElementById("questions_body");
var welcome_message = document.getElementById("welcome_message");
var question = document.getElementById("question");
var result_screen = document.getElementById("result-screen");
var result_value = document.getElementById("result-value");

var progress_value = 0;

const questions = [
    // COMMON SYMPTOMS
    "Do you have a fever?",
    "Do you have a cough?",
    "Are you feeling tired?",
    "Do you have a loss of taste or smell?",

    // LESS COMMON
    "Do you have a sore throat?",
    "Do you have a headache?",
    "Are you feeling any aches or pain?",
    "Do you have diarrhea?",

    // Serious symptoms
    "Are you suffering from difficulty breathing or shortness of breath?",
    "Are you suffering from loss of speech or mobility?",
    "Are you suffering from chest pain?"
]


function displaySurvey()
{
    questions_body.hidden = false;
    welcome_message.hidden = true;
}

function nextQuestion(value)
{
    if (progress_value < questions.length - 1)
    {
        progress_value++;
        question.innerHTML = questions[progress_value];
    }
    else
    {
        DisplayResult(true)
    }
}

function DisplayResult(boolValue)
{
    questions_body.hidden = true;
    result_screen.hidden = false;
    if (boolValue)
    {
        result_value.innerHTML = "You have corona";
        result_value.style = "color: red";
    }
    else 
    {
        result_value.innerHTML = "You have good";
    }
}

nextQuestion(0);