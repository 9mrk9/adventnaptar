const Card = () => {
	const card = document.createElement('div');
	card.classList.add('card', 'day', 'mx-2', 'my-3', 'bg-danger', 'text-white');
	card.style.width = '16rem';

	return card;
};

const CardBody = () => {
	const cardBody = document.createElement('div');
	cardBody.classList.add('card-body');

	return cardBody;
};

const CardTitle = (title) => {
	const cardTitle = document.createElement('h5');
	cardTitle.classList.add('card-title', 'text-center');
	cardTitle.textContent = title;

	return cardTitle;
};

const CardImage = (src, alt) => {
	const cardImage = document.createElement('img');
	cardImage.classList.add('card-img-top');
	cardImage.src = src;
	cardImage.alt = alt;

	return cardImage;
};

const buildCard = (day) => {
	const card = Card();
	const cardBody = CardBody();
	const title = CardTitle(day.day);

	const img = CardImage(day.isOpen ? day.img : 'assets/locked.png', day.day);

	cardBody.appendChild(title);
	card.appendChild(img);
	card.appendChild(cardBody);

	return card;
};

export default buildCard;
