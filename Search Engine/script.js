const input = document.querySelector('.search')
const liItems = document.querySelectorAll('li')

const search = e => {
	const text = e.target.value.toLowerCase()

	liItems.forEach(el => {
		const task = el.textContent

		if (task.toLowerCase().indexOf(text) !== -1) {
			el.style.display = 'block'
		} else {
			el.style.display = 'none'
		}
	})
}

input.addEventListener('keyup', search)

/* ALTERNATE
 const search = =>{
	 liItems.forEach(item =>{
		 const match = new RegExp(input.value,'i').test(item.textContent)

		if(!match){
			item.style.display= 'none'
		}else{
			// item.style.display = 'block'
		}
	})
}*/
