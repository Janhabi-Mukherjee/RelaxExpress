/*const container=document.getElementsByClassName('container');
let ele=document.getElementsById('text');

const totaltime=7500;
const breathetime=(totaltime/5)*2;
const holdtime=totaltime/5;

breatheAnimation();
function breatheAnimation()
{
    ele.innerText='Breathe In!';
    setTimeout(()=>{
        ele.innerHTML='Hold';
        setTimeout(()=>{
            ele.innerHTML='Breathe Out!';
        },holdtime); 
    },breathetime);
}*/


//setInterval(breatheAnimation,totaltime);
let container=document.getElementById('con1');
let text=document.getElementById('txt1');

const totaltime=7500;
const breathetime=(totaltime/5)*2;
const holdtime=totaltime/5;

breatheAnimation();

function breatheAnimation()
{
    text.innerHTML="Breathe In!";
    //console.log(text);
    container.className="container grow"
    setTimeout(()=>{
        text.innerHTML='Hold';
        setTimeout(()=>{
            text.innerHTML='Breathe Out!';
            container.className="container shrink"
        },holdtime); 
    },breathetime);
}

setInterval(breatheAnimation,totaltime);