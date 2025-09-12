"use strict";
class Cat {
    constructor(name, move_type, is_cute) {
        this.name = name;
        this.move_type = move_type;
        this.is_cute = is_cute;
    }
    makeSound() {
        return "Meow";
    }
}
class Bird {
    constructor(name, move_type, is_cute) {
        this.name = name;
        this.move_type = move_type;
        this.is_cute = is_cute;
    }
    makeSound() {
        return "Chirp";
    }
}
class Fish {
    constructor(name, move_type, is_cute) {
        this.name = name;
        this.move_type = move_type;
        this.is_cute = is_cute;
    }
    makeSound() {
        return "Blub";
    }
}
