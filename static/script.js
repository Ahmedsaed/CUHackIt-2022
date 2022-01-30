var questions_body = document.getElementById("questions_body");
var welcome_message = document.getElementById("welcome_message");
var question = document.getElementById("question");
var result_screen = document.getElementById("result-screen");
var progress_bar = document.getElementById("progress_bar");
var modal_button = document.getElementById("modal_button");
var warning_value = document.getElementById("warning_value");

var progress_value = 0;
var result = 0

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
    
    progress_bar.style = "width: " + (((progress_value)/(questions.length)) *100) + "%";
    progress_bar.innerHTML = parseInt((((progress_value)/(questions.length)) *100))  + "%";
    
    if (value == 1)
    {
        result = parseInt(progress_value / 4.1) + 1;
    }

    if (progress_value < questions.length)
    {
        question.innerHTML = questions[progress_value];
        progress_value++;
    }
    else
    {
        progress_value++;
        DisplayResult(result)
    }

}

function DisplayResult(result)
{
    questions_body.hidden = true;
    result_screen.hidden = false;
    modal_button.click();
    if (result == 0)
    {
        warning_value.innerHTML = "Your condition doesn't seem serious concerning the Coronavirus infection. You have mild symptoms. If you are healthy and young you should be able to manage your symptoms at home. However, if these symptoms are growing on you or you are not feeling right, contact a doctor, please."
    }
    else if (result == 1)
    {
        warning_value.innerHTML = "Your condition is worrying concerning the Coronavirus infection. Contact a doctor as soon as possible.";
    }
    else
    {
        warning_value.innerHTML = "Your condition is dangerous! Please contact a doctor or a medical facility immediately!";
    }
}

nextQuestion(0);

var death = document.getElementById("death");
var hospitalizedCurrently = document.getElementById("hospitalizedCurrently");
var positive = document.getElementById("positive");
var recovered = document.getElementById("recovered");

fetch("https://api.covidtracking.com/v1/us/current.json")
  .then(response => {
    // indicates whether the response is successful (status code 200-299) or not
    if (!response.ok) {
      throw new Error(`Request failed with status ${reponse.status}`)
    }
    return response.json()
  })
  .then(data => {
      console.log(data[0])
    updateValues(data[0])
  })
  .catch(error => console.log(error))

function updateValues(data)
{
    death.innerHTML = "Total Death(s): " + data.death;
    hospitalizedCurrently.innerHTML = "Hospitalized Currently: " + data.hospitalizedCurrently;
    positive.innerHTML = "Positive Case(s): " + data.positive;
    recovered.innerHTML = "Recovered Case(s): " + data.recovered;
}