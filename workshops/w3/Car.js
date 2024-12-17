export class Car {
    constructor(x, y) {
      this.image = document.querySelector('img[alt="car"]');
      this.position = { x, y };
      this.velocity = 100;
    }
  
    update(time, context) {
      this.position.x += this.velocity * time.secondsPassed;
    }
  
    draw(context) {
      context.drawImage(this.image, this.position.x, this.position.y);
    }
  }