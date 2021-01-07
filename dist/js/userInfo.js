let user_name = sessionStorage.getItem("name");
let user_points = sessionStorage.getItem("points");
let user_points1 = sessionStorage.getItem("points1");
let user_points2 = sessionStorage.getItem("points2");
let user_points3 = sessionStorage.getItem("points3");
// let total_percent = total/92 *100;
document.querySelector("span.name").innerHTML = user_name;
document.querySelector("span.points").innerHTML = user_points;
document.querySelector("span.points1").innerHTML = user_points1;
document.querySelector("span.points2").innerHTML = user_points2;
document.querySelector("span.points3").innerHTML = user_points3;
// document.querySelector("span.total_percent").innerHTML = total_percent;

  var data = [{
    type: "pie",
    values: [user_points, user_points1, user_points2, user_points3],
    labels: ["Leadership and Budgeting Abilities", "Organisation Technical Skills", 
    "Data Treatment", "Machine Capabilities"],
    'marker': {
      'colors': [
        'rgb(255, 236, 33)',
        'rgb(149, 82, 234)',
        'rgb(55, 138, 255)',
        'rgb(147, 240, 59)' 
      ]
    },
    textinfo: "",
    textposition: "outside",
    automargin: true
  }]
  
  var layout = {
    title: "Overall Analysis",
    font: {
      family: 'Montserrat',
      size: 12,
      color: '#ffffff'
    },
    height: 500,
    width: 600,
    showlegend: true,
    paper_bgcolor: "rgba(0,0,0,0)"
    }
  
  Plotly.newPlot('myDiv', data, layout)
