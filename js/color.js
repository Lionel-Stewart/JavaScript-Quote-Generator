function getRandomColor() {
  const random = [];
  for (let i = 0; i < 3; i++) {
    random.push(Math.floor(Math.random() * 256));
  }
  return random;
}

function formatColor(arr) {
  return "rgb(" + arr.join(", ") + ")";
}

function applyColor(color) {
  $("body").css("background-color", color);
}

function changeTextColor(arr) {
  let isLight = arr.reduce((a, b) => a + b) < 127 * 3;

  if (isLight) {
    $("body").css("color", "white");
  } else {
    $("body").css("color", "black");
  }
}

function changeColor() {
  let arr = getRandomColor();
  let color = formatColor(arr);
  applyColor(color);
  changeTextColor(arr);
}