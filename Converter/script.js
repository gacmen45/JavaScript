const one = document.querySelector('.one')
const two = document.querySelector('.two')
const inputOne = document.querySelector('#converter')
const inputTwo = document.querySelector('#accuracy')
const result = document.querySelector('p')
const btnConvert = document.querySelector('.btnConvert')
const btnReset = document.querySelector('.btnReset')
const btnChange = document.querySelector('.btnChange')

const celToFahr = () => {
	const temp = (inputOne.value * 5) / 9 + 32
	result.classList.remove('hidden')
	result.textContent = `${inputOne.value}°C to ${temp.toFixed(inputTwo.value)}°F `
}

const fahrToCel = () => {
	const temp = ((inputOne.value - 32) * 5) / 9
	result.classList.remove('hidden')
	result.textContent = `${inputOne.value}°F to ${temp.toFixed(inputTwo.value)}°C `
}

const convert = () => {
	if (inputOne.value !== '') {
		if (one.textContent === '°C') {
			celToFahr()
		} else if (one.textContent === '°F') {
			fahrToCel()
		}
	} else {
		result.classList.remove('hidden')
		result.textContent = 'Musisz podać stopnie'
	}
}

const reset = () => {
	inputOne.value = ''
	inputTwo.value = ''
	result.classList.add('hidden')
}

const change = () => {
	if (one.textContent === '°C') {
		one.textContent = '°F'
		two.textContent = '°C'
		result.classList.add('hidden')
	} else if (one.textContent === '°F') {
		one.textContent = '°C'
		two.textContent = '°F'
		result.classList.add('hidden')
	}
}

btnConvert.addEventListener('click', convert)
btnReset.addEventListener('click', reset)
btnChange.addEventListener('click', change)
