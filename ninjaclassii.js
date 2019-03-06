function Ninja(name) {
    this.name = name;
    this.health = 100;
    this.speed = 3;
    this.strength = 3;

    this.sayName = function () {
        console.log("My ninja name is" +" "+ this.name);
    }

    this.showStats = function () {
        console.log("Name: " + this.name + " - Health: " + this.health + " - Speed: " + this.speed + " - Strength: " + this.strength);
    }

    this.drinkSake = function () {
        this.health += 10;
        console.log(this.name + " drinks some sake. Health is now " + this.health);
    }

    this.punch = function (punchedninja) {
        var test = punchedninja;
        if (test instanceof Ninja) {
            console.log(this.name + " punched " + punchedninja.name + "! " + punchedninja.name + " lost 5 health.");
            punchedninja.health -= 5;
        }
        else {
            console.log("You must give us a Ninja!");
        }
    }
    this.kick = function (kickedninja) {
        var test = kickedninja;
        if (test instanceof Ninja) {
            kickedninja.health -= (this.strength * 15);
            console.log(this.name + " kicked " + kickedninja.name + "! " + kickedninja.name + " lost " + this.strength * 15 + " health.");
        }
        else {
            console.log("No Ninja detected!");
        }
    }
}

var ninja1 = new Ninja("Bill Gates");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
var ninja2 = new Ninja("Goemon");
ninja2.sayName();
ninja2.punch(ninja1);
ninja1.showStats();
ninja1.kick(ninja2);
ninja2.showStats();