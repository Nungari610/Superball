var move = 10;
var obstacleMove = 20;
var hitA;
var hitB;
var hitC;
var hitD;
//var hitE;
//var frameRate = 30;
var score = 0; 
var gameover = false;

//triangle
var objectB = {
	x : 1350,
	y : 800,
	x2 : 1400,
	y2 : 750,
	x3 : 1450,
	y3 : 800,
	draw : function(){
		fill(221,29,81);
		triangle(this.x,this.y,this.x2,this.y2,this.x3,this.y3);
	},
	update : function(){
		this.x -= obstacleMove;
		this.x2 -= obstacleMove;
		this.x3 -= obstacleMove;
		
		 if(this.x <= 0 && this.x2<=0 && this.x3<=0){
		 	this.x =1350
		 	this.x2 =1400
		 	this.x3 =1450
		}
		
	}
}
//First obstacle

var objectA = {
	x : 1200,
	y : 760,
	s1 : 45,
	s2 : 40,
	draw : function(){
		fill(185,233,23);
		rect(this.x,this.y,this.s1,this.s2);
	},
	update : function(){
		this.x -= obstacleMove;
		if(this.x <=-20){
			this.x = random(1000,2000);
			console.log(this.x)
		}
	}

}
//rectangle 2
var objectD = {
	x : 1000,
	y : 760,
	s1 : 45,
	s2 : 40,
	draw : function(){
		fill(233,122,23);
		rect(this.x,this.y,this.s1,this.s2);
	},
	update : function(){
		this.x -= obstacleMove;
		if(this.x <=-20){
			this.x = random(1000,2000);
			console.log(this.x)
		}
	}
}
//triangle 2
var objectC = {
	x : 1500,
	y : 800,
	x2 : 1550,
	y2 : 750,
	x3 : 1600,
	y3 : 800,
	draw : function(){
		fill(140,147,202);
		triangle(this.x,this.y,this.x2,this.y2,this.x3,this.y3);
	},
	update : function(){
		this.x -= obstacleMove;
		this.x2 -= obstacleMove;
		this.x3 -= obstacleMove;
		
		 if(this.x <= 0 && this.x2<=0 && this.x3<=0){
		 	this.x =1500
		 	this.x2 =1550
		 	this.x3 =1600
		}
		
	}
}
//triangle 2
// var objectE = {
// 	x : 150,
// 	y : 800,
// 	x2 : 150,
// 	y2 : 750,
// 	x3 : 250,
// 	y3 : 800,
// 	draw : function(){
// 		fill(125,125,125);
// 		triangle(this.x,this.y,this.x2,this.y2,this.x3,this.y3);
// 	},
// 	update : function(){
// 		this.x -= obstacleMove;
// 		this.x2 -= obstacleMove;
// 		this.x3 -= obstacleMove;
		
// 		 if(this.x <= 0 && this.x2<=0 && this.x3<=0){
// 		 	this.x =1500
// 		 	this.x2 =1550
// 		 	this.x3 =1600
// 		}
		
// 	}
// }






//Main player object
var player = {
	x : 50,
	y : 650,
	s : 50,
	gravity : 10,
	draw : function(){
		fill(34,187,187);
		ellipse(this.x,this.y,this.s,this.s);
		this.y = constrain(this.y,690,779);
		this.y += this.gravity;
	},
	jump : function(){
		if(keyIsDown(UP_ARROW)){
			this.y = this.y - 15;
		}
	},
	
}


function setup(){
	createCanvas(1500,800);
	 //frameRate(0.5); 
}
function draw(){
	background(31,4,57);
	player.draw();
	player.jump();
	//objectA.draw();
	//objectA.update();
	//objectB.draw();
	//objectB.update();
	objectC.draw();
	objectC.update();
	objectD.draw();
	objectD.update();
	// objectE.draw();
	// objectE.update();

		
	text("Score :"+ score, 750,100);
	textSize(30);
	
		//if(obstacleMove = 0);
		//score = 0;
	//frameRate(100);
	if(frameCount % 30==0 && gameover == false){
		score ++;
	}
	
	hitB = dist(player.x,player.y,objectB.x,objectB.y);
	     console.log(hitB);
	     if(hitB <= 35){
	     	gameover = true;
	     	 obstacleMove = 0;
	     }
	 hitC = dist(player.x,player.y,objectC.x,objectC.y);
         console.log(hitC);
          if(hitC <= 28){
          	gameover = true;
          	obstacleMove = 0;
          }
     hitD = dist(player.x,player.y,objectD.x,objectD.y);
         console.log(hitD);
         if(hitD <= 35){
         	gameover = true;
         	obstacleMove = 0;
         }
         	hitA = dist(player.x,player.y,objectA.x,objectA.y);
		console.log(hitA);
		if(hitA <= 35){
         	gameover = true;
			obstacleMove = 0;
			score = score;
			
		}
		// hitE = dist(player.x,player.y,objectE.x,objectE.y);
	 //     console.log(hitE);
	 //     if(hitB <= 35){
	 //     	gameover = true;
	 //     	 obstacleMove = 0;
	 //     }

		if(gameover == true){
			background(0);
			textSize(40);
			text("Game over ", 500,100);
			text("Your final score is : " + score,500,200);
		}

}