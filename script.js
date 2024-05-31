//your JS code here. If required.
// document.cookie ==

const form = document.querySelector("form");
form.addEventListener("submit", function(event){
	// if you want to stop the default behaviour of an form submit button
	// it causes load
	event.preventDefault(); 
	const fontSize = document.getElementById("fontsize").value;
	const fontColor = document.getElementById("fontcolor").value;
	console.log({fontSize, fontColor})
	document.cookie = `fontsize=${fontSize};max-age=${60*60*24*30}`;
	document.cookie = `fontcolor=${fontColor};max-age=${60*60*24*30}`;
	document.documentElement.style.setProperty("--fontsize", `${fontSize}px`);
	document.documentElement.style.setProperty("--fontcolor", `${fontColor}`);
})

const cookieString = document.cookie;
const cookies = cookieString.split(";");
console.log(cookieString, cookies);
for(const cookie of cookies){
	const[name, value] = cookie.split('=');
	console.log({name, value});
	if(name.trim() === "fontzize"){
		document.documentElement.style.setProperty("--fontsize", `${value}px`);
	} else if(name.trim() === "fontcolor"){
		document.documentElement.style.setProperty("--fontcolor", `${value}`);
	}
}