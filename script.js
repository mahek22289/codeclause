function convert() {
    var inputValue = parseFloat(document.getElementById("inputValue").value);
    var fromUnit = document.getElementById("fromUnit").value;
    var toUnit = document.getElementById("toUnit").value;
    var result = 0;
  
    // Conversion formulas
    if (fromUnit === "m" && toUnit === "km") {
      result = inputValue / 1000;
    } else if (fromUnit === "km" && toUnit === "m") {
      result = inputValue * 1000;
    } else if (fromUnit === "ft" && toUnit === "m") {
      result = inputValue / 3.281;
    } else if (fromUnit === "m" && toUnit === "ft") {
      result = inputValue * 3.281;
    } else {
      result = inputValue;
    }
  
    document.getElementById("result").innerHTML = result.toFixed(2);
  }
  