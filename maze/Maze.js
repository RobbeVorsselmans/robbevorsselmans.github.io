let matrix = new Matrix(WIDTH, HEIGHT);

const maxLevel = 4

const margin = 1
const worldHeight = 17;
const worldWidth = 17;
const fps = 10
let cRow = 0 // cursor row
let cCol = 1 // cursor col
let aRow = 0 // anchor row
let aCol = 0 // anchor col
let level = 1;
let isWin = false
let isNewLevel = true
let animationDuration = 2
let animationTimer = 0
let Maze = Mazes[level - 1]
let scoreField
let score = 0

function setup() {
    matrix.init()
    frameRate(fps)
    scoreField = select('#score')
    scoreField.html('Score: ' + score)
}

function draw() {
    matrix.clear()
    showMaze(aRow, aCol)
    readJoystick()
    showCursor()
    checkWin()
    showUI() // show animation when needed
    matrix.show()
}

function showLed(row, col) {
    matrix.setLed(row, col, true, 'rgb(126,46,132)')
}

function showCursor() {
    matrix.setLed(cRow, cCol, true, 'rgb(255, 200, 0)')
}

// show maze portion based on anchor in upper left corner
function showMaze(aR, aC) {
    const rows = createIndices(aR, HEIGHT)
    const cols = createIndices(aC, WIDTH)
    for (col of cols) {
        for (row of Maze[col]) {
            if (rows.includes(row)) {
                showLed(row - aR, col - aC)
            }
        }
    }
}

function showPrize() {
    matrix.clear()
    const color = level == maxLevel ? "#FFD700" : "#cd7f32" // gold or bronze
    const highlight = level == maxLevel ? "#FFF4BD" : "#EACAAB" // gold or bronze
    for (let col = 0; col < WIDTH; col++) {
        for (row of Prize[col]) {
            matrix.setLed(row, col, true, color)
        }
    }
    if (Math.random() > .8) {
        matrix.setLed(0, 6, true, highlight)
    } else if (Math.random() > .8) {
        matrix.setLed(2, 7, true, highlight)
    } else if (Math.random() > .8) {
        matrix.setLed(1, 4, true, highlight)
    }
}

function createIndices(start, length) {
    let A = [...Array(length).keys()]
    A.forEach((e, i) => A[i] = e + start)
    return A
}

function checkWin() {
    if (aRow + cRow == worldHeight - 1) {
        console.log("You win!");
        isWin = true
        aRow = 0
        aCol = 0
        cRow = 0
        cCol = 1

        score++
        scoreField.html('Score: ' + score)
    }
}

function increaseLevel() {
    level++
    Maze = Mazes[level - 1]
    isNewLevel = true
}

function showUI() {
    if (isWin) {
        animationTimer++
        if (animationTimer < animationDuration * fps || level == maxLevel) {
            showPrize()
        } else {
            isWin = false
            animationTimer = 0
            increaseLevel()
        }
    }
    if (isNewLevel) {
        animationTimer++
        if (animationTimer < animationDuration * fps) {
            showLevel(level)
        } else {
            isNewLevel = false
            animationTimer = 0
        }
    }
}

function readJoystick() {
    // read joyStick values
    let x = readJoystickX();
    let y = readJoystickY();

    if (x > 975 && cCol < WIDTH - 1) {
        tryMove(0, +1)
    } else if (x < 50 && cCol > 0) {
        tryMove(0, -1)
    }
    if (y > 975 && cRow > 0) {
        tryMove(-1, 0)
    } else if (y < 50 && cRow < HEIGHT - 1) {
        tryMove(+1, 0)
    }
}

function keyPressed() {
    if (keyCode === UP_ARROW && cRow > 0) {
        tryMove(-1, 0)
    } else if (keyCode === DOWN_ARROW && cRow < HEIGHT - 1) {
        tryMove(+1, 0)
    }
    if (keyCode === LEFT_ARROW && cCol > 0) {
        tryMove(0, -1)
    } else if (keyCode === RIGHT_ARROW & cCol < WIDTH - 1) {
        tryMove(0, +1)
    }
}

function tryMove(addRow, addCol) {
    absRow = aRow + cRow + addRow;
    absCol = aCol + cCol + addCol;
    if (!Maze[absCol].includes(absRow)) {
        if (addRow > 0) {
            if (cRow < HEIGHT - 1 - margin || aRow + HEIGHT - 1 == worldHeight - margin) {
                cRow++
            } else if (aRow < worldHeight - HEIGHT) {
                aRow++
            }
        } else if (addRow < 0) { // addRow -1
            if (cRow > margin || aRow == margin - 1) {
                cRow--
            } else if (aRow > 0) {
                aRow--
            }

        }
        if (addCol > 0) {
            if (cCol < WIDTH - 1 - margin || aCol + WIDTH - 1 == worldWidth - margin) {
                cCol++
            } else if (aCol < worldWidth - WIDTH) {
                aCol++
            }
        } else if (addCol < 0) { // addRow -1
            if (cCol > margin || aCol == margin - 1) {
                cCol--
            } else if (aCol > 0) {
                aCol--
            }

        }
    }
}

function showLevel(level) {
    matrix.clear()
    const L = [
        [0, 1, 2],
        [2],
    ]
    for (let col = 0; col < 2; col++) {
        for (row of L[col]) {
            matrix.setLed(row, col, true, '#D5E7F2')
        }
    }
    for (let col = 3; col < WIDTH; col++) {
        for (row of Numbers[level][col]) {
            matrix.setLed(row, col, true, '#03588C')
        }
    }
}