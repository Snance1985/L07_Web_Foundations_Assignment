
class Animal {
    constructor(animalName, animalFood) {
        this.speed = 0;
        this.food = animalFood;
        this.name = animalName;
    }
}

class Rabbit extends Animal {
    constructor(name, food) {
        super(name, food);
    }
    hide() {
        alert("He eats" + " " + this.food + " " + "His name is" + " " + this.name + "." + "25" + " " + "mph" + " " + "is how fast he runs." );
    }
}
let rabbit = new Rabbit("Roger", "carrots");
rabbit.hide();

class Cow extends Animal {
    constructor(name, food) {
        super(name, food);
    }
    moo() {
        alert("He eats" + " " + this.food + " " + "His name is" + " " + this.name + "." + "17" + " " + "mph" + " " + "is how fast he runs." );
    }
}
let cow = new Cow("Carl", "grass");
cow.moo();

class Alligator extends Animal {
    constructor(name, food) {
        super(name, food);
    }
    eat() {
        alert("He eats" + " " + this.food + " " + "His name is" + " " + this.name + "." + "20" + " " + "mph" + " " + "is how fast he runs.");
    }
}
let gator = new Alligator("Chompy", "You");
gator.eat();

class Sloth extends Animal {
    constructor(name, food) {
        super(name, food);
    }
    sleep() {
        alert("He eats" + " " + this.food + " " + "His name is" + " " + this.name + "." + this.speed + " " + "mph" + " " + "is how fast he runs.");
    }
}
let sloth = new Sloth("Sleepy", "Leaves");
sloth.sleep();