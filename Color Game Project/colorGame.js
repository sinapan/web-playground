let numOfSquares = 6;
let colors = generateRandomColors(6);
const squares = document.querySelectorAll('.square');
let pickedColor = pickColor(colors);
const colorDisplay = document.getElementById('colorDisplay');
const messageDisplay = document.querySelector('#message');
const titleSegment = document.querySelector('#titleSegment');
const resetBtn = document.querySelector('#resetBtn');
const easyBtn = document.querySelector('#easyBtn');
const mediumBtn = document.querySelector('#mediumBtn');
const hardBtn = document.querySelector('#hardBtn');

easyBtn.addEventListener('click', function() {
  easyBtn.classList.add('btnSelected');
  mediumBtn.classList.remove('btnSelected');
  hardBtn.classList.remove('btnSelected');
  // generate new colors
  numOfSquares = 3;
  colors = generateRandomColors(numOfSquares);
  // pick a new color
  pickedColor = pickColor(colors);
  colorDisplay.textContent = pickedColor;
  // set background color for each square
  for (let i=0; i<squares.length; i++) {
    if (colors[i]) {
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = 'none';
    }
  }
});

mediumBtn.addEventListener('click', function() {
  easyBtn.classList.remove('btnSelected');
  mediumBtn.classList.add('btnSelected');
  hardBtn.classList.remove('btnSelected');
  // generate new colors
  numOfSquares = 6;
  colors = generateRandomColors(numOfSquares);
  // pick a new color
  pickedColor = pickColor(colors);
  colorDisplay.textContent = pickedColor;
  // set background color for each square
  for (let i=0; i<squares.length; i++) {
    if (colors[i]) {
      squares[i].style.background = colors[i];
      squares[i].style.display = 'block';
    } else {
      squares[i].style.display = 'none';
    }
  }
});

hardBtn.addEventListener('click', function() {
  easyBtn.classList.remove('btnSelected');
  mediumBtn.classList.remove('btnSelected');
  hardBtn.classList.add('btnSelected');
  easyBtn.classList.remove('btnSelected');
  mediumBtn.classList.add('btnSelected');
  hardBtn.classList.remove('btnSelected');
  // generate new colors
  numOfSquares = 9;
  colors = generateRandomColors(numOfSquares);
  // pick a new color
  pickedColor = pickColor(colors);
  colorDisplay.textContent = pickedColor;
  // set background color for each square
  for (let i=0; i<squares.length; i++) {
    if (colors[i]) {
      squares[i].style.background = colors[i];
      squares[i].style.display = 'block';
    } else {
      squares[i].style.display = 'none';
    }
  }
});

resetBtn.addEventListener('click', function() {
  // generate new colors
  colors = generateRandomColors(6);
  // pick a new color
  pickedColor = pickColor(colors);
  colorDisplay.textContent = pickedColor;
  // set background color for each square
  for (let i=0; i<squares.length; i++) {
    squares[i].style.background = colors[i];
  }
  // reset the Btn text and title background color
  resetBtn.textContent = 'New Game';
  titleSegment.style.background = '#232624';
});

colorDisplay.textContent = pickedColor;
for (let i=0; i<squares.length; i++) {
  // set background color for each square
  squares[i].style.background = colors[i];

  // set click event listener for each square
  squares[i].addEventListener('click', function() {
    const clickedColor = this.style.background;
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = 'Correct!';
      resetBtn.textContent = 'Play Again?';
      changeSquaresColors(squares, clickedColor);
      titleSegment.style.background = clickedColor;
    } else {
      this.style.background = '#232624';
      messageDisplay.textContent = 'Try Again :)';
    }
  });
}

/**
 * Set all squares to the correct color
 * @param {Array} squares The squares on the page.
 * @param {String} color The correct color.
 */
function changeSquaresColors(squares, color) {
  squares.forEach(function(elm) {
    elm.style.background = color;
  });
};

/**
 * Pick a color from a list of colors at random
 * @param {Array} colors An array of RGB color string values.
 * @return {String} A selected color.
 */
function pickColor(colors) {
  pickedIndex = Math.floor(Math.random() * colors.length);
  color = colors[pickedIndex];
  return color;
}

/**
 * Generate a random array of RGB string values
 * @param {Number} length the length of the RGB arrag values.
 * @return {Array} A array of RGB string values.
 */
function generateRandomColors(length) {
  /**
   * Generate a random integer value between 0 and 255
   * @return {Number} A random integer value between 0 and 255.
   */
  function generateRGBSingleValue() {
    return Math.floor(Math.random()*256);
  }
  /**
   * Generate an RGB string value color
   * @return {String} An RGB string value color.
   */
  function generateRGBValue() {
    return 'rgb(' +
    generateRGBSingleValue() +
    ', ' +
    generateRGBSingleValue() +
    ', ' +
    generateRGBSingleValue() +
    ')';
  }

  randColors = [];
  for (let i=0; i<length; i++) {
    randColors.push(generateRGBValue());
  }
  return randColors;
}
