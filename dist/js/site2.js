let questions = [
    {
      id: 1,
      question: "Data is stored digitally by your company",
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
      question: "Organization uses external cloud for data storage",
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
      question: "Data is widely accessible by an individual with proper credentials in your company (or external parties)",
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
      question: "Collected data is relevant to the product and line improvements which you are trying to make",
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
      question: "Data collected is of high quality, constantly maintained/organized and up to date",
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
      question: "A clear system is in place to segregate sensitive collected data from non-sensitive data",
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
      question: "There are security protocols in place for each data source in your organisation",
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
      id: 8,
      question: "Company decisions over product features or process upgrades are made in an evidence-based, data-driven manner",
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
  let points2 = 0;
  
  window.onload = function() {
    show(question_count);
  
  };
  
  function next() {
  
     
    // if the question is last then redirect to final page
    if (question_count == questions.length - 1) {
      //sessionStorage.setItem("time", time);
      //clearInterval(mytime);
      location.href = "quiz3.html";
    }
    console.log(question_count);
  
    let user_answer = document.querySelector("li.option.active").innerHTML;
    // check if the answer is right or wrong
      if (user_answer == questions[question_count].answer1) {
        points2 += 4;
        sessionStorage.setItem("points2", points2);
      } else if (user_answer == questions[question_count].answer2) {
        points2 += 3;
        sessionStorage.setItem("points2", points2);
      } else if (user_answer == questions[question_count].answer3) {
        points2 += 2;
        sessionStorage.setItem("points2", points2);
      }
      else if (user_answer == questions[question_count].answer4) {
        points2 += 1;
        sessionStorage.setItem("points2", points2);
      }
    console.log(points2);
  
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
  