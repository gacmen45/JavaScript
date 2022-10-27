const input = document.querySelector('#number')
const result = document.querySelector('.result')
const yourNumber = document.querySelector('.your-number')
const yourChance = document.querySelector('.your-chance')
const btnCheck = document.querySelector('.btnCheck')
const btnReset = document.querySelector('.btnReset')

let tries = 0
let numbers = []

//Wylosowanie liczby
let randomNumber = Math.floor(Math.random() * 10)

//Funkcja głowna, klikanie i losowanie liczby
const guessNumber = () => {
	console.log(randomNumber)

	if (input.value == null || input.value > 10 || input.value < 1) {
		result.textContent = 'Wybrałeś złą liczbę'
	} else {
		if (input.value == randomNumber) {
			result.textContent = 'Brawo trafiłeś'
			yourNumber.textContent = `Wylosowana liczba to ${randomNumber}`
			yourChance.textContent = `Trafiłeś za ${tries + 1} razem`
		} else {
			howManyTimes()
			pushNumber()
			result.textContent = 'Spróbuj jeszcze raz'
		}
	}
}

//Funckja Reset
const reset = () => {
	tries = 0
	numbers = []
	input.value = ''
	result.textContent = 'Wybierz liczbę od 1-10'
	yourNumber.textContent = `Wybrałeś liczbę: ${input.value}`
	yourChance.textContent = 'Próbowałeś już: 0 razy'
	randomNumber = Math.floor(Math.random() * 10)
}

//Funkcja zliczjąca próby
const howManyTimes = () => {
	tries += 1

	if (tries === 1) {
		yourChance.textContent = `Próbowałeś już: ${tries} raz`
	} else {
		yourChance.textContent = `Próbowałeś już: ${tries} razy`
	}
}

//Funkcja dodająca wynik do tablicy
const pushNumber = () => {
	numbers.push(input.value)
	yourNumber.textContent = `Wybrałeś liczby: ${numbers.join()}`
}

btnCheck.addEventListener('click', guessNumber)
btnReset.addEventListener('click', reset)

//zeby sortowało numberki w tablicy
//Zrobić odliczanie czyli np. zostały mi 3 próby,2 próby...
//Gracz sam ustala przedział liczb
//zeby nie można było powtórzyć wybranych liczb
