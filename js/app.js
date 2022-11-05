function convertOptions() {
  let convert = document.querySelector("#convertSelect").value;
  let num = document.querySelector("#inputTemp").value;

  switch (convert) {
    case "celsiusToFahrenheit":
      inputUnit = "°C";
      outputUnit = " °F";
      break;
    case "fahrenheitToCelsius":
      inputUnit = " °F";
      outputUnit = " °C";
      break;
    case "celsiusToKelvin":
      inputUnit = " °C";
      outputUnit = " °K";
      break;
    case "kelvinToCelsius":
      inputUnit = " °K";
      outputUnit = " °C";
      break;
    case "celsiusToRankine":
      inputUnit = " °C";
      outputUnit = " °R";
      break;
    case "rankineToCelsius":
      inputUnit = " °R";
      outputUnit = " °C";
      break;
    case "fahrenheitToKelvin":
      inputUnit = " °F";
      outputUnit = " °K";
      break;
    case "kelvinToRankine":
      inputUnit = " °K";
      outputUnit = " °R";
      break;
    case "fahrenheitToRankine":
      inputUnit = " °F";
      outputUnit = " °R";
      break;
    default:
      inputUnit = " °C";
      outputUnit = " °F";
  }

  document.querySelector("#inputUnit").innerHTML = inputUnit;
  document.querySelector("#outputUnit").innerHTML = outputUnit;
}

function convertTemperature() {
  let num = document.querySelector("#inputTemp").value;
  let convert = document.querySelector("#convertSelect").value;
  //celsius to fahrenheit
  const c1 = 9 / 5;
  const c2 = 5 / 9;
  const c3 = 32;
  const ops1 = num * c1 + c3;
  const ans1 = ops1.toFixed(2);

  //fahrenheit to celsius
  const ops2 = (num - c3) * c2;
  const ans2 = ops2.toFixed(2);

  //celsius to kelvin
  const c4 = 273.15;
  const ops3 = parseFloat(num) + c4;
  const ans3 = ops3.toFixed(2);

  //kelvin to celsius
  const ops4 = num - c4;
  const ans4 = ops4.toFixed(2);

  //celsius to rankine
  const c5 = 491.67;
  const ops5 = num * c1 + c5;
  const ans5 = ops5.toFixed(2);

  //rankine to celsius
  const ops6 = (num - c5) * c2;
  const ans6 = ops6.toFixed(2);

  //fahrenheit to kelvin
  const ops7 = (num - c3) * c2 + c4;
  const ans7 = ops7.toFixed(2);

  //kelvin to rankine
  const ops8 = num * c1;
  const ans8 = ops8.toFixed(2);

  //fahrenheit to rankine
  const c6 = 459.67;
  const ops9 = parseFloat(num) + c6;
  const ans9 = ops9.toFixed(2);

  //kelvin to fahrenheit
  const ops10 = c1 * (num - c4) + c3;
  const ans10 = ops10.toFixed(2);

  //rankine to fahrenheit
  const ops11 = num - c6;
  const ans11 = ops11.toFixed(2);

  //rankine to kelvin
  const ops12 = num * c2;
  const ans12 = ops12.toFixed(2);

  switch (convert) {
    case "celsiusToFahrenheit":
      ansfinal = ans1;
      break;
    case "fahrenheitToCelsius":
      ansfinal = ans2;
      break;
    case "celsiusToKelvin":
      ansfinal = ans3;
      break;
    case "kelvinToCelsius":
      ansfinal = ans4;
      break;
    case "celsiusToRankine":
      ansfinal = ans5;
      break;
    case "rankineToCelsius":
      ansfinal = ans6;
      break;
    case "fahrenheitToKelvin":
      ansfinal = ans7;
      break;
    case "kelvinToRankine":
      ansfinal = ans8;
      break;
    case "fahrenheitToRankine":
      ansfinal = ans9;
      break;
    case "kelvinToFahrenheit":
      ansfinal = ans10;
      break;
    case "rankineToFahrenheit":
      ansfinal = ans11;
      break;
    case "rankineToKelvin":
      ansfinal = ans12;
      break;
    default:
      ansfinal = "Input valid number";
  }

  //  document.querySelector("#result").innerHTML = ans1;
  document.querySelector("#result").innerHTML = ansfinal;
}
