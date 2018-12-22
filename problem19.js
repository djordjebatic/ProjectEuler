function solution1() {

  var n = 0
  var dow =  1 + (1901-1900)*365%7;
  var months = [31, 0, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  for (var y = 1901; y <= 2000; y++) {

    months[1] = 28 + (y % 4 === 0 && (y % 100 !== 0 || y % 400 === 0));

    for (var month of months) {
      dow+= month % 7;
      if (dow % 7 === 0) {
        n++;
      }
    }
  }
  return n;
}
console.log(solution1());

function solution2() {
  var n = 0;
  for (var y = 1901; y <= 2000; y++) {
    for (var m = 0; m < 12; m++) {
      if (new Date(y, m, 1).getDay() === 0) {
        n++;
      }
    }
  }
  return n;
}
console.log(solution2());

//resenje moguce i  koriscenjem Zeller's congruence algoritma (za gregorijanski k.)
