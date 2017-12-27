class Person {
	constructor(name = "none", age = 0) {
		this.name = name;
		this.age = age;
	}
	getDescription() {
		return `${this.name} is ${this.age} year(s) old.`;
	}
}

class Student extends Person {
	constructor(name, age, major) {
		super(name, age);
		this.major = major;
	}
	hasMajor() {
		return !!this.major;
	}
	getDescription() {
		let descript = super.getDescription();
		if(this.hasMajor()) {
			descript += ` Their major is ${this.major}`;
		}
		return descript;
	}
}

const me = new Student("Jordy Guntur", 20, "computer science");
console.log(me.getDescription());