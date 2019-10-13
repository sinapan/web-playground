let numOfSquares = 6;
let colors = [];
let pickedColor;
const squares = document.querySelectorAll('.square');
const colorDisplay = document.getElementById('colorDisplay');
const messageDisplay = document.querySelector('#message');
const titleSegment = document.querySelector('#titleSegment');
const resetBtn = document.querySelector('#resetBtn');
const modeBtns = document.querySelectorAll('.mode');

init();

/**
 * Set everything up initially.
 */
function init() {
  setupButtons();
  setupSquares();
  resetGame(numOfSquares);
}

/**
 * Add event listeners to buttons.
 */
function setupButtons() {
  modeBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      modeBtns.forEach(function(elm) {
        elm.classList.remove('btnSelected');
      });
      btn.classList.add('btnSelected');
      if (btn.textContent === 'easy') {
        numOfSquares = 3;
      } else if (btn.textContent === 'medium') {
        numOfSquares = 6;
      } else if (btn.textContent === 'hard') {
        numOfSquares = 9;
      };
      resetGame(numOfSquares);
    });
  });

  resetBtn.addEventListener('click', function() {
    resetGame(numOfSquares);
  });
}

/**
 * Add event listeners to squares.
 */
function setupSquares() {
  // set click event listener
  for (let i=0; i<squares.length; i++) {
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
}

/**
 * Resets the game.
 * @param {Number} numOfSquares number of squares for a mode.
 */
function resetGame(numOfSquares) {
  colors = generateRandomColors(numOfSquares);
  pickedColor = pickColor(colors);
  colorDisplay.textContent = pickedColor;
  for (let i=0; i<squares.length; i++) {
    if (colors[i]) {
      squares[i].style.background = colors[i];
      squares[i].style.display = 'block';
    } else {
      squares[i].style.display = 'none';
    }
  }
  resetBtn.textContent = 'New Game';
  titleSegment.style.background = 'steelblue';
  messageDisplay.textContent = '';
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
