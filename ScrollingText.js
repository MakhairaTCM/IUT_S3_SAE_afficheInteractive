class ScrollingText extends ScrollingElement {
  constructor(text, font, speed, textSize = 30, yPosition = 50) {
    super(speed, yPosition); 
    this.text = text;
    this.font = font;
    this.textSize = textSize; 
  }

  dessiner() {
  
    textSize(this.textSize);
    textFont(this.font);
    textAlign(LEFT, CENTER);
    fill(0); 


    let textWidthValue = textWidth(this.text);

    this.update(textWidthValue + 50);

    text(this.text, this.xOffset, this.yPosition);

    if (this.xOffset + textWidthValue < width) {
      text(this.text, this.xOffset + textWidthValue + 50, this.yPosition);
    }
  }
}
