class ScrollingImage extends ScrollingElement {
  constructor(image, speed, imgWidth, imgHeight, yPosition) {
    super(speed, yPosition);
    this.image = image; 
    this.imgWidth = imgWidth; 
    this.imgHeight = imgHeight; 
  }

  dessiner() {

    this.update(this.imgWidth);

    
    image(this.image, this.xOffset, this.yPosition, this.imgWidth, this.imgHeight);
    image(this.image, this.xOffset + this.imgWidth, this.yPosition, this.imgWidth, this.imgHeight);
  }
}
