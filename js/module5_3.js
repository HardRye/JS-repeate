"use strict";

{
  // class Hero {
  //   constructor(name, xp) {
  //     this.name = name;
  //     this.xp = xp;
  //   }
  //   // обычно статические свойства и методы пишутся до constructor
  //   static randomProp = "random prop value";
  //   // статические методы и свойства не идут на свойство prototype
  //   // следственно они не идут на экземпляр
  //   static doStuff() {
  //     console.log("do some stuff");
  //   }
  //   // все методы, которые вы укажете в классе идут на свойство prototype
  //   changeName(name) {
  //     this.name = name;
  //   }
  //   getName() {
  //     return this.name;
  //   }
  // }
  // const mango = new Hero("Mango", 1000);
  // console.log(mango); // в манго нет статичесикх свойств, они только на классе
  // console.log(
  //   "mango.__proto__ === Hero.prototype: ",
  //   mango.__proto__ === Hero.prototype
  // );
  // console.dir(Hero);
  // Hero.doStuff();
}

{
  // class Hero {
  //   static randomProp = "random prop value";
  //   static doStuff() {}
  //   constructor(name, xp) {
  //     this.innerName = name;
  //     this.xp = xp;
  //   }
  //   // геттеры и сеттеры пишутся после конструктора
  //   // они работают так же в самых обычных объектах
  //   get name() {
  //     return this.innerName;
  //   }
  //   set name(newName) {
  //     this.innerName = newName;
  //   }
  //   // синтаксис публичных свойств класса
  //   // без bind работать не будет
  //   // gainXp(amount) {
  //   //   this.xp += amount;
  //   //   console.log(this.xp);
  //   // }
  //   // без bind работать будет (авто binding)
  //   // this.gainXp
  //   gainXp = (amount) => {
  //     this.xp += amount;
  //     console.log(this.xp);
  //   };
  // }
  // const mango = new Hero("Mango", 1000);
  // mango.qwe = "Poly";
  // console.log(mango);
  // console.log(mango.qwe);
  // // вызов публичных свойств класса через коллбек
  // const fn = function (callback) {
  //   callback(1000);
  // };
  // // fn(mango.gainXp.bind(mango));
  // fn(mango.gainXp);
  // //
}

class Hero {
  static randomProp = "random prop value";
  static doStuff() {}

  constructor(name, xp) {
    this.name = name;
    this.xp = xp;
  }

  gainXp(amount) {
    console.log(`${this.name} gained ${amount} experience points`);
    this.xp += amount;
  }
}

class Warrior extends Hero {
  constructor(name, xp, weapon) {
    super(name, xp); // вызывает конструктор родителя в наследуемом классе
    this.weapon = weapon;
  }

  attack() {
    console.log(`${this.name} attacks with ${this.weapon}`);
    super.gainXp(10); // вызов родительского метода
  }
}

const mango = new Warrior("Mango", 1000, "axe");
console.log(mango);

mango.gainXp(100);

mango.attack();
mango.attack();

console.log(mango);

class Berserk extends Warrior {
  constructor({ name, xp, weapon }, battleRoar) {
    super(name, xp, weapon);
    this.roar = battleRoar;
  }

  makeRoar() {
    console.log(`${this.name} roars ${this.roar}`);
  }
}

const poly = new Berserk(
  { name: "Poly", xp: 100, weapon: "halberd" },
  "Waaagh!"
);
console.log(poly);

// const { name, xp, weapon } = mango;
// console.log(name, xp, weapon);

const mangoBerserk = new Berserk(mango, "Arrrrr!!!");
console.log(mangoBerserk);
mangoBerserk.makeRoar();
