var room_name;


var socket;
class bubble {
    constructor(x,y,r,id){
        this.x=x;
        this.y=y;
        this.r=r;
        this.id=id;
    }

}

function setup() {
    room_name=localStorage.getItem("room_number");
    createCanvas(800, 200);
    background(0);
    textSize(32);
    fill(0, 102, 153);
    text(String(room_name), 100, 100);
    socket=io.connect();
    var data={
        room: room_name
    }
    socket.emit('room', data);
    socket.on('mouse',newDrawing);

}

function newDrawing(data){
    noStroke();
    fill(255,0,100);
    ellipse(data.x,data.y,40,40);
}

function mouseDragged(){
    var data={
        x: mouseX,
        y: mouseY,
        room : room_name
    }
    socket.emit('mouse',data);
    noStroke();
    fill(255);
    ellipse(mouseX,mouseY,40,40);

}
function draw() {

}
