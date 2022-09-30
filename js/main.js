let List = document.querySelector('.list');
let elSelect = document.querySelector('.js-select');

let newArr = new Set();

function domView(array, add) {
	array.forEach((item) => {
		let newItem = document.createElement('li');
		let newSpan = document.createElement('span');
		let newTitle = document.createElement('h2');
		let newImg = document.createElement('img');
		let newTime = document.createElement('time');
		let newText = document.createElement('p');

		newSpan.textContent = item.num;
		newTitle.textContent = item.name;
		newImg.src = item.img;
		newImg.setAttribute('alt', 'Pocemon image');
		newImg.setAttribute('with', '200');
		newImg.setAttribute('height', '200');
		newTime.textContent = item.spawn_time;
		newTime.dateTime = item.spawn_time;
		newText.textContent = item.type;

		newItem.appendChild(newSpan);
		newItem.appendChild(newTitle);
		newItem.appendChild(newImg);
		newItem.appendChild(newTime);
		newItem.appendChild(newText);
		add.appendChild(newItem);

		item.type.forEach((el) => {
			newArr.add(el);
		});
	});
}

domView(pokemons, List);

newArr.forEach((val) => {
	let newOption = document.createElement('option');

	newOption.value = val;
	newOption.textContent = val;

	elSelect.appendChild(newOption);
});

elSelect.addEventListener('change', function () {
	let selVal = elSelect.value;
	let changeArr = [];
	List.innerHTML = '';

	pokemons.forEach((el) => {
		if (el.type.includes(selVal)) {
			changeArr.push(el);
		}
	});
	domView(changeArr, List);
});
