function getLetterGrade() {
let score = document.getElementById("inputNumber").value
     if (score >= 90) {
         document.getElementById("status").innerHTML = 'A'
      }else 
      if (score >= 80) {
        document.getElementById("status").innerHTML = 'B'
      }else
      if (score >= 70) {
        document.getElementById("status").innerHTML = 'C'
      }else
      if (score >= 60) {
        document.getElementById("status").innerHTML = 'D'
      }
      else {
        document.getElementById("status").innerHTML = 'F'
      }
    }