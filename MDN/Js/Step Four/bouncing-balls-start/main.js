// 获得开始画画的环境
const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);
 
//生成随机数
function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
//随机颜色
function randomColor() {
  return (
    "rgb(" + 
    random(0, 255) + 
    "," + 
    random(0, 255) + 
    "," +
    random(0, 255) +
    ")"
  );
}
// 建立小球模型
function Ball(x, y, velX, velY, color, size) {
  this.x = x;
  this.y = y;
  this.velX = velX;
  this.velY = velY;
  this.color = color;
  this.size = size;
}

// 画小球
Ball.prototype.draw = function() {
  ctx.beginPath();
  ctx.fillStyle = this.color; //定义颜色
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI); //在纸上画出一段圆弧
  ctx.fill();
};

//让小球动起来
Ball.prototype.update = function () {
  if(this.x + this.size >= width) {
    this.velX = -(this.velX);
  }

  if(this.x - this.size <= 0) {
    this.velX = -(this.velX);
  }

  if(this.y + this.size >= width) {
    this.velY = -(this.velY);
  }
  
  if(this.y - this.size <= 0) {
    this.velY = -(this.velY);
  }
  this.x += this.velX;
  this.y += this.velY;
};

// 添加碰撞检测
Ball.prototype.collisionDetect = function () {
  for (let j = 0; j < balls.length; j ++) {
    if (this !== balls[j]) {
      const dx = this.x - balls[j].x;
      const dy = this.y - balls[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if(distance < this.size + balls[j].size) {
        balls[j].color = this.color = randomColor();
      }
    }
  }
}

// 添加一些小球
let balls = [];

while (balls.length < 10) {
  let size = random(10, 20);
  let ball = new Ball (
    //避免错误，球至少离画布边缘有球本身一倍宽度的距离
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(-7, 7),
    random(-7, 7),
    randomColor(),
    size,
  );
  balls.push(ball);
}

// 运动循环
function loop() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.25)"; //每动一次都会直接用一个新的幕布掩盖掉上一次的痕迹，设置成半透明能够看到之前的运动轨迹。
  ctx.fillRect(0, 0, width, height);

  for(let i = 0; i < balls.length; i ++) {
    balls[i].draw(); //自己把自己画出来
    balls[i].update();
    balls[i].collisionDetect();
  }
  requestAnimationFrame(loop);
}
loop();