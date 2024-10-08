const containerColumn = (id) => {
	return document.getElementById(`${id}`)
}
const attributeScroll = document.querySelectorAll('a[href^="#"]');
const inputRange = document.querySelector("#formControlRange");
const valueInputRange = document.querySelector("#valueInputRange");
const formBudget = document.querySelector("#form-budget");
const navIcon = document.querySelector("#navIcon");
const burgerMenu = document.querySelector("#burgerMenu");
const navMenu = document.querySelector("#menu");
const ourWorksLinks = document.querySelectorAll("#service a");

attributeScroll.forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

navIcon.addEventListener("click", (e) => {

	burgerMenu.classList.toggle("visibility");

	if(navIcon.classList.contains("bi-list")) {
		navIcon.classList.remove("bi-list");
		navIcon.classList.add("bi-x-lg");
	} else {
		navIcon.classList.remove("bi-x-lg");
		navIcon.classList.add("bi-list");
	}
});

const createNode = (id) => {
	const divColumnContainer = Object.assign(document.createElement("div"), { className: "card-columns"});
	let arrayImages = [1, 2, 3, 4, 5];
	arrayImages.forEach(e => {
		const divElement = Object.assign(document.createElement("div"), { className: "card border-0 image-container"});
		const elementImages = Object.assign(document.createElement("img"), { className: "card-img-top rounded image", src: `img/${id}/${id}-${e}.jpg`, alt: `${id}-${e}`});
		const divText = Object.assign(document.createElement("div"), { className: "overlay", innerText: "Lorem ipsus sit edu"});
		divElement.appendChild(elementImages);
		divElement.appendChild(divText);
		divColumnContainer.appendChild(divElement);
	});
	containerColumn(id).appendChild(divColumnContainer);
}

document.addEventListener("DOMContentLoaded", () => {
	ourWorksLinks.forEach((e) => {
		let id = e.name;
		if(containerColumn(id).children.length === 0) {
			createNode(id);
		}
	})
});

document.addEventListener("DOMContentLoaded", (event) => {
	const year = document.getElementById("year");
	const date = new Date();	
	year.innerText = date.getFullYear();
});

inputRange.addEventListener("input", (e) => {
	valueInputRange.innerHTML = `${e.target.value} m2`;
});

const updateValueDisplay = () => {
	formBudget.reset();
	inputRange.value = 200;
	valueInputRange.innerHTML = `${inputRange.value} m2`
}

window.onscroll = () => {
	loadBackground();
}

window.addEventListener("load", () => {
	loadBackground();
});

const loadBackground = () => {
	let position = window.scrollY;
	if(position > 56) {
		navMenu.classList.add('bg-grey');
	} else {
		navMenu.classList.remove('bg-grey');
	}
}

$('#project-modal').on('shown.bs.modal', function () {
    updateValueDisplay();
});
