"use strict";

{
  // // every fn has [[Prototype]] excepts arrow fn
  // const Hero = function (name, xp) {
  //   // this = {}
  //   // this.__proto__ = Hero.prototype
  //   // the same / equivalent to :
  //   // this = Object.create(Hero.prototype)
  //   this.name = name;
  //   this.xp = xp;
  //   // return this;
  // };
  // Hero.prototype.coolProp = "cool prop";
  // Hero.prototype.changeName = function (name) {
  //   console.log("this: ", this);
  //   this.name = name;
  // };
  // console.log("Hero.prototype: ", Hero.prototype);
  // const mango = new Hero("Mango", 1000);
  // // console.log(mango);
  // // console.log(mango.coolProp);
  // mango.changeName("Mango the great");
  // console.log("mango: ", mango);
  // const poly = new Hero("Poly", 2000);
  // poly.changeName("Poly the best");
  // console.log("poly: ", poly);
  // // time to check this statement
  // // this.__proto__ = Hero.prototype
  // console.log(
  //   "mango.__proto__ === Hero.prototype: ",
  //   mango.__proto__ === Hero.prototype
  // );
}

const Hero = function (name, xp) {
  this.name = name;
  this.xp = xp;
};

Hero.prototype.gainXp = function (amount) {
  console.log(`${this.name} gained ${amount} experience points`);
  this.xp += amount;
};

{
  // const mango = new Hero("Mango", 0);
  // console.log(mango);
  // mango.gainXp(500);
  // console.log(mango);
}

const Warrior = function (name, xp, weapon) {
  // this = Object.create(Warrior.prototype)
  Hero.call(this, name, xp);
  // this = {name, xp}

  this.weapon = weapon;
};

console.log("Line 61: ", Warrior.prototype);
Warrior.prototype = Object.create(Hero.prototype);
// {__proto__: Hero.prototype}
console.log("Line 64: ", Warrior.prototype);
Warrior.prototype.constructor = Warrior;
// {__proto__: Hero.prototype, constructor: Warrior}
console.log("Line 67: ", Warrior.prototype);

Warrior.prototype.attack = function () {
  console.log(`${this.name} attacks with ${this.weapon}`);
};

const mango = new Warrior("Mango", 0, "halberd");
console.log("mango:", mango);
mango.attack();
mango.gainXp(500);
console.log("mango: ", mango);
