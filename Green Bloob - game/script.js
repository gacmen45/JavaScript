const canvas = document.getElementById('gameArea')
const ctx = canvas.getContext('2d')

let x = 100
let y = 100
let radius = 50
let speed = 10

let upPressed = false
let downPressed = false
let leftPressed = false
let rightPressed = false

function drawGame() {
	requestAnimationFrame(drawGame)
	clearScreen()
	inputs()
	boundryCheck()
	drawGreenBlob()
}

function clearScreen() {
	ctx.fillStyle = 'black'
	ctx.fillRect(0, 0, canvas.width, canvas.height)
}

function boundryCheck() {
	//up
	if (y < radius) {
		y = radius
	}
	//down
	if (y > canvas.height - radius) {
		y = canvas.height - radius
	}
	//left
	if (x < radius) {
		x = radius
	}
    //righx
	if (x > canvas.width - radius) {
		x = canvas.width - radius
	}
}

function inputs() {
	if (downPressed) {
		y += speed
	}
	if (upPressed) {
		y -= speed
	}
	if (leftPressed) {
		x -= speed
	}
	if (rightPressed) {
		x += speed
	}
}

function drawGreenBlob() {
	ctx.fillStyle = 'green'
if(upPressed){
    ctx.fillStyle = 'red'
}else if(downPressed){
    ctx.fillStyle = 'blue'
}

	ctx.beginPath()
	ctx.arc(x, y, radius, 0, Math.PI * 2)
	ctx.fill()
}

function keyDown(event) {
	//down
	if (event.keyCode == 40) {
		downPressed = true
	}
	//up
	if (event.keyCode == 38) {
		upPressed = true
	}
	//left
	if (event.keyCode == 37) {
		leftPressed = true
	}
	//right
	if (event.keyCode == 39) {
		rightPressed = true
	}
}
function keyUp(event) {
	//down
	if (event.keyCode == 40) {
		downPressed = false
	}
	//up
	if (event.keyCode == 38) {
		upPressed = false
	}
	//left
	if (event.keyCode == 37) {
		leftPressed = false
	}
	//right
	if (event.keyCode == 39) {
		rightPressed = false
	}
}

document.body.addEventListener('keydown', keyDown)
document.body.addEventListener('keyup', keyUp)

drawGame()
