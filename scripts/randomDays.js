const randomDays = [];
const randomImages = [];

for (let i = 1; i <= 24; i++) {
	while (true) {
		const randomDay = Math.floor(Math.random() * 24) + 1;
		if (!randomDays.includes(randomDay)) {
			randomDays.push(randomDay);
			break;
		}
	}
	while (true) {
		const randomImage = Math.floor(Math.random() * 24) + 1;
		if (!randomImages.includes(randomImage)) {
			randomImages.push(randomImage);
			break;
		}
	}
}

export default {
	randomDays,
	randomImages,
};
