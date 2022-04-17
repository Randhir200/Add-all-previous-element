//sample-output - 1 3 6 10 15
var n = 5;
var arr = [1, 2, 3, 4, 5];
var sum = 0;
var str = '';
for (var i = 0; i < n; i++) {
  sum += arr[i];
  str += sum + ' ';
}
console.log(str);
