export class Dog {
  constructor (name, health, level, charClass, breed) {
    this.name = name;
    this.level = level;
    this.health = health;
    this.charClass = charClass;
    this.breed = breed;
  }
  dogStats() {
      if (this.breed === "Terrier"){
        this.level = 5;
        this.health = 40;
        this.charClass = "Wizard";
      } else if (this.breed === "Lab"){
        this.level = 3;
        this.health = 50;
        this.charClass = "Thief";
      } else if (this.breed === "Doberman"){
        this.level = 3;
        this.health = 75;
        this.charClass = "Barbarian";
      } else if (this.breed === "Poodle"){
        this.level = 6;
        this.health = 30;
        this.charClass = "Paladin";
      }
    }
}