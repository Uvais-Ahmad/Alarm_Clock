let setTime = document.getElementById('time');
let setDate = document.getElementById('date');
let hoursDom =	document.getElementById('hours');
let mintsDom = document.getElementById('mints');
let  meridiemDom = document.getElementsByClassName('meridiem')[0];
let setAlarm = document.getElementById('submit');
let alarmList = document.getElementsByClassName('alarm')[0];

// This append all Options of Hours and mints
appendOption();
setDefaultAlarm();

setInterval(()=>{
	let time = new Date();
	const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
	
	setDate.textContent = time.toLocaleDateString('en-US', options)
	setTime.textContent = time.toLocaleTimeString();
},1000);


setAlarm.addEventListener('click', handleSubmit );

function handleSubmit(){
	console.log('handleSubmit called')
	let h , m , meri;
	h = hoursDom.value;
	m = mintsDom.value;
	meri = meridiemDom.value;


	let timeString = getTimeString(h,m,meri);
	handleSetAlarm(timeString);
	setDefaultAlarm();
	handleDeleteAlarm();
}

function handleDeleteAlarm(){
	//Add EventListner on each alarm And Setup delete alarm
	let allTrash = document.querySelectorAll('.trashBin');
	
	allTrash.forEach(trash => {
		trash.addEventListener('click' , (e) => {
			console.log('Delete Alarm');
			e.target.parentElement.parentElement.remove();
			//parent of image is div and parent on div is Whole Alarm
		})
	})
}

function handleSetAlarm(time){
	console.log('handleSetAlarm called')
	alarmList.innerHTML += 
					`<div class = "d-flex shadow mt-1 oneAlarm">
						<div class="left">
							<div class="w-25 ">
								<img class="w-50 mt-1" src="assets/images/bell.png">
							</div>
							
							<div>
								<h6 class="m-0 text-secondary alarmTime">${time}</h6>
								<p class="m-0 text-secondary">alarm in soon</p>
							</div>
						</div>

						<div class="right w-50">
							<img class="w-50 mt-1 ml-auto trashBin" src="assets/images/trashBin.png">
						<div>
					</div>`
}


				// For setting the alarm Bydefault
function setDefaultAlarm(){
	console.log('setDefaultAlarm called');
	let time = new Date();
	let hours = time.getHours();
	let mints = time.getMinutes();

	let meridiem = hours >= 12 ? 'PM' : 'AM' ;
	hours = hours > 12 ? hours - 12 : hours; 

	hours = appendZero(hours);
	mints = appendZero(mints);

	hoursDom.value = hours;
	mintsDom.value = mints;
	meridiemDom.value = meridiem;

	
}

function appendOption (){
	//hours
	for(let i = 1 ; i<= 12 ; i++){
			i = (i<10) ? '0'+i : i ;
			let opt = document.createElement('option');
			opt.value = i;
			opt.textContent = i;
			hoursDom.append(opt);	
	}
	// minutes
	for(let i = 1 ; i<= 59 ; i++){
			i = (i<10) ? '0'+i : i ;
			let opt = document.createElement('option');
			opt.value = i;
			opt.textContent = i;
			mintsDom.append(opt);	
	}


}

function appendZero(n){
		console.log("appendZero called")

	if(n<10){
		return '0'+n;
	}
	return n;
}

function getTimeString ( h , m , meri){
	console.log("getTimeString called")
	return `${h} : ${m} ${meri}`;
}



