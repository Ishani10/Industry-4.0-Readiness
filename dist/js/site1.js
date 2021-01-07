let questions = [
    {
      id: 1,
      question: "There are experts who understand which sensors and machines to connect to and what data can be extracted, ready to assist",
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
      question: "Solution providers have access to IT engineers for connecting sensor networks and data storage",
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
      question: "Organization has data scientists/engineers/analysts on hand that can interpret and utilize data analytics tools",
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
  let points1 = 0;
  
  window.onload = function() {
    show(question_count);
  
  };
  
  function next() {
  
     
    // if the question is last then redirect to final page
    if (question_count == questions.length - 1) {
      //sessionStorage.setItem("time", time);
      //clearInterval(mytime);
      location.href = "quiz2.html";
    }
    console.log(question_count);
  
    let user_answer = document.querySelector("li.option.active").innerHTML;
    // check if the answer is right or wrong
      if (user_answer == questions[question_count].answer1) {
        points1 += 4;
        sessionStorage.setItem("points1", points1);
      } else if (user_answer == questions[question_count].answer2) {
        points1 += 3;
        sessionStorage.setItem("points1", points1);
      } else if (user_answer == questions[question_count].answer3) {
        points1 += 2;
        sessionStorage.setItem("points1", points1);
      }
      else if (user_answer == questions[question_count].answer4) {
        points1 += 1;
        sessionStorage.setItem("points1", points1);
      }
    console.log(points1);
  
    question_count++;
    show(question_count);
  }
  
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
  