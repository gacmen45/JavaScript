const numbersBtn = document.querySelectorAll('.number')
const operationBtn = document.querySelectorAll('.operation')
const deleteBtn = document.querySelector('.delete')
const deleteNum = document.querySelector('.deleteNumber')
const equalBtn = document.querySelector('.equal')
const previousResult = document.querySelector('.result__previous')
const currentResult = document.querySelector('.result__current')

let currentOperation = ''
let previousOperation = ''
let operation = undefined

const calculate = () =>{
    let action
    if(!previousOperation || !currentOperation){
        return
    }

    const previous = parseFloat(previousResult.innerHTML)
    const current = parseFloat(currentResult.innerHTML)

    if(isNaN(previousOperation) || isNaN(currentOperation)){
        return
    }

    switch (operation){
        case '+':
            action = previous + current
            break
        case '-':
            action = previous - current
            break
        case 'X':
            action = previous * current
            break
        case '/':
            action = previous / current
            break
        
    }
    currentOperation = action
    operation = undefined
    previousOperation = ''
}


const updateResult = () => {
	currentResult.innerText = currentOperation
    if(operation !=null){
        previousResult.innerText = previousOperation + operation
    }else{
        previousResult.innerText = ''
    }
	
}

const chooseOperation = operator => {
	if (currentOperation === '') {
		return
	}

if(previousOperation !== ''){
    calculate()
}
	operation = operator
	previousOperation = currentOperation
	currentOperation = ''
}

const add = num => {
	if (num === '.') {
		if (currentOperation.includes('.')) {
			return
		}
	}

	currentOperation = currentOperation.toString() + num.toString()
}

numbersBtn.forEach(num => {
	num.addEventListener('click', () => {
		add(num.innerText)
		updateResult()
	})
})

const deleteNumber = () => {
	currentOperation = currentOperation.toString().slice(0, -1)
}

const clear = () => {
	currentResult.innerText = ''
	previousResult.innerText = ''
	currentOperation = ''
	previousOperation = ''
}

deleteBtn.addEventListener('click', clear)
deleteNum.addEventListener('click', () => {
	deleteNumber()
	updateResult()
})

operationBtn.forEach((operator)=>{
    operator.addEventListener('click',() =>{
        console.log(operator);
        chooseOperation(operator.innerText)
        updateResult()
    })
})

equalBtn.addEventListener('click',()=>{
    calculate()
    updateResult()
})