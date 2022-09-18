let setTime = document.getElementById('time');
let setDate = document.getElementById('date');
let hoursDom =	document.getElementById('hours');
let mintsDom = document.getElementById('mints');
let  meridiemDom = document.getElementsByClassName('meridiem')[0];

setInterval(()=>{
	let time = new Date();
	const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
	
	setDate.textContent = time.toLocaleDateString('en-US', options)
	setTime.textContent = time.toLocaleTimeString();
},1000);

handleSetTime();
function handleSetTime(){
	let time = new Date();
	// time.getHours() +':'+time.getMinutes()+':'+time.getSeconds();
	// let secs = time.getSeconds();
	let hours = time.getHours();
	let mints = time.getMinutes();
	let meridiem = hours >= 12 ? 'PM' : 'AM' ;
	hours = hours > 12 ? hours - 12 : hours; 

	hours = appendZero(hours);
	mints = appendZero(mints);
	// secs = appendZero(secs);
	hoursDom.value = hours;
	mintsDom.value = mints;
	meridiemDom.value = meridiem;
	
	// let currentTime = hours+' : '+mints+' : '+secs+' : '+meridiem;
	// return currentTime;
}

function appendZero(n){
	if(n<10){
		return '0'+n;
	}
	return n;
}