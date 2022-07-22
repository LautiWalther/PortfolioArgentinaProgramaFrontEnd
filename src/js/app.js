"use strict";
class Person {
    constructor(name, lastname, dateofBirdth, languages) {
        this.name = name;
        this.lastname = lastname;
        this.dateofBirdth = dateofBirdth;
        this.languages = languages;
    }
    getName() {
        return this.name;
    }
    setName(newName) {
        this.name = newName;
    }
    getLastname() {
        return this.lastname;
    }
    setLastname(newLastname) {
        this.lastname = newLastname;
    }
    getDateofBirdth() {
        return this.dateofBirdth;
    }
    getLanguages() {
        return this.languages;
    }
    setLanguages(newLangs) {
        this.languages = newLangs;
    }
}
class User extends Person {
    constructor(name, lastname, dateofBirdth, languages, admin, level, experience) {
        super(name, lastname, dateofBirdth, languages);
        this.level = level;
        this.experience = experience;
        this.admin = admin;
    }
    getAdmin() {
        return this.admin;
    }
    setAdmin(newLevel) {
        this.admin = newLevel;
    }
    getExperience() {
        return this.experience;
    }
    setExperience(newExp) {
        this.experience = newExp;
    }
    getLevel() {
        return this.level;
    }
    setLevel(newLevel) {
        this.level = newLevel;
    }
    levelUp() {
        this.setLevel(this.getLevel() + 1);
        this.setExperience(0);
    }
    levelDown() {
        this.setLevel(this.getLevel() - 1);
        this.setExperience(0);
    }
}
var user = new User('Lautaro', 'Walther', '25-02-2003', [
    {
        name: 'Spanish',
        level: {
            speaking: 10,
            writing: 10,
            reading: 10
        },
        avgLevel: 10
    },
    {
        name: 'English',
        level: {
            speaking: 8,
            writing: 9,
            reading: 9
        },
        avgLevel: 8.67
    }
], 1, 6, 1437);
console.log(user);
