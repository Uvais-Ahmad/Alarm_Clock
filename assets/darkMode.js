let body = document.querySelector('body')
let btn = document.querySelector('#darkBtn');
let alarmClCont = document.querySelector('#alarm-clock-container');
let listAlarm = document.querySelector('#alarmlist');
let about = document.querySelector('#about');

isDark = false;

btn.addEventListener('click',()=>{
	console.log('isDark',isDark)
	if(isDark){
		
		// body.classList.remove('dark');

		body.style.backgroundColor = 'white'
		alarmClCont.classList.remove('darkLight')
		listAlarm.classList.remove('darkLight')
		isDark = false;
	}else{
	
		// body.classList.add('dark');

		body.style.backgroundColor = '#15212b'
		alarmClCont.classList.add('darkLight')
		listAlarm.classList.add('darkLight')
		isDark=true
	}  
})

about.addEventListener('click',()=>{
	alert("Hi , Welcome   This   is   Alarm   Clock   created   By   **'UVAIS AHMAD'**   by   using  FrontEnd   Techniques ( HTML / CSS / Vanilla Js ) ");
})