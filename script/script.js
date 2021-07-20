function litreToGallon() {
  litres = document.getElementById('lit').value;
  if (litres == null || litres == '') {
    alert('Input Should not be empty');
    return false;
  }
  gallons = litres * 0.26417;
  if (litres == 0 || litres == 1) {
    document.getElementById(
      'resLit'
    ).innerHTML = `${litres} litre is ${gallons} gallons`;
  } else if (litres >= 2) {
    document.getElementById(
      'resLit'
    ).innerHTML = `${litres} litres is ${gallons} gallons`;
  } else if (litres < 0) {
    document.getElementById('resLit').innerHTML = `Enter a positive number`;
  }
}

function milesToKilometers(miles) {
  miles = document.getElementById('mil').value;
  if (miles == null || miles == '') {
    alert('Input Should not be empty');
    return false;
  }
  kiloM = miles * 1.6093;
  if (miles == 0 || miles == 1) {
    document.getElementById(
      'resMil'
    ).innerHTML = `${miles} mile is ${kiloM} Kilometers`;
  } else if (miles >= 2) {
    document.getElementById(
      'resMil'
    ).innerHTML = `${miles} miles is ${kiloM} Kilometers`;
  } else if (miles < 0) {
    document.getElementById('resMil').innerHTML = `Enter a positive number`;
  }
}

function metersToFeet(meters) {
  meters = document.getElementById('met').value;
  if (meters == null || meters == '') {
    alert('Input Should not be empty');
    return false;
  }
  ft = meters * 3.2808;
  feet = ft.toPrecision(6);
  if (meters == 0 || meters == 1) {
    document.getElementById(
      'resMet'
    ).innerHTML = `${meters} meter is ${feet} feet`;
  } else if (meters >= 2) {
    document.getElementById(
      'resMet'
    ).innerHTML = `${meters} meters are ${feet} feet`;
  } else if (meters < 0) {
    document.getElementById('resMet').innerHTML = `Enter a positive number`;
  }
}

function compoundIntrest() {
  let P = parseInt(document.getElementById('principal').value);
  let r = parseInt(document.getElementById('annIntrestRate').value);
  let n = parseInt(document.getElementById('noOfTimesComp').value);
  let t = parseInt(document.getElementById('timeForMonInvested').value);

  if (isNaN(P && r && n && t)) {
    alert('Input Should not be empty');
    return false;
  }

  let x = (r * 0.01) / n;
  let y = n * t;

  result = P * Math.pow(1 + x, y);
  final = result.toPrecision(6);
  document.getElementById(
    'inRes'
  ).innerHTML = `The investment balance after ${t} periods is ${final}`;
}
