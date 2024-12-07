class LabeledCircle {
  constructor(x, y, chiffre) {
    this.x = x;
    this.y = y;
    this.label = chiffre;
    this.c = color(random(255), random(255), random(255)); 
  }

  dessiner() {
    fill(this.c); 
    noStroke(); 
    circle(this.x, this.y, 30);
    fill(0); 
    textSize(18);
    text(this.label, this.x - (this.label.length === 1 ? 5 : 11), this.y); // Centre le texte
  }
}