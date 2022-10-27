let newToDo
let btnBoxUncompleted
let completeTaskID
let completeTask
let IDnumber = 0
let newnew

const input = document.querySelector('.app__header-input')
const addBtn = document.querySelector('.app__header-btn')
const uncompletedList = document.querySelector('.app__body-ul-list--uncompleted')
const uncompletedListHeader = document.querySelector('.app__body-heading--uncompleted')
const uncompletedListError = document.querySelector('.app__body-alert')

const popup = document.querySelector('.popup')
const popupError = document.querySelector('.popup__body-info')
const popupInput = document.querySelector('.popup__body-input')
const popupBtnAdd = document.querySelector('.accepted')
const popupBtnCancel = document.querySelector('.cancel')

const addNewToDo = () => {
	if (input.value !== '') {
		IDnumber++
		uncompletedListHeader.innerText = 'Tasks to do'
		newToDo = document.createElement('li')
		newToDo.setAttribute('id', `numer ${IDnumber}`)
		newToDo.innerText = input.value
		newToDo.classList.add('app__list-item')
		addBtnBoxUncompleted()
		uncompletedList.append(newToDo)

		input.value = ''
		uncompletedListError.innerText = ''
	} else {
		uncompletedListError.innerText = 'Enter the task'
	}
}

const addBtnBoxUncompleted = () => {
	btnBoxUncompleted = document.createElement('div')
	newToDo.append(btnBoxUncompleted)

	const btnCompleted = document.createElement('button')
	btnCompleted.classList.add('btn', 'completed')
	btnCompleted.innerHTML = '<i class="fa-solid fa-check"></i>'

	const btnEdit = document.createElement('button')
	btnEdit.classList.add('btn', 'edit')
	btnEdit.innerHTML = '<i class="fa-solid fa-pen-to-square">'

	const btnDelete = document.createElement('button')
	btnDelete.classList.add('btn', 'delete')
	btnDelete.innerHTML = '<i class="fa-solid fa-trash-can"></i>'

	btnBoxUncompleted.append(btnCompleted, btnEdit, btnDelete)
}

const checkButton = e => {
	if (e.target.closest('button').classList.contains('completed')) {
		completeToDo(e)
	}

	if (e.target.closest('button').classList.contains('edit')) {
		editToDo(e)
	}

	if (e.target.closest('button').classList.contains('delete')) {
		deleteToDo(e)
	}
}

const completeToDo = e => {
	e.target.closest('li').classList.toggle('complete')
}

const editToDo = e => {
	popup.style.display = 'flex'
	const oldTodo = e.target.closest('li').id
	newnew = document.getElementById(oldTodo)
	popupInput.value = newnew.firstChild.textContent
}

const closePopup = () => {
	popup.style.display = 'none'
}

const changeToDo = e => {
	if (popupInput.value !== '') {
		newnew.firstChild.textContent = popupInput.value
		closePopup()
		popupError.innerHTML =''
	} else {
		popupError.innerHTML = 'Musisz coś wpisać'
	}
}

const deleteToDo = e => {
	e.target.closest('li').remove()
	popupError.innerHTML = ''
}

addBtn.addEventListener('click', addNewToDo)
uncompletedList.addEventListener('click', checkButton)
popupBtnCancel.addEventListener('click', closePopup)
popupBtnAdd.addEventListener('click', changeToDo)

/*
1. Robię wszystkie zmienne globalne, a potem użyję tylko tych które są niezbędne
2. Poprawić wygląd przycisków
3. Ogólnie poprawić CSS -  error ostylować, 
10.Zmiana kolorów na jasny i ciemny
*/
