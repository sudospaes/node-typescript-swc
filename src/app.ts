import { Singleton } from "./decorators/decorators.js";

@Singleton
class Animal {
  constructor(private sound: string) {
    this.sound = sound;
  }
  makeSound() {
    console.log(this.sound);
  }
}

const cat = new Animal("Meow");
cat.makeSound();
//HI
const cow = new Animal("mooo");
cow.makeSound();
