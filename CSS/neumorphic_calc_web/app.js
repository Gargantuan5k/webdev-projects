let themeCheckbox = document.querySelector('input[name="theme"]');
let themeIcon = document.querySelector('i[class="fas fa-moon"]');

themeCheckbox.addEventListener("change", function () {
  if (this.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    themeIcon.setAttribute("class", "fas fa-sun");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    themeIcon.setAttribute("class", "fas fa-moon");
  }
});

function getHistory() {
  return document.querySelector(".upper-value").innerHTML;
}

function printHistory(history) {
  document.querySelector(".upper-value").innerHTML = history;
}

function getOutput() {
  return document.querySelector(".lower-value").innerHTML;
}

function printOutput(output) {
  if (output == "") {
    document.querySelector(".lower-value").innerHTML = output;
  } else {
    document.querySelector(".lower-value").innerHTML = getFormattedNumber(output);
  }
}

function getFormattedNumber(num) {
  if (num == "-") {
    return "";
  }

  let n = Number(num);
  
  return n;
}

let operator = document.getElementsByClassName("operator");

for (let i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function () {
    if (this.id === "clear") {
      printHistory("");
      printOutput("");
    } else if (this.id == "backspace") {
      let output = getOutput().toString();

      if (output) {
        output = output.substr(0, output.length - 1);
        printOutput(output);
      }
    } else {
      let output = getOutput();
      let history = getHistory();

      if (output == "" && history != "") {
        if (isNaN(history[history.length - 1])) {
          history = history.substr(0, history.length - 1);
        }
      }
      if (output != "" || history != "") {
        history += output;
        if (this.id == "=") {
          let result = eval(history);
          printOutput(result);
          printHistory("");
        } else if (this.id == "%") {
          let n = getOutput();
          let percent = n / 100;
          printOutput(percent.toFixed(4));
        } else {
          history += this.id;
          printHistory(history);
          printOutput("");
        }
      }
    }
  });
}

let number = document.getElementsByClassName("number");

for (let i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function () {
    let output = getOutput();

    if (output != NaN) {
      output += this.id;
      printOutput(output);
    }
  });
}
