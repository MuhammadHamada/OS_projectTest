var socket;
class bubble {
    constructor(x,y,r,id){
        this.x=x;
        this.y=y;
        this.r=r;
        this.id=id;
    }
    clicked(x,y){
        let dis= dist(x,y,this.x,this.y);
        
        if(dis<=this.r){
           return this.id;
        }
        else return -1;
    }
}
let bubbles=new Array(4);
let names=['Ahmed','Nada','Osama','Saleh'];
function setupBubbles(){
  for(let i=0;i<4;i++){
      bubbles[i]=new bubble(100*(i+1),100,50,i);
      ellipse(bubbles[i].x,bubbles[i].y,bubbles[i].r,bubbles[i].r);
  }
}

function setup() {
    createCanvas(800, 200);
    background(0);
   
    //socket=io.connect('http://localhost:3000');
    

    
}

function draw() {
   
}