let code = "";
const correctCode = "101125";

function press(num){
code += num;
document.getElementById("display").value = code;
}

function clearCode(){
code = "";
document.getElementById("display").value = "";
}

function checkCode(){
if(code === correctCode){
window.location.href = "main.html";
}else{
alert("Wrong code!");
clearCode();
}
}

/* TIMER */
if(document.getElementById("days")){
const start = new Date("December 25, 2025 19:30:00").getTime();

setInterval(()=>{
const now = new Date().getTime();
const diff = now - start;

const d = Math.floor(diff/(1000*60*60*24));
const h = Math.floor((diff/(1000*60*60))%24);
const m = Math.floor((diff/(1000*60))%60);
const s = Math.floor((diff/1000)%60);

document.getElementById("days").innerText = d;
document.getElementById("hours").innerText = h;
document.getElementById("minutes").innerText = m;
document.getElementById("seconds").innerText = s;
},1000);
}