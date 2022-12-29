import MarkdownIt from 'markdown-it';

export const convertMarkdownToHtml = (markdown: string) => {
	const md = new MarkdownIt();
	return md.render(markdown);
}

export const randomizeArray = (array: any) => {
	let currentIndex = array.length;
	let temporaryValue = null;
	let randomIndex = null;

	while (currentIndex !== 0) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	return array;
}