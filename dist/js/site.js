let questions = [
  {
    id: 1,
    question: "Your company has a history of innovation in the past",
    answer1: "Strongly Agree",
    answer2: "Agree",
    answer3: "Disagree",
    answer4: "Strongly Disagree",
    options: [
      "Strongly Agree",
      "Agree",
      "Disagree",
      "Strongly Disagree"
    ]
  },
  {
    id: 2,
    question: "Digital transformation is a priority for your organization",
    answer1: "Strongly Agree",
    answer2: "Agree",
    answer3: "Disagree",
    answer4: "Strongly Disagree",
    options: [
      "Strongly Agree",
      "Agree",
      "Disagree",
      "Strongly Disagree"
    ]
  },
  {
    id: 3,
    question: "Management has a high level of understanding and capabilities when it comes to data",
    answer1: "Strongly Agree",
    answer2: "Agree",
    answer3: "Disagree",
    answer4: "Strongly Disagree",
    options: [
      "Strongly Agree",
      "Agree",
      "Disagree",
      "Strongly Disagree"
    ]
  },
  {
    id: 4,
    question: "Sufficient budget has been set aside for AI/Data Analytics project",
    answer1: "Strongly Agree",
    answer2: "Agree",
    answer3: "Disagree",
    answer4: "Strongly Disagree",
    options: [
      "Strongly Agree",
      "Agree",
      "Disagree",
      "Strongly Disagree"
    ]
  },
  {
    id: 5,
    question: "Leadership is committed to the success of Digital Transformation/AI/Data Analytics projects",
    answer1: "Strongly Agree",
    answer2: "Agree",
    answer3: "Disagree",
    answer4: "Strongly Disagree",
    options: [
      "Strongly Agree",
      "Agree",
      "Disagree",
      "Strongly Disagree"
    ]
  },
  {
    id: 6,
    question: "There is on-site personnel that are committed to championing Digital Transformation",
    answer1: "Strongly Agree",
    answer2: "Agree",
    answer3: "Disagree",
    answer4: "Strongly Disagree",
    options: [
      "Strongly Agree",
      "Agree",
      "Disagree",
      "Strongly Disagree"
    ]
  },
  {
    id: 7,
    question: "Your company has a good change management process implemented to ensure a smooth transition for any change in processes",
    answer1: "Strongly Agree",
    answer2: "Agree",
    answer3: "Disagree",
    answer4: "Strongly Disagree",
    options: [
      "Strongly Agree",
      "Agree",
      "Disagree",
      "Strongly Disagree"
    ]
  }
];

let question_count = 0;
let points = 0;

window.onload = function() {
  show(question_count);

};

// const progressText = document.getElementById("progressText");
// const progressBarFull = document.getElementById("progressBarFull");

function next() {

   
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    //sessionStorage.setItem("time", time);
    //clearInterval(mytime);
    location.href = "quiz1.html";
  }
  console.log(question_count);

  let user_answer = document.querySelector("li.option.active").innerHTML;
  // check if the answer is right or wrong
    if (user_answer == questions[question_count].answer1) {
      points += 4;
      sessionStorage.setItem("points", points);
    } else if (user_answer == questions[question_count].answer2) {
      points += 3;
      sessionStorage.setItem("points", points);
    } else if (user_answer == questions[question_count].answer3) {
      points += 2;
      sessionStorage.setItem("points", points);
    }
    else if (user_answer == questions[question_count].answer4) {
      points += 1;
      sessionStorage.setItem("points", points);
    }
  console.log(points);

  question_count++;
  show(question_count);
}



bar.animate(1.0);  // Number from 0.0 to 1.0

// progressText.innerText = `Question ${question_count}/${MAX_QUESTIONS}`;
// //Update the progress bar
// progressBarFull.style.width = `${(question_count/ MAX_QUESTIONS) * 100}%`;

function show(count) {
  let question = document.getElementById("questions");
  let [answer1, answer2, answer3, answer4] = questions[count].options;

  question.innerHTML = `
  <h2>Q${count + 1}. ${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${answer1}</li>
  <li class="option">${answer2}</li>
  <li class="option">${answer3}</li>
  <li class="option">${answer4}</li>
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
