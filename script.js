//your JS code here. If required.

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
	event.preventDefault();
	const fontSize = document.getElementById("fontsize").value;
	const fontColor = document.getElementBydId("fontcolor").value;
	document.cookie = `fontsize=${fontSize};`;
	document.cookie = `fontcolor=${fontColor};`;
	document.documentElement.style.setProperty("--fontsize", `${fontSize}px`);
	document.documentElement.style.setProperty("--fontcolor", fontColor);
})