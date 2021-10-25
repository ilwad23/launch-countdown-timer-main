let date = Date();
let currentDate = new Date(date);
let goalDate = new Date(date);
goalDate.setDate(goalDate.getDate() + 9);
countDown = (goalDate.getTime() - currentDate.getTime()) / 1000 - 3600;
setInterval(() => {
  console.log(SecsToDitialTime(countDown));
  countDown--;
}, 1000);

function convertSecs(seconds, n) {
  converted = seconds && Math.floor(seconds / n);
  seconds -= converted * n;
  return [converted, seconds];
}
function SecsToDitialTime(seconds) {
  let res = [86400, 3600, 60].reduce((time, v) => {
    let unit = convertSecs(seconds, v)[0];
    seconds = convertSecs(seconds, v)[1];
    if (unit < 10) unit = `0${unit}`;
    return [...time, unit];
  }, []);
  if (seconds < 10) seconds = `0${seconds}`;
  res.push(seconds);
  return res;
}
