sng="";
sng2="";
function preload(){
sng=loadSound("music.mp3")
sng2=loadSound("music2.mp3")
}
function setup(){
canvas=createCanvas(400, 400)
canvas.center();
v=createCapture(VIDEO)
v.hide();

sng2.play()
}
function draw(){
image(v,0,0,400,400)
}
