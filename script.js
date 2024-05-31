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
	document.cookie = `fontSize=${fontSize};max-age=${60*60*24*30}`;
	document.cookie = `fontColor=${fontColor};max-age=${60*60*24*30}`;
})

const cookieString = document.cookie;
const cookies = cookieString.split(";");
console.log(cookieString, cookies);
for(const cookie of cookies){
	const[name, value] = cookie.split('=');
	console.log({name, value});
	if(name.trim() === "fontSize"){
		document.documentElement.style.setProperty("--fontsize", `${value}px`);
	} else if(name.trim() === "fontColor"){
		document.documentElement.style.setProperty("--fontcolor", `${value}`);
	}
}