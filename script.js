//your JS code here. If required.
const timer = document.getElementById('timer');
function dynamicTime(){
	const currentDate = new Date();
    timer.innerText =  currentDate.getMonth()+'/'+currentDate.getDate()+'/'+currentDate.getFullYear()+', '+ currentDate.toLocaleTimeString().toUpperCase();
        }
        setInterval(dynamicTime, 1000);