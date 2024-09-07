const logdiv= document.getElementById("log");
const statediv= document.getElementById("state");
const startBtn= document.getElementById("start-btn");
const stopBtn= document.getElementById("stop-btn");


startBtn.addEventListener("click",()=>{

document.addEventListener("keydown",handleDown);

document.addEventListener("keyup",handleup);

startBtn.disabled=true;
stopBtn.disabled=false;



});

stopBtn.addEventListener("click",()=>{

document.removeEventListener("keydown",handleDown);

document.removeEventListener("keyup",handleup)

logdiv.textContent="";
statediv.textContent="";
startBtn.disabled=false;
stopBtn.disabled=true;


});


function handleDown(e)
{
     logdiv.textContent=`Key ${e.key} pressed down`;
     statediv.textContent="key is down";
}

function handleup(e)
{
     logdiv.textContent=`Key ${e.key} pressed up`;
     statediv.textContent="key is up";
}


