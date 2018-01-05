const add = (a, b) => {
	return a + b;
}

const jordy = {
	name : "Jordy",
	age : 2,
	cities : ['Boston', 'NYC', 'SF'],
	callName() {
		return this.cities.map((city) => this.name + ' has lived in ' + city);
	}
};


const multiply = {
	numbers : [1, 2, 3],
	multiplyBy : 2,
	multiplier() {
		return this.numbers.map((num) => this.multiplyBy * num);
	}
};

console.log(multiply.multiplier());