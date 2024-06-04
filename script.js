// Units
//1 meter = 3.28084 feet | 1 feet = 0.3048 meter
// 1 litter = 0.264172 gallon | 1 gallon = 3.78541 litter
// 1 kilogram = 2.20462 pound | 1 pound = 0.453592 kilogram

const numberinputEl = document.getElementById("number");
const resultContainerEl = document.getElementById("result-container");
const convertBtn = document.getElementById("convert-btn");

// Data
const data = [
  {
    name: "Length",
    unit: "(Meter/Feet)",
    ratio: 3.28084,
    reverseRatio: 0.3048,
    units: ["meters", "feet"],
    result: [],
  },
  {
    name: "Volume",
    unit: "Litter/Gallon",
    ratio: 0.264172,
    reverseRatio: 3.78541,
    units: ["litters", "gallons"],
    result: [],
  },
  {
    name: "Weight",
    unit: "Kilogram/Pound",
    ratio: 2.20462,
    reverseRatio: 0.453592,
    units: ["kilos", "pounds"],
    result: [],
  },
];
let number;
function convert(number) {
  // for calculating the result
  for (let i = 0; i < data.length; i++) {
    let number1, number2;
    number1 = number * data[i].ratio;
    data[i].result.push(number1.toFixed(2));
    number2 = number * data[i].reverseRatio;
    data[i].result.push(number2.toFixed(2));
  }
}
function render(data, number) {
  //for rendering the result
  for (let i = 0; i < data.length; i++) {
    resultContainerEl.innerHTML += `
      <div class="result">
          <h2 class="title">${data[i].name} ${data[i].unit}</h2>
          <p>${number} ${data[i].units[0]} = ${data[i].result[0]} ${data[i].units[1]} | ${number} ${data[i].units[1]} = ${data[i].result[1]} ${data[i].units[1]}</p>
      </div>`;
    data[i].result = [];
  }
}
convertBtn.addEventListener("click", function () {
  number = numberinputEl.value;
  numberinputEl.value = "";
  resultContainerEl.innerHTML = "";
  convert(number);
  render(data, number);
});

//enter key event
numberinputEl.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    number = numberinputEl.value;
    numberinputEl.value = "";
    resultContainerEl.innerHTML = "";
    convert(number);
    render(data, number);
  }
});
