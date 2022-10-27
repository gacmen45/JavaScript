const cards = document.querySelectorAll('.card')

let hasFlippedCard = false
let lockBoard = false
let firstCard
let secondCard

function flipCard() {
	if (lockBoard) return
	if (this === firstCard) return

	this.classList.add('flip')

	if (!hasFlippedCard) {
		hasFlippedCard = true
		firstCard = this
		return
	} else {
		hasFlippedCard = false
		secondCard = this
	}
	matchCard()
}

function matchCard() {
const isMatch = firstCard.dataset.name === secondCard.dataset.name

isMatch ? disableCard() : turnCards()
}

function disableCard () {
    firstCard.removeEventListener('click', flipCard)
		secondCard.removeEventListener('click', flipCard)
}

function turnCards () {
    lockBoard = true
    setTimeout(function () {
        firstCard.classList.remove('flip')
        secondCard.classList.remove('flip')
        reset()
    }, 1000)
}

function reset() {
	hasFlippedCard = false
	lockBoard = false
	firstCard = null
	secondCard = null
}

(function shuffle () {
    cards.forEach( card=> {
        let randomPosition = Math.floor(Math.random() *12)
        card.style.order = randomPosition
    
    })
})()



cards.forEach(card => card.addEventListener('click', flipCard))
