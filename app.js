// 1.შექმენით html და app.js ფაილები. შემოტანეთ app.js html-ში.
// 2. app.js ფაილში შექმენით ცვლადები და მიანიჭეთ მარტივი ტიპები (Primitive types). გამოიყენეთ ყველა მარტივი ტიპი რაც განვიხილეთ.
let myString = "text";
let myNumber = 123;
let myBoolean = true;
let myUndefined = undefined;
let myNull = null;
// 3. დამატებით შექმენით ცვლადები myName, myHobby,  yearOfBirth, currentYear და მიანიჭეთ თქვენი სახელი, ჰობი, დაბადების წელი, მიმდინარე წელი.
let myName = "Alina";
let myName2 = "Alina";
let myHobby = "reading";
let yearOfBirth = 1996;
let currentYear = 2024;

// 4. #3 დავალებაში შექმნილი ცვლადებისგან შექმენით წინადადება: My name is (აქ myName ცვლადი), I am (აქ გამოთვალეთ ასაკი currentYear  და yearOfBirth -   ცვლადების გამოყენებით) old and my hobby is (აქ myHobby ცვლადი), გამოიყენეთ წინადადების აწყობის ლექციაზე განხილული ორივე სინტაქსი.
let str1 = `My name is ${myName}, I am ${
	currentYear - yearOfBirth
} old and my hobby is ${myHobby}`;

let str2 =
	"My name is" +
	myName +
	", I am " +
	(currentYear - yearOfBirth) +
	" old and my hobby is " +
	myHobby;
// console.log(str2);

// typeof object

// Array, Object

const randomList = [
	"text",
	14,
	`true`,
	undefined,
	null,
	myName,
	myHobby,
	yearOfBirth,
	currentYear,
	`true`,
	undefined,
	null,
	myName,
	myHobby,
	yearOfBirth,
	currentYear,
	[1, 2, 3, 4, 5, [1, 2, 3]],
];
// properties, methods
// console.log(typeof randomList);
// console.log(randomList.length);

// console.log(randomList);

let arrIndex = randomList.length - 1;

// console.log(randomList[arrIndex][0]);

randomList.push("new last element");
// console.log(randomList);

randomList.unshift(100);
// console.log(randomList);

let lastElement = randomList.pop();

let firstElement = randomList.shift();
// console.log(firstElement);
// console.log(lastElement);
// console.log(randomList);
let productName = "iphone 12";

const phone = {
	name: "iphone 12",
	price: 200,
	colors: ["red", "black", "white"],
	isAvailable: true,
	stores: [
		{
			name: "store1",
			location: "location1",
			phoneNumber: ["2323232", "343434343"],
		},
		{ name: "store2", location: "location2", phoneNumber: [] },
		{ name: "store3", location: "location3", phoneNumber: [] },
		{ name: "store4", location: "location4", phoneNumber: [] },
	],
	sayHello: function () {
		console.log("Hello");
	},
};
// console.log(phone);

phone.name = "iphone 13";
phone.availableProductNumber = 10;

delete phone.price;
// console.log(phone);

let propertyToGet = "name";

const productStores = phone.stores;

// console.log(phone[propertyToGet]);

// console.log(productStores);

const products = [
	{
		name: productName,
		price: 200,
		colors: ["red", "black", "white"],
		isAvailable: true,
		image: "https://www.iphone12.com",
		stores: [
			{
				name: "store1",
				location: "location1",
				phoneNumber: ["2323232", "343434343"],
			},
			{ name: "store2", location: "location2", phoneNumber: [] },
			{ name: "store3", location: "location3", phoneNumber: [] },
			{ name: "store4", location: "location4", phoneNumber: [] },
		],
	},
	{
		name: "iphone 11",
		price: 200,
		colors: ["red", "black", "white"],
		isAvailable: true,
		stores: [
			{
				name: "store1",
				location: "location1",
				phoneNumber: ["2323232", "343434343"],
			},
			{ name: "store2", location: "location2", phoneNumber: [] },
			{ name: "store3", location: "location3", phoneNumber: [] },
			{ name: "store4", location: "location4", phoneNumber: [] },
		],
	},
	{
		name: "iphone 14",
		price: 200,
		colors: ["red", "black", "white"],
		isAvailable: true,
		stores: [
			{
				name: "store1",
				location: "location1",
				phoneNumber: ["2323232", "343434343"],
			},
			{ name: "store2", location: "location2", phoneNumber: [] },
			{ name: "store3", location: "location3", phoneNumber: [] },
			{ name: "store4", location: "location4", phoneNumber: [] },
		],
	},
];

// ['alina', 13, 'email@gmail.com']
// ['frontend', 'testing']

let test1 = "text";
const test2 = test1;

console.log(test1, test2);

test1 = "new text";

console.log(test1, test2);

const phone2 = phone;

console.log(phone, phone2);

phone2.name = "iphone 14";

console.log(phone, phone2);

// phone2 = {};

const phone3 = { ...phone };

const newArr = [...randomList];
