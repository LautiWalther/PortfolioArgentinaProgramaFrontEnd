class User {
    private name: string;
    private lastname: string;
    readonly dateofBirdth: string;
    private languages: object[];
    private admin: number;

    constructor(name: string, lastname: string, dateofBirdth: string, languages: object[], admin: number) {
        this.name = name;
        this.lastname = lastname;
        this.dateofBirdth = dateofBirdth;
        this.languages = languages;
        this.admin = admin;
    }

    getName() {
        return this.name;
    }
    setName(newName: string) {
        this.name = newName;
    }

    getLastname() {
        return this.lastname;
    }
    setLastname(newLastname: string) {
        this.lastname = newLastname;
    }

    getDateofBirdth() {
        return this.dateofBirdth;
    }

    getLanguages() {
        return this.languages;
    }
    setLanguages(newLangs: object[]) {
        this.languages = newLangs;
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
], 1);

console.log(user);