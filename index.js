console.log('This is index.js');

// let a ;
// let date;
// let time;

setInterval(() => {
    a = new Date();
    let date = a.toLocaleTimeString();
// time = a.getHours() + ":"+ a.getMinutes() + ':'+ a.getSeconds()
document.getElementById('date').innerHTML = date;
}, 1000);

// setInterval(() => {
   
// let currentDate = new Date();

// let currentHours = currentDate.getHours();
// let currentMinutes  = currentDate.getMinutes();
// let currentSeconds = currentDate.getSeconds();

// let currentTime = (currentHours<12)? 'AM' : 'PM';

// currentHours = (currentHours>12)? currentHours-12: currentHours;
// currentHours = (currentHours==0)? currentHours=12: currentHours;

// currentMinutes = (currentMinutes<10)? ('0'+currentMinutes) : (''+currentMinutes) ;
// currentSeconds = (currentSeconds<10)? ('0'+currentSeconds): (''+currentSeconds);

// let currenStr = currentHours +':'+ currentMinutes +':'+currentSeconds;

// let doc = document.getElementById('date');
// doc.innerHTML = currenStr +' '+currentTime;

    
// }, 1000);



    





