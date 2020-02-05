//Default-parameters
//ПАРАМЕТРЫ ПО-УМОЛЧАНИЮ
function findProducts(opts ={ minPrice: 10, maxPrice: 20 }) {
	// console.log(opts); Object{}
}
findProducts({});

function fetchOrders(count = 10, start = 0) {
	// console.log('Count: ', count, 'Start: ', start)
}
fetchOrders();

/**********
 * ********* */

// REST-ПАРАМЕТР
function numbers(...args) {
// console.log(args); [1, 2, 6, 4]
};
numbers(1, 2, 6, 4);

/**********
 * ********* */

// SPREAD ОПЕРАТОР ДЛЯ МАССИВОВ
const array1 = [1, 2, 3];
const array2 = [4, 5, 10];
const maximumNumber = Math.max(0, ...array1, ...array2, 7);
// console.log(maximumNumber);
const shallowCopyArray = [...array1];
// console.log(shallowCopyArray)

/**********
 * ********* */

// ДЕСТРУКТУРИЗАЦИЯ ОБЪЕКТОВ
const person = {
	name: 'Evgeniy',
	city: 'Moscow',
	total: 100,
	education: {
		easyUm: 'JavaScript',
		udemy: 'React'
	}
};
const { name, city, total, education:{easyUm, udemy} } = person;
const { role = 'user' } = person;
const { permissions: {login = 'admin'} = {} } = person; 
// console.log(name, city, total, easyUm, udemy);

function connect({
	host = 'localhost',
	port = 12345,
	user = 'guest'
} = {}) {
	// console.log('localhost: ',host, 'port: ',port, 'user: ',user)
}
connect();

const dict = {
	duck: 'quack',
	dog: 'wuff',
	mouse: 'squeak'
};
const { duck, ...otherAnimals} = dict;
// console.log(otherAnimals); {dog: "wuff", mouse: "squeak"}
// console.log(duck); quack

/**********
 * ********* */

// ДЕСТРУКТУРИЗАЦИЯ МАССИВОВ
const fib = [1, 1, 2, 3, 5, 8, 13];
const [a, b, c] = fib;
// console.log(a, b, c); 1 1 2

const [, d, , e] = fib;
// console.log(d, e); 1 3

const line = [[10, 17], [14, 7]];
const[ [p1x, p1y], [p2x, p2y] ] = line;
// console.log(p1x, p1y, p2x, p2y); 10 17 14 7

const people = ['chris', 'sandra'];
const [name1, name2, name3 = 'guest'] = people;
// console.log(name1, name2, name3); chris sandra guest
const [aa, ...others] = people;
// console.log(others); ["sandra"]

const cars = {
	mers: 'black',
	bmw: 'white',
	tayota: 'red',
	lada: 'red'
}
const res = Object.entries(cars)
// console.log(res); [
// 	["mers", "black"]
//   ["bmw", "white"]
//   ["tayota", "red"]
//   ["lada", "red"]
// ]
// .filter((arr) => arr[1] === 'red');
//  console.log(res); [
// 	["tayota", "red"]
//  ["lada", "red"]
// ]
.filter(([key, value]) => value === 'red')
.map(([key]) => key)
// console.log(res); ["tayota", "lada"]

// .map(([key, value]) => value)
// console.log(res); ["black", "white", "red", "red"]

const shape = {
	type: 'segment',
	coordinates: {
		start: [10, 15],
		end: [17, 15]
	}
}
const { coordinates: { start: [startX, startY], end: [endx, endY]}} = shape;
// console.log(startX, startY, endx, endY); 10 15 17 15

/**********
 * ********* */

// ОБЬЕКТЫ
const defaulst = {
	address: 'null',
	dbname: 'blog',
	dbuser: 'admin'
};
const op = {
	dbUser: 'john',
	password: 'utopia'
};
const res5 = Object.assign({}, defaulst, op)
// console.log(res5); {address: "null", dbname: "blog", dbuser: "admin", dbUser: "john", password: "utopia"}

const book = {
	title: 'Romeo',
	author: 'Shekspir'
};
const shallowCopyObject = Object.assign({}, book);
// console.log(shallowCopyObject); {title: "Romeo", author: "Shekspir"}

/**********
 * ********* */

// ОПЕРАТОР OBJECT SPREAD
port = 8080;
const res6 = {
	...defaulst, 
	...op, 
	port,
  conect(){}};
// console.log(res6); {address: "null", dbname: "blog", dbuser: "admin", dbUser: "john", password: "utopia", port; 8080}
