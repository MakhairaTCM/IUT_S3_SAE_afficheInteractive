class ScrollingElement {
  constructor(speed, yPosition, xOffset=0) {
    this.speed = speed; 
    this.yPosition = yPosition; 
    this.xOffset = xOffset; 
  }

  update(elementWidth) {
    this.xOffset -= this.speed;
    
    if (this.xOffset < -elementWidth) {
      this.xOffset += elementWidth;
    }
  }
}
