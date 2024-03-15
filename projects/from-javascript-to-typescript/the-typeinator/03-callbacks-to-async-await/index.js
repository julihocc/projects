// Put your checkEmotion and speak functions here! ✨
// See ./original.js for their older JavaScript code.

async function delay(ms) {
	return new Promise(
		setTimeout((resolve) => {
			resolve;
		}, ms)
	);
}

async function checkEmotion(knownEmotions, emotion) {
	await delay(1000);
	return knownEmotions.has(emotion);
}

async function speak(knownEmotions, newEmotion, phrase) {
	const hasEmotion = await checkEmotion(knownEmotions, newEmotion);
	if (hasEmotion) {
		return `"${phrase}" (${newEmotion})`;
	} else {
		throw new Error(`Does not compute. I do not understand ${newEmotion}.`);
	}
}

module.exports.checkEmotion = checkEmotion;
module.exports.speak = speak;
