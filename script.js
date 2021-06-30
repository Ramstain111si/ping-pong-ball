const canvas = document.getElementById('canvas1');
let canvasW = 300;
let canvasH = 600;
canvas.width = canvasW;
canvas.height = canvasH;
const c = canvas.getContext('2d');


//bumbinas nosacijumi
let x = canvasW / 2;
let y = canvasH / 2;
let radius = 30;
let dx = 2;// kustiba
let dy = 2;//kustiba

//rect nosacijumi
let platumsx = 60;
let augstumsy = 10;
let rectx = x - 30





function bouncingBall(){
 requestAnimationFrame(bouncingBall);
 c.clearRect(0,0,canvasW,canvasH);



//apaksejais rect sarkans
c.beginPath();
c.fillStyle = "red";
c.fillRect(x-30, 0, platumsx, augstumsy);


//apaksejais rect sarkans
c.beginPath();
c.fillStyle = "blue";
c.fillRect(x-30, canvasH - augstumsy, platumsx, augstumsy);




//bumbina
c.beginPath()
c.arc(x, y, radius, 0, Math.PI*2);
c.fillStyle = "green";
c.fill();

x += dx;
y += dy;

if(x - radius <= 0 || x + radius >= canvasW){
    dx = -dx;
}

if (y - radius <= 0 + augstumsy || y + radius >=canvasH - augstumsy){
    dy = -dy;
}


}

bouncingBall()