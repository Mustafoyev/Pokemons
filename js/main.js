let List = document.querySelector('.list');
let elSelect = document.querySelector('.js-select');
let elSel = document.querySelector('.js-sel');
const elBtn = document.querySelector('.js-mode');
let addFragment = document.createDocumentFragment();

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
		addFragment.appendChild(newItem);
		add.appendChild(addFragment);
	});
}

domView(pokemons, List);

let newArr = new Set();

pokemons.forEach((item) => {
	item.type.forEach((el) => {
		newArr.add(el);
	});
});

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

	if (selVal == 'All') {
		domView(pokemons, List);
	}

	pokemons.forEach((el) => {
		if (el.type.includes(selVal)) {
			changeArr.push(el);
		}
	});
	domView(changeArr, List);
});

elSel.addEventListener('change', function () {
	let sortArr = [];
	let sortVal = elSel.value;
	List.innerHTML = '';

	if (sortVal == 'Aa-Zz') {
		sortArr = pokemons.sort(
			(a, b) => a.name.charCodeAt(0) - b.name.charCodeAt(0),
		);
	}

	if (sortVal == 'Zz-Aa') {
		sortArr = pokemons.sort(
			(a, b) => b.name.charCodeAt(0) - a.name.charCodeAt(0),
		);
	}

	domView(sortArr, List);
});

let theme = false;

elBtn.addEventListener('click', function () {
	theme = !theme;
	window.localStorage.setItem('theme', theme ? 'dark' : 'light');
	darkLight();
});

function darkLight() {
	if (window.localStorage.getItem('theme') == 'dark') {
		document.body.style.backgroundColor = '#333';
	} else {
		document.body.style.backgroundColor = '#ff00ff';
	}
}

darkLight();
