const canvas = document.getElementById('canvas1');
let canvasW = 300;
let canvasH = 600;
canvas.width = canvasW;
canvas.height = canvasH;
const c = canvas.getContext('2d');


//ball variables
let x = canvasW / 2;
let y = canvasH / 2;
let radius = 30;
let dx = 2;// start move speed
let dy = 2;//start move speed

//rect variables
let platumsx = 60;
let augstumsy = 10;
let rectx = x - 30





function bouncingBall(){
 requestAnimationFrame(bouncingBall);
 c.clearRect(0,0,canvasW,canvasH);



//apaksejais rect red
c.beginPath();
c.fillStyle = "red";
c.fillRect(x-30, 0, platumsx, augstumsy);


//apaksejais rect blue
c.beginPath();
c.fillStyle = "blue";
c.fillRect(x-30, canvasH - augstumsy, platumsx, augstumsy);




//ball
c.beginPath()
c.arc(x, y, radius, 0, Math.PI*2);
c.fillStyle = "green";
c.fill();

//setting ball to move
x += dx;
y += dy;


//bouncing horizontaly
if(x - radius <= 0 || x + radius >= canvasW){
    dx = -dx;
}

//randomisation of reverse moving
let reverseX
switch (Math.round(Math.random())) {
    case 0:      reverseX = -1
      break
    case 1:      reverseX = 1 
}




//bouncing verticaly
if (y - radius <= 0 + augstumsy || y + radius >=canvasH - augstumsy){
    dy = -9 * Math.random()*10* dy;
    dx = reverseX*dx

}




//speed limits
if (dy > 9 ){
    dy = 5.5;
}

if (dy < -8){
    dy = -5.5;
}

}

bouncingBall()
