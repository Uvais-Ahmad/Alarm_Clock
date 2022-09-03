setInterval(()=>{
	let time = new Date();
	let h1 = document.querySelector('h1');
	h1.textContent = time.getHours() +':'+time.getMinutes()+':'+time.getSeconds();
},1000);