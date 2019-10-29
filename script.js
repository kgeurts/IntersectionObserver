let alleLinks = document.querySelectorAll('nav a');
let deSecties = document.querySelectorAll('section');

const opties =  {
	rootMargin: "-150px",
	tresshold: 1.0
}; 
const verwerkDoorsnijding = (entries, observer) => {
	entries.forEach( entry =>{
	console.log(entry.target.id   + "doorsnijdt" + entry.isIntersecting);
	if (entry.isIntersecting ) {
		let link =  zoekBijpassendeLink("#" + entry.target.id);
		 maakActief(link);
	}
	});
}

let observer = new IntersectionObserver(verwerkDoorsnijding, opties); 


// observer.observe(deSecties[1]);

deSecties.forEach(sectie =>{
	observer.observe(sectie);
});

// Functie die de actieve link de class actief verwijderd uit het menu.
const verwijderActief = () => {
	alleLinks.forEach((link) =>{
		if (link.classList = 'actief') {
			link.classList.remove('actief');
		}
	});
}

// Functie die de class actief geeft.
const maakActief = (elem) => {
	verwijderActief();
	elem.classList.add('actief');
} 

// Functie om toe te voegen omclick.
alleLinks.forEach((link) => {
	addEventListener('click', (e) =>{
		e.preventDefault();
		maakActief(e.target);
		window.location = e.target.href;
	});
});

const zoekBijpassendeLink = (id) => {
	console.log('nav a[href="' + id + '"]')
	let link = document.querySelector('nav a[href="' + id + '"]');
	return link;
};
