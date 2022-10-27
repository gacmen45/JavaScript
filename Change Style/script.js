const lightBtn = document.querySelector('.light')
const darkBtn = document.querySelector('.dark')
let root = document.documentElement

const changeStyleToLight = () => {
	root.style.setProperty('--first-color', '#f9f9f9')
	root.style.setProperty('--second-color', '#14161f')
	root.style.setProperty('--border-color', 'rgba(0, 0, 0,.4);')
}
const changeStyleToDark = () => {
	root.style.setProperty('--first-color', '#14161f')
	root.style.setProperty('--second-color', '#f9f9f9')
	root.style.setProperty('--border-color', 'rgba(255, 255, 255, .4)')
}

lightBtn.addEventListener('click', changeStyleToLight)
darkBtn.addEventListener('click', changeStyleToDark)
